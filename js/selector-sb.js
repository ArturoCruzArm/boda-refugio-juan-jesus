// selector-sb.js — Supabase sync + Realtime para Foro 7
// Slug: boda-refugio-juan-jesus | Storage key: boda_refugio_juan_jesus_photo_selections
(function () {
    var SUPABASE_URL  = 'https://nzpujmlienzfetqcgsxz.supabase.co';
    var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s';
    var EVENTO_SLUG   = 'boda-refugio-juan-jesus';
    var SB_KEY        = 'boda_refugio_juan_jesus_photo_selections';
    var SB_H = { 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON, 'Content-Type': 'application/json' };

    var SESSION_KEY = 'foro7_sid';
    var sid = localStorage.getItem(SESSION_KEY);
    if (!sid) { sid = crypto.randomUUID(); localStorage.setItem(SESSION_KEY, sid); }

    var eventoId   = null;
    var _syncing   = false;
    var _syncTimer = null;
    var _sb        = null; // supabase client

    async function getEventoId() {
        if (eventoId) return eventoId;
        var r = await fetch(SUPABASE_URL + '/rest/v1/eventos?slug=eq.' + EVENTO_SLUG + '&select=id&limit=1', { headers: SB_H });
        var rows = await r.json();
        eventoId = rows[0] ? rows[0].id : null;
        return eventoId;
    }

    function showSyncStatus(ok) {
        var el = document.getElementById('sb-sync-status');
        if (!el) {
            el = document.createElement('div');
            el.id = 'sb-sync-status';
            el.style.cssText = 'position:fixed;bottom:10px;right:10px;padding:6px 14px;border-radius:20px;font-size:.8rem;z-index:9999;transition:opacity .5s;pointer-events:none;';
            document.body.appendChild(el);
        }
        el.style.background = ok ? '#059669' : '#dc2626';
        el.style.color = '#fff';
        el.textContent = ok ? '\u2601 Sincronizado' : '\u26a0 Error al sincronizar';
        el.style.opacity = '1';
        if (ok) setTimeout(function(){ el.style.opacity = '0'; }, 3000);
    }

    // --- SYNC: sube estado local a Supabase ---
    async function sbSync(sels) {
        try {
            var eid = await getEventoId();
            if (!eid) return;

            var activeIndices = [];
            var rows = [];
            Object.entries(sels).forEach(function(e) {
                var idx = parseInt(e[0]), sel = e[1];
                var hasAny = sel.impresion || sel.invitacion || sel.descartada || sel.ampliacion;
                if (hasAny) {
                    activeIndices.push(idx);
                    rows.push({
                        evento_id: eid, session_id: sid, foto_index: idx,
                        impresion: sel.impresion || false, invitacion: sel.invitacion || false,
                        descartada: sel.descartada || false, ampliacion: sel.ampliacion || false,
                        datos: sel
                    });
                }
            });

            if (rows.length) {
                var r = await fetch(SUPABASE_URL + '/rest/v1/selecciones?on_conflict=evento_id,foto_index', {
                    method: 'POST',
                    headers: Object.assign({}, SB_H, { 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
                    body: JSON.stringify(rows)
                });
                if (!r.ok) throw new Error('UPSERT ' + r.status);
            }

            // DELETE deseleccionadas
            var dbResp = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index',
                { headers: SB_H }
            );
            if (dbResp.ok) {
                var dbRows = await dbResp.json();
                var toDelete = dbRows.map(function(r){ return r.foto_index; })
                    .filter(function(i){ return activeIndices.indexOf(i) === -1; });
                if (toDelete.length) {
                    await fetch(
                        SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&foto_index=in.(' + toDelete.join(',') + ')',
                        { method: 'DELETE', headers: SB_H }
                    );
                }
            }

            showSyncStatus(true);
        } catch(e) {
            console.error('sbSync error:', e);
            showSyncStatus(false);
        }
    }

    // --- LOAD: lee Supabase una vez al abrir ---
    async function sbLoad() {
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var r = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index,datos,impresion,invitacion,descartada,ampliacion',
                { headers: SB_H }
            );
            if (!r.ok) return;
            var rows = await r.json();

            var sb = {};
            rows.forEach(function(row) {
                var sel = (row.datos && Object.keys(row.datos).length)
                    ? row.datos
                    : { impresion: row.impresion, invitacion: row.invitacion, descartada: row.descartada, ampliacion: row.ampliacion };
                if (Object.values(sel).some(function(v){ return v; })) sb[row.foto_index] = sel;
            });

            // Merge: Supabase base + local encima
            var local = {};
            try { local = JSON.parse(localStorage.getItem(SB_KEY) || '{}'); } catch(e) {}
            var merged = Object.assign({}, sb);
            Object.entries(local).forEach(function(e) {
                if (Object.values(e[1]).some(function(v){ return v; })) merged[e[0]] = e[1];
            });

            _syncing = true;
            try {
                localStorage.setItem(SB_KEY, JSON.stringify(merged));
                if (typeof loadSelections === 'function') loadSelections();
                if (typeof renderGallery === 'function') renderGallery();
                if (typeof updateStats === 'function') updateStats();
                if (typeof updateFilterButtons === 'function') updateFilterButtons();
            } finally { _syncing = false; }

            if (Object.keys(merged).length) sbSync(merged).catch(function(){});
            sbRegistrarVisita();
            mostrarBanner(merged);

            // Iniciar Realtime despues de la carga inicial
            sbSubscribe(eid);
        } catch(e) { console.error('sbLoad error:', e); }
    }

    // --- REALTIME: recibir cambios de otros navegadores ---
    function sbSubscribe(eid) {
        if (!window.supabase || !window.supabase.createClient) {
            console.warn('supabase-js no disponible, sin Realtime');
            return;
        }
        try {
            _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
            _sb.channel('selecciones-' + EVENTO_SLUG)
                .on('postgres_changes', {
                    event: '*',
                    schema: 'public',
                    table: 'selecciones',
                    filter: 'evento_id=eq.' + eid
                }, function(payload) {
                    // Ignorar cambios propios
                    if (payload.new && payload.new.session_id === sid) return;
                    if (payload.old && payload.old.session_id === sid) return;
                    // Recargar desde Supabase
                    sbReloadFromDB(eid);
                })
                .subscribe();
        } catch(e) { console.warn('Realtime error:', e); }
    }

    async function sbReloadFromDB(eid) {
        try {
            var r = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index,datos,impresion,invitacion,descartada,ampliacion',
                { headers: SB_H }
            );
            if (!r.ok) return;
            var rows = await r.json();
            var sb = {};
            rows.forEach(function(row) {
                var sel = (row.datos && Object.keys(row.datos).length)
                    ? row.datos
                    : { impresion: row.impresion, invitacion: row.invitacion, descartada: row.descartada, ampliacion: row.ampliacion };
                if (Object.values(sel).some(function(v){ return v; })) sb[row.foto_index] = sel;
            });

            _syncing = true;
            try {
                localStorage.setItem(SB_KEY, JSON.stringify(sb));
                if (typeof loadSelections === 'function') loadSelections();
                if (typeof renderGallery === 'function') renderGallery();
                if (typeof updateStats === 'function') updateStats();
                if (typeof updateFilterButtons === 'function') updateFilterButtons();
            } finally { _syncing = false; }
        } catch(e) { console.error('sbReloadFromDB error:', e); }
    }

    async function sbRegistrarVisita(pagina) {
        try {
            var eid = await getEventoId();
            if (!eid) return;
            await fetch(SUPABASE_URL + '/rest/v1/visitas', {
                method: 'POST',
                headers: Object.assign({}, SB_H, { 'Prefer': 'return=minimal' }),
                body: JSON.stringify({ evento_id: eid, pagina: pagina || 'selector', session_id: sid })
            });
        } catch(e) {}
    }
    window.sbRegistrarVisita = sbRegistrarVisita;

    function mostrarBanner(sels) {
        if (document.getElementById('banner-sin-sel')) return;
        if (Object.keys(sels).length > 0) return;
        var cfg = window.CONFIG || window.LIMITS || {};
        var fecha = cfg.fechaEvento || cfg.fecha;
        if (fecha && new Date(fecha) > new Date()) return;
        var banner = document.createElement('div');
        banner.id = 'banner-sin-sel';
        banner.style.cssText = 'background:#78350f;color:#fcd34d;text-align:center;padding:12px 20px;font-size:.88rem;position:sticky;top:0;z-index:200;line-height:1.5;';
        banner.innerHTML = '\uD83D\uDCF8 <strong>\u00a1Tus fotos est\u00e1n listas!</strong> A\u00fan no has seleccionado ninguna. \u00a1Empieza ahora! <button onclick="this.parentElement.remove()" style="margin-left:12px;background:transparent;border:1px solid #fcd34d;color:#fcd34d;padding:1px 8px;border-radius:4px;cursor:pointer;">\u00d7</button>';
        document.body.insertBefore(banner, document.body.firstChild);
    }

    // Interceptar localStorage.setItem para sincronizar al guardar
    var _origSet = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function(key, value) {
        _origSet(key, value);
        if (key === SB_KEY && !_syncing) {
            clearTimeout(_syncTimer);
            _syncTimer = setTimeout(function() {
                try { sbSync(JSON.parse(value)); } catch(e) {}
            }, 800);
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        sbLoad();
    });
})();
