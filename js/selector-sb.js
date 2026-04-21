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

    var eventoId    = null;
    var sbDisponible = true;
    var _lastSync   = 0;

    async function getEventoId() {
        if (eventoId) return eventoId;
        var r = await fetch(SUPABASE_URL + '/rest/v1/eventos?slug=eq.' + EVENTO_SLUG + '&select=id&limit=1', { headers: SB_H });
        var rows = await r.json();
        eventoId = rows[0] ? rows[0].id : null;
        return eventoId;
    }

    // --- UPSERT: sube selecciones activas (1 query) ---
    async function sbUpsertSelections() {
        if (!sbDisponible) return;
        var sels = typeof photoSelections !== 'undefined' ? photoSelections : {};
        var snapshot = Object.assign({}, sels);
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var rows = [];
            Object.entries(snapshot).forEach(function(e) {
                var idx = parseInt(e[0]), sel = e[1];
                if (sel.impresion || sel.invitacion || sel.descartada || sel.ampliacion) {
                    rows.push({
                        evento_id: eid, session_id: sid, foto_index: idx,
                        impresion: sel.impresion || false, invitacion: sel.invitacion || false,
                        descartada: sel.descartada || false, ampliacion: sel.ampliacion || false,
                        datos: sel, code_version: 2
                    });
                }
            });
            if (rows.length === 0) return;
            _lastSync = Date.now();
            var r = await fetch(SUPABASE_URL + '/rest/v1/selecciones?on_conflict=evento_id,foto_index', {
                method: 'POST',
                headers: Object.assign({}, SB_H, { 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
                body: JSON.stringify(rows)
            });
            if (!r.ok) throw new Error('UPSERT ' + r.status);
            _lastSync = Date.now();
        } catch(e) {
            console.warn('[Supabase] Sync error:', e.message);
        }
    }

    // --- DELETE individual: borra 1 foto de Supabase (1 query) ---
    async function sbDeleteSelection(foto_index) {
        if (!sbDisponible) return;
        try {
            var eid = await getEventoId();
            if (!eid) return;
            _lastSync = Date.now();
            await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&foto_index=eq.' + foto_index,
                { method: 'DELETE', headers: SB_H }
            );
            _lastSync = Date.now();
        } catch(e) {
            console.warn('[Supabase] Delete error:', e.message);
        }
    }

    // --- DELETE ALL: borra todas de Supabase ---
    async function sbDeleteAll() {
        if (!sbDisponible) return;
        try {
            var eid = await getEventoId();
            if (!eid) return;
            _lastSync = Date.now();
            await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid,
                { method: 'DELETE', headers: SB_H }
            );
            _lastSync = Date.now();
        } catch(e) {
            console.warn('[Supabase] DeleteAll error:', e.message);
        }
    }

    // --- LOAD: lee Supabase al abrir la pagina ---
    async function sbLoad() {
        try {
            var eid = await getEventoId();
            if (!eid) { sbDisponible = false; return; }

            var r = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index,datos,impresion,invitacion,descartada,ampliacion',
                { headers: SB_H }
            );
            if (!r.ok) throw new Error(r.status);
            var rows = await r.json();

            var sb = {};
            rows.forEach(function(row) {
                var sel = (row.datos && Object.keys(row.datos).length)
                    ? row.datos
                    : { impresion: row.impresion, invitacion: row.invitacion, descartada: row.descartada, ampliacion: row.ampliacion };
                if (Object.values(sel).some(function(v){ return v; })) sb[row.foto_index] = sel;
            });

            // Si Supabase tiene datos, es la verdad absoluta.
            // Solo usar localStorage como migracion si Supabase esta vacio.
            var local = {};
            try { local = JSON.parse(localStorage.getItem(SB_KEY) || '{}'); } catch(e) {}

            var merged;
            if (Object.keys(sb).length > 0) {
                // Supabase tiene datos: es la fuente de verdad
                merged = sb;
            } else if (Object.keys(local).length > 0) {
                // Supabase vacio + local tiene datos: migrar a Supabase
                merged = local;
                sbUpsertSelections().catch(function(){});
            } else {
                merged = {};
            }

            // Aplicar al UI y sobreescribir localStorage
            if (typeof photoSelections !== 'undefined') {
                photoSelections = merged;
            }
            try { localStorage.setItem(SB_KEY, JSON.stringify(merged)); } catch(e) {}
            if (typeof loadSelections === 'function') loadSelections();
            if (typeof renderGallery === 'function') renderGallery();
            if (typeof updateStats === 'function') updateStats();
            if (typeof updateFilterButtons === 'function') updateFilterButtons();

            sbRegistrarVisita();
            mostrarBanner(merged);
            sbSubscribe(eid);
        } catch(e) {
            console.warn('[Supabase] Usando localStorage:', e.message);
            sbDisponible = false;
        }
    }

    // --- REALTIME: recibir cambios de otros navegadores ---
    function sbSubscribe(eid) {
        if (!window.supabase || !window.supabase.createClient) return;
        try {
            var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
                auth: { persistSession: false }
            });
            client.channel('sel-' + EVENTO_SLUG)
                .on('postgres_changes', {
                    event: '*',
                    schema: 'public',
                    table: 'selecciones',
                    filter: 'evento_id=eq.' + eid
                }, function(payload) {
                    // Ignorar eco de cambios propios (3s ventana)
                    if (Date.now() - _lastSync < 3000) return;
                    sbReloadFromDB(eid);
                })
                .subscribe();
        } catch(e) { console.warn('[sb] Realtime error:', e); }
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
            if (typeof photoSelections !== 'undefined') {
                photoSelections = sb;
            }
            try { localStorage.setItem(SB_KEY, JSON.stringify(sb)); } catch(e) {}
            if (typeof renderGallery === 'function') renderGallery();
            if (typeof updateStats === 'function') updateStats();
            if (typeof updateFilterButtons === 'function') updateFilterButtons();
        } catch(e) {}
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

    function mostrarBanner(sels) {
        if (document.getElementById('banner-sin-sel')) return;
        if (Object.keys(sels).length > 0) return;
        var banner = document.createElement('div');
        banner.id = 'banner-sin-sel';
        banner.style.cssText = 'background:#78350f;color:#fcd34d;text-align:center;padding:12px 20px;font-size:.88rem;position:sticky;top:0;z-index:200;line-height:1.5;';
        banner.innerHTML = '\uD83D\uDCF8 <strong>\u00a1Tus fotos est\u00e1n listas!</strong> A\u00fan no has seleccionado ninguna. \u00a1Empieza ahora! <button onclick="this.parentElement.remove()" style="margin-left:12px;background:transparent;border:1px solid #fcd34d;color:#fcd34d;padding:1px 8px;border-radius:4px;cursor:pointer;">\u00d7</button>';
        document.body.insertBefore(banner, document.body.firstChild);
    }

    // Exponer funciones para que selector.js las llame directamente
    window.sbUpsertSelections = sbUpsertSelections;
    window.sbDeleteSelection  = sbDeleteSelection;
    window.sbDeleteAll         = sbDeleteAll;
    window.sbRegistrarVisita   = sbRegistrarVisita;
    window.sbDisponible        = function() { return sbDisponible; };

    document.addEventListener('DOMContentLoaded', function() {
        sbLoad();
    });
})();
