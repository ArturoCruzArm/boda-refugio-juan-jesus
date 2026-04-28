// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ['imagenes/DSC_5590.webp', 'imagenes/DSC_5591.webp', 'imagenes/DSC_5592.webp', 'imagenes/DSC_5593.webp', 'imagenes/DSC_5594.webp', 'imagenes/DSC_5595.webp', 'imagenes/DSC_5596.webp', 'imagenes/DSC_5597.webp', 'imagenes/DSC_5598.webp', 'imagenes/DSC_5599.webp', 'imagenes/DSC_5600.webp', 'imagenes/DSC_5601.webp', 'imagenes/DSC_5602.webp', 'imagenes/DSC_5603.webp', 'imagenes/DSC_5604.webp', 'imagenes/DSC_5605.webp', 'imagenes/DSC_5606.webp', 'imagenes/DSC_5607.webp', 'imagenes/DSC_5608.webp', 'imagenes/DSC_5609.webp', 'imagenes/DSC_5610.webp', 'imagenes/DSC_5611.webp', 'imagenes/DSC_5612.webp', 'imagenes/DSC_5613.webp', 'imagenes/DSC_5614.webp', 'imagenes/DSC_5615.webp', 'imagenes/DSC_5616.webp', 'imagenes/DSC_5617.webp', 'imagenes/DSC_5618.webp', 'imagenes/DSC_5619.webp', 'imagenes/DSC_5620.webp', 'imagenes/DSC_5621.webp', 'imagenes/DSC_5622.webp', 'imagenes/DSC_5623.webp', 'imagenes/DSC_5624.webp', 'imagenes/DSC_5625.webp', 'imagenes/DSC_5626.webp', 'imagenes/DSC_5627.webp', 'imagenes/DSC_5628.webp', 'imagenes/DSC_5629.webp', 'imagenes/DSC_5630.webp', 'imagenes/DSC_5631.webp', 'imagenes/DSC_5632.webp', 'imagenes/DSC_5633.webp', 'imagenes/DSC_5634.webp', 'imagenes/DSC_5635.webp', 'imagenes/DSC_5636.webp', 'imagenes/DSC_5637.webp', 'imagenes/DSC_5638.webp', 'imagenes/DSC_5639.webp', 'imagenes/DSC_5640.webp', 'imagenes/DSC_5641.webp', 'imagenes/DSC_5642.webp', 'imagenes/DSC_5643.webp', 'imagenes/DSC_5644.webp', 'imagenes/DSC_5645.webp', 'imagenes/DSC_5646.webp', 'imagenes/DSC_5647.webp', 'imagenes/DSC_5648.webp', 'imagenes/DSC_5649.webp', 'imagenes/DSC_5650.webp', 'imagenes/DSC_5651.webp', 'imagenes/DSC_5652.webp', 'imagenes/DSC_5653.webp', 'imagenes/DSC_5654.webp', 'imagenes/DSC_5655.webp', 'imagenes/DSC_5656.webp', 'imagenes/DSC_5657.webp', 'imagenes/DSC_5658.webp', 'imagenes/DSC_5659.webp', 'imagenes/DSC_5660.webp', 'imagenes/DSC_5661.webp', 'imagenes/DSC_5662.webp', 'imagenes/DSC_5663.webp', 'imagenes/DSC_5664.webp', 'imagenes/DSC_5665.webp', 'imagenes/DSC_5666.webp', 'imagenes/DSC_5667.webp', 'imagenes/DSC_5668.webp', 'imagenes/DSC_5669.webp', 'imagenes/DSC_5670.webp', 'imagenes/DSC_5671.webp', 'imagenes/DSC_5672.webp', 'imagenes/DSC_5673.webp', 'imagenes/DSC_5674.webp', 'imagenes/DSC_5675.webp', 'imagenes/DSC_5676.webp', 'imagenes/DSC_5677.webp', 'imagenes/DSC_5678.webp', 'imagenes/DSC_5679.webp', 'imagenes/DSC_5680.webp', 'imagenes/DSC_5681.webp', 'imagenes/DSC_5682.webp', 'imagenes/DSC_5683.webp', 'imagenes/DSC_5684.webp', 'imagenes/DSC_5685.webp', 'imagenes/DSC_5686.webp', 'imagenes/DSC_5687.webp', 'imagenes/DSC_5688.webp', 'imagenes/DSC_5689.webp', 'imagenes/DSC_5690.webp', 'imagenes/DSC_5691.webp', 'imagenes/DSC_5692.webp', 'imagenes/DSC_5693.webp', 'imagenes/DSC_5694.webp', 'imagenes/DSC_5695.webp', 'imagenes/DSC_5696.webp', 'imagenes/DSC_5697.webp', 'imagenes/DSC_5698.webp', 'imagenes/DSC_5699.webp', 'imagenes/DSC_5700.webp', 'imagenes/DSC_5701.webp', 'imagenes/DSC_5702.webp', 'imagenes/DSC_5703.webp', 'imagenes/DSC_5704.webp', 'imagenes/DSC_5705.webp', 'imagenes/DSC_5706.webp', 'imagenes/DSC_5707.webp', 'imagenes/DSC_5708.webp', 'imagenes/DSC_5709.webp', 'imagenes/DSC_5710.webp', 'imagenes/DSC_5711.webp', 'imagenes/DSC_5712.webp', 'imagenes/DSC_5713.webp', 'imagenes/DSC_5714.webp', 'imagenes/DSC_5715.webp', 'imagenes/DSC_5716.webp', 'imagenes/DSC_5717.webp', 'imagenes/DSC_5718.webp', 'imagenes/DSC_5719.webp', 'imagenes/DSC_5720.webp', 'imagenes/DSC_5721.webp', 'imagenes/DSC_5722.webp', 'imagenes/DSC_5723.webp', 'imagenes/DSC_5724.webp', 'imagenes/DSC_5725.webp', 'imagenes/DSC_5726.webp', 'imagenes/DSC_5727.webp', 'imagenes/DSC_5728.webp', 'imagenes/DSC_5729.webp', 'imagenes/DSC_5730.webp', 'imagenes/DSC_5731.webp', 'imagenes/DSC_5732.webp', 'imagenes/DSC_5733.webp', 'imagenes/DSC_5734.webp', 'imagenes/DSC_5735.webp', 'imagenes/DSC_5736.webp', 'imagenes/DSC_5737.webp', 'imagenes/DSC_5738.webp', 'imagenes/DSC_5739.webp', 'imagenes/DSC_5740.webp', 'imagenes/DSC_5741.webp', 'imagenes/DSC_5742.webp', 'imagenes/DSC_5743.webp', 'imagenes/DSC_5744.webp', 'imagenes/DSC_5745.webp', 'imagenes/DSC_5746.webp', 'imagenes/DSC_5747.webp', 'imagenes/DSC_5748.webp', 'imagenes/DSC_5749.webp', 'imagenes/DSC_5750.webp', 'imagenes/DSC_5751.webp', 'imagenes/DSC_5752.webp', 'imagenes/DSC_5753.webp', 'imagenes/DSC_5754.webp', 'imagenes/DSC_5755.webp', 'imagenes/DSC_5756.webp', 'imagenes/DSC_5757.webp', 'imagenes/DSC_5758.webp', 'imagenes/DSC_5759.webp', 'imagenes/DSC_5760.webp', 'imagenes/DSC_5761.webp', 'imagenes/DSC_5762.webp', 'imagenes/DSC_5763.webp', 'imagenes/DSC_5764.webp', 'imagenes/DSC_5765.webp', 'imagenes/DSC_5766.webp', 'imagenes/DSC_5767.webp', 'imagenes/DSC_5768.webp', 'imagenes/DSC_5769.webp', 'imagenes/DSC_5770.webp', 'imagenes/DSC_5771.webp', 'imagenes/DSC_5772.webp', 'imagenes/DSC_5773.webp', 'imagenes/DSC_5774.webp', 'imagenes/DSC_5775.webp', 'imagenes/DSC_5776.webp', 'imagenes/DSC_5777.webp', 'imagenes/DSC_5778.webp', 'imagenes/DSC_5779.webp', 'imagenes/DSC_5780.webp', 'imagenes/DSC_5781.webp', 'imagenes/DSC_5782.webp', 'imagenes/DSC_5783.webp', 'imagenes/DSC_5784.webp', 'imagenes/DSC_5785.webp', 'imagenes/DSC_5786.webp', 'imagenes/DSC_5787.webp', 'imagenes/DSC_5788.webp', 'imagenes/DSC_5789.webp', 'imagenes/DSC_5790.webp', 'imagenes/DSC_5791.webp', 'imagenes/DSC_5792.webp', 'imagenes/DSC_5793.webp', 'imagenes/DSC_5794.webp', 'imagenes/DSC_5795.webp', 'imagenes/DSC_5796.webp', 'imagenes/DSC_5797.webp', 'imagenes/DSC_5798.webp', 'imagenes/DSC_5799.webp', 'imagenes/DSC_5800.webp', 'imagenes/DSC_5801.webp', 'imagenes/DSC_5802.webp', 'imagenes/DSC_5803.webp', 'imagenes/DSC_5804.webp', 'imagenes/DSC_5805.webp', 'imagenes/DSC_5806.webp', 'imagenes/DSC_5807.webp', 'imagenes/DSC_5808.webp', 'imagenes/DSC_5809.webp', 'imagenes/DSC_5810.webp', 'imagenes/DSC_5811.webp', 'imagenes/DSC_5812.webp', 'imagenes/DSC_5813.webp', 'imagenes/DSC_5814.webp', 'imagenes/DSC_5815.webp', 'imagenes/DSC_5816.webp', 'imagenes/DSC_5817.webp', 'imagenes/DSC_5818.webp', 'imagenes/DSC_5819.webp', 'imagenes/DSC_5820.webp', 'imagenes/DSC_5821.webp', 'imagenes/DSC_5822.webp', 'imagenes/DSC_5823.webp', 'imagenes/DSC_5824.webp', 'imagenes/DSC_5825.webp', 'imagenes/DSC_5826.webp', 'imagenes/DSC_5827.webp', 'imagenes/DSC_5828.webp', 'imagenes/DSC_5829.webp', 'imagenes/DSC_5830.webp', 'imagenes/DSC_5831.webp', 'imagenes/DSC_5832.webp', 'imagenes/DSC_5833.webp', 'imagenes/DSC_5834.webp', 'imagenes/DSC_5835.webp', 'imagenes/DSC_5836.webp', 'imagenes/DSC_5837.webp', 'imagenes/DSC_5838.webp', 'imagenes/DSC_5839.webp', 'imagenes/DSC_5840.webp', 'imagenes/DSC_5841.webp', 'imagenes/DSC_5842.webp', 'imagenes/DSC_5843.webp', 'imagenes/DSC_5844.webp', 'imagenes/DSC_5845.webp', 'imagenes/DSC_5846.webp', 'imagenes/DSC_5847.webp', 'imagenes/DSC_5848.webp', 'imagenes/DSC_5849.webp', 'imagenes/DSC_5850.webp', 'imagenes/DSC_5851.webp', 'imagenes/DSC_5852.webp', 'imagenes/DSC_5853.webp', 'imagenes/DSC_5854.webp', 'imagenes/DSC_5855.webp', 'imagenes/DSC_5856.webp', 'imagenes/DSC_5857.webp', 'imagenes/DSC_5858.webp', 'imagenes/DSC_5859.webp', 'imagenes/DSC_5860.webp', 'imagenes/DSC_5861.webp', 'imagenes/DSC_5862.webp', 'imagenes/DSC_5863.webp', 'imagenes/DSC_5864.webp', 'imagenes/DSC_5865.webp', 'imagenes/DSC_5866.webp', 'imagenes/DSC_5867.webp', 'imagenes/DSC_5868.webp', 'imagenes/DSC_5869.webp', 'imagenes/DSC_5870.webp', 'imagenes/DSC_5871.webp', 'imagenes/DSC_5872.webp', 'imagenes/DSC_5873.webp', 'imagenes/DSC_5874.webp', 'imagenes/DSC_5875.webp', 'imagenes/DSC_5876.webp', 'imagenes/DSC_5877.webp', 'imagenes/DSC_5878.webp', 'imagenes/DSC_5879.webp', 'imagenes/DSC_5880.webp', 'imagenes/DSC_5881.webp', 'imagenes/DSC_5882.webp', 'imagenes/DSC_5883.webp', 'imagenes/DSC_5884.webp', 'imagenes/DSC_5885.webp', 'imagenes/DSC_5886.webp', 'imagenes/DSC_5887.webp', 'imagenes/DSC_5888.webp', 'imagenes/DSC_5889.webp', 'imagenes/DSC_5890.webp', 'imagenes/DSC_5891.webp', 'imagenes/DSC_5892.webp', 'imagenes/DSC_5893.webp', 'imagenes/DSC_5894.webp', 'imagenes/DSC_5895.webp', 'imagenes/DSC_5896.webp', 'imagenes/DSC_5897.webp', 'imagenes/DSC_5898.webp', 'imagenes/DSC_5899.webp', 'imagenes/DSC_5900.webp', 'imagenes/DSC_5901.webp', 'imagenes/DSC_5902.webp', 'imagenes/DSC_5903.webp', 'imagenes/DSC_5904.webp', 'imagenes/DSC_5905.webp', 'imagenes/DSC_5906.webp', 'imagenes/DSC_5907.webp', 'imagenes/DSC_5908.webp', 'imagenes/DSC_5909.webp', 'imagenes/DSC_5910.webp', 'imagenes/DSC_5911.webp', 'imagenes/DSC_5912.webp', 'imagenes/DSC_5913.webp', 'imagenes/DSC_5914.webp', 'imagenes/DSC_5915.webp', 'imagenes/DSC_5916.webp', 'imagenes/DSC_5917.webp', 'imagenes/DSC_5918.webp', 'imagenes/DSC_5919.webp', 'imagenes/DSC_5920.webp', 'imagenes/DSC_5921.webp', 'imagenes/DSC_5922.webp', 'imagenes/DSC_5923.webp', 'imagenes/DSC_5924.webp', 'imagenes/DSC_5925.webp', 'imagenes/DSC_5926.webp', 'imagenes/DSC_5927.webp', 'imagenes/DSC_5928.webp', 'imagenes/DSC_5929.webp', 'imagenes/DSC_5930.webp', 'imagenes/DSC_5931.webp', 'imagenes/DSC_5932.webp', 'imagenes/DSC_5933.webp', 'imagenes/DSC_5934.webp', 'imagenes/DSC_5935.webp', 'imagenes/DSC_5936.webp', 'imagenes/DSC_5937.webp', 'imagenes/DSC_5938.webp', 'imagenes/DSC_5939.webp', 'imagenes/DSC_5940.webp', 'imagenes/DSC_5941.webp', 'imagenes/DSC_5942.webp', 'imagenes/DSC_5943.webp', 'imagenes/DSC_5944.webp', 'imagenes/DSC_5945.webp', 'imagenes/DSC_5946.webp', 'imagenes/DSC_5947.webp', 'imagenes/DSC_5948.webp', 'imagenes/DSC_5949.webp', 'imagenes/DSC_5950.webp', 'imagenes/DSC_5951.webp', 'imagenes/DSC_5952.webp', 'imagenes/DSC_5953.webp', 'imagenes/DSC_5954.webp', 'imagenes/DSC_5955.webp', 'imagenes/DSC_5956.webp', 'imagenes/DSC_5957.webp', 'imagenes/DSC_5958.webp', 'imagenes/DSC_5959.webp', 'imagenes/DSC_5960.webp', 'imagenes/DSC_5961.webp', 'imagenes/DSC_5962.webp', 'imagenes/DSC_5963.webp', 'imagenes/DSC_5964.webp', 'imagenes/DSC_5965.webp', 'imagenes/DSC_5966.webp', 'imagenes/DSC_5967.webp', 'imagenes/DSC_5968.webp', 'imagenes/DSC_5969.webp', 'imagenes/DSC_5970.webp', 'imagenes/DSC_5971.webp', 'imagenes/DSC_5972.webp', 'imagenes/DSC_5973.webp', 'imagenes/DSC_5974.webp', 'imagenes/DSC_5975.webp', 'imagenes/DSC_5976.webp', 'imagenes/DSC_5977.webp', 'imagenes/DSC_5978.webp', 'imagenes/DSC_5979.webp', 'imagenes/DSC_5980.webp', 'imagenes/DSC_5981.webp', 'imagenes/DSC_5982.webp', 'imagenes/DSC_5983.webp', 'imagenes/DSC_5984.webp', 'imagenes/DSC_5985.webp', 'imagenes/DSC_5986.webp', 'imagenes/DSC_5987.webp', 'imagenes/DSC_5988.webp', 'imagenes/DSC_5989.webp', 'imagenes/DSC_5990.webp', 'imagenes/DSC_5991.webp', 'imagenes/DSC_5992.webp', 'imagenes/DSC_5993.webp', 'imagenes/DSC_5994.webp', 'imagenes/DSC_5995.webp', 'imagenes/DSC_5996.webp', 'imagenes/DSC_5997.webp', 'imagenes/DSC_5998.webp', 'imagenes/DSC_5999.webp', 'imagenes/DSC_6000.webp', 'imagenes/DSC_6001.webp', 'imagenes/DSC_6002.webp', 'imagenes/DSC_6003.webp', 'imagenes/DSC_6004.webp', 'imagenes/DSC_6005.webp', 'imagenes/DSC_6006.webp', 'imagenes/DSC_6007.webp', 'imagenes/DSC_6008.webp', 'imagenes/DSC_6009.webp', 'imagenes/DSC_6010.webp', 'imagenes/DSC_6011.webp', 'imagenes/DSC_6012.webp', 'imagenes/DSC_6013.webp', 'imagenes/DSC_6014.webp', 'imagenes/DSC_6015.webp', 'imagenes/DSC_6016.webp', 'imagenes/DSC_6017.webp', 'imagenes/DSC_6018.webp', 'imagenes/DSC_6019.webp', 'imagenes/DSC_6020.webp', 'imagenes/DSC_6021.webp', 'imagenes/DSC_6022.webp', 'imagenes/DSC_6023.webp', 'imagenes/DSC_6024.webp', 'imagenes/DSC_6025.webp', 'imagenes/DSC_6026.webp', 'imagenes/DSC_6027.webp', 'imagenes/DSC_6028.webp', 'imagenes/DSC_6029.webp', 'imagenes/DSC_6030.webp', 'imagenes/DSC_6031.webp', 'imagenes/DSC_6032.webp', 'imagenes/DSC_6033.webp', 'imagenes/DSC_6034.webp', 'imagenes/DSC_6035.webp', 'imagenes/DSC_6036.webp', 'imagenes/DSC_6038.webp', 'imagenes/DSC_6039.webp', 'imagenes/DSC_6040.webp', 'imagenes/DSC_6041.webp', 'imagenes/DSC_6042.webp', 'imagenes/DSC_6043.webp', 'imagenes/DSC_6044.webp', 'imagenes/DSC_6045.webp', 'imagenes/DSC_6046.webp', 'imagenes/DSC_6047.webp', 'imagenes/DSC_6048.webp', 'imagenes/DSC_6049.webp', 'imagenes/DSC_6050.webp', 'imagenes/DSC_6051.webp', 'imagenes/DSC_6052.webp', 'imagenes/DSC_6053.webp', 'imagenes/DSC_6054.webp', 'imagenes/DSC_6055.webp', 'imagenes/DSC_6056.webp', 'imagenes/DSC_6057.webp', 'imagenes/DSC_6058.webp', 'imagenes/DSC_6059.webp', 'imagenes/DSC_6060.webp', 'imagenes/DSC_6061.webp', 'imagenes/DSC_6062.webp', 'imagenes/DSC_6063.webp', 'imagenes/DSC_6064.webp', 'imagenes/DSC_6065.webp', 'imagenes/DSC_6066.webp', 'imagenes/DSC_6067.webp', 'imagenes/DSC_6068.webp', 'imagenes/DSC_6069.webp', 'imagenes/DSC_6070.webp', 'imagenes/DSC_6071.webp', 'imagenes/DSC_6072.webp', 'imagenes/DSC_6073.webp', 'imagenes/DSC_6074.webp', 'imagenes/DSC_6075.webp', 'imagenes/DSC_6076.webp', 'imagenes/DSC_6077.webp', 'imagenes/DSC_6078.webp', 'imagenes/DSC_6079.webp', 'imagenes/DSC_6080.webp', 'imagenes/DSC_6081.webp', 'imagenes/DSC_6082.webp', 'imagenes/DSC_6083.webp', 'imagenes/DSC_6084.webp', 'imagenes/DSC_6085.webp', 'imagenes/DSC_6086.webp', 'imagenes/DSC_6087.webp', 'imagenes/DSC_6088.webp', 'imagenes/DSC_6089.webp', 'imagenes/DSC_6090.webp', 'imagenes/DSC_6091.webp', 'imagenes/DSC_6092.webp', 'imagenes/DSC_6093.webp', 'imagenes/DSC_6094.webp', 'imagenes/DSC_6095.webp', 'imagenes/DSC_6096.webp', 'imagenes/DSC_6097.webp', 'imagenes/DSC_6098.webp', 'imagenes/DSC_6099.webp', 'imagenes/DSC_6100.webp', 'imagenes/DSC_6101.webp', 'imagenes/DSC_6102.webp', 'imagenes/DSC_6103.webp', 'imagenes/DSC_6104.webp', 'imagenes/DSC_6105.webp', 'imagenes/DSC_6106.webp', 'imagenes/DSC_6107.webp', 'imagenes/DSC_6108.webp', 'imagenes/DSC_6109.webp', 'imagenes/DSC_6110.webp', 'imagenes/DSC_6111.webp', 'imagenes/DSC_6112.webp', 'imagenes/DSC_6113.webp', 'imagenes/DSC_6114.webp', 'imagenes/DSC_6115.webp', 'imagenes/DSC_6116.webp', 'imagenes/DSC_6117.webp', 'imagenes/DSC_6118.webp', 'imagenes/DSC_6119.webp', 'imagenes/DSC_6120.webp', 'imagenes/DSC_6121.webp', 'imagenes/DSC_6122.webp', 'imagenes/DSC_6123.webp', 'imagenes/DSC_6124.webp', 'imagenes/DSC_6125.webp', 'imagenes/DSC_6126.webp', 'imagenes/DSC_6127.webp', 'imagenes/DSC_6128.webp', 'imagenes/DSC_6129.webp', 'imagenes/DSC_6130.webp', 'imagenes/DSC_6131.webp', 'imagenes/DSC_6132.webp', 'imagenes/DSC_6133.webp', 'imagenes/DSC_6134.webp', 'imagenes/DSC_6135.webp', 'imagenes/DSC_6136.webp', 'imagenes/DSC_6137.webp', 'imagenes/DSC_6138.webp', 'imagenes/DSC_6139.webp', 'imagenes/DSC_6140.webp', 'imagenes/DSC_6141.webp', 'imagenes/DSC_6142.webp', 'imagenes/DSC_6143.webp', 'imagenes/DSC_6144.webp', 'imagenes/DSC_6145.webp', 'imagenes/DSC_6146.webp', 'imagenes/DSC_6147.webp', 'imagenes/DSC_6148.webp', 'imagenes/DSC_6149.webp', 'imagenes/DSC_6150.webp', 'imagenes/DSC_6151.webp', 'imagenes/DSC_6152.webp', 'imagenes/DSC_6153.webp', 'imagenes/DSC_6154.webp', 'imagenes/DSC_6155.webp', 'imagenes/DSC_6156.webp', 'imagenes/DSC_6157.webp', 'imagenes/DSC_6158.webp', 'imagenes/DSC_6159.webp', 'imagenes/DSC_6160.webp', 'imagenes/DSC_6161.webp', 'imagenes/DSC_6162.webp', 'imagenes/DSC_6163.webp', 'imagenes/DSC_6164.webp', 'imagenes/DSC_6165.webp', 'imagenes/DSC_6166.webp', 'imagenes/DSC_6167.webp', 'imagenes/DSC_6168.webp', 'imagenes/DSC_6169.webp', 'imagenes/DSC_6170.webp', 'imagenes/DSC_6171.webp', 'imagenes/DSC_6172.webp', 'imagenes/DSC_6173.webp', 'imagenes/DSC_6174.webp', 'imagenes/DSC_6175.webp', 'imagenes/DSC_6176.webp', 'imagenes/DSC_6177.webp', 'imagenes/DSC_6178.webp', 'imagenes/DSC_6179.webp', 'imagenes/DSC_6180.webp', 'imagenes/DSC_6181.webp', 'imagenes/DSC_6182.webp', 'imagenes/DSC_6183.webp', 'imagenes/DSC_6184.webp', 'imagenes/DSC_6185.webp', 'imagenes/DSC_6186.webp', 'imagenes/DSC_6187.webp', 'imagenes/DSC_6188.webp', 'imagenes/DSC_6189.webp', 'imagenes/DSC_6190.webp', 'imagenes/DSC_6191.webp', 'imagenes/DSC_6192.webp', 'imagenes/DSC_6193.webp', 'imagenes/DSC_6194.webp', 'imagenes/DSC_6195.webp', 'imagenes/DSC_6196.webp', 'imagenes/DSC_6197.webp', 'imagenes/DSC_6198.webp', 'imagenes/DSC_6199.webp', 'imagenes/DSC_6200.webp', 'imagenes/DSC_6201.webp', 'imagenes/DSC_6202.webp', 'imagenes/DSC_6203.webp', 'imagenes/DSC_6204.webp', 'imagenes/DSC_6205.webp', 'imagenes/DSC_6206.webp', 'imagenes/DSC_6207.webp', 'imagenes/DSC_6208.webp', 'imagenes/DSC_6209.webp', 'imagenes/DSC_6210.webp', 'imagenes/DSC_6211.webp', 'imagenes/DSC_6212.webp', 'imagenes/DSC_6213.webp', 'imagenes/DSC_6214.webp', 'imagenes/DSC_6215.webp', 'imagenes/DSC_6216.webp', 'imagenes/DSC_6217.webp', 'imagenes/DSC_6218.webp', 'imagenes/DSC_6219.webp', 'imagenes/DSC_6220.webp', 'imagenes/DSC_6221.webp', 'imagenes/DSC_6222.webp', 'imagenes/DSC_6223.webp', 'imagenes/DSC_6224.webp', 'imagenes/DSC_6225.webp', 'imagenes/DSC_6226.webp', 'imagenes/DSC_6227.webp', 'imagenes/DSC_6228.webp', 'imagenes/DSC_6229.webp', 'imagenes/DSC_6230.webp', 'imagenes/DSC_6231.webp', 'imagenes/DSC_6232.webp', 'imagenes/DSC_6233.webp', 'imagenes/DSC_6234.webp', 'imagenes/DSC_6235.webp', 'imagenes/DSC_6236.webp', 'imagenes/DSC_6237.webp', 'imagenes/DSC_6238.webp', 'imagenes/DSC_6239.webp', 'imagenes/DSC_6240.webp', 'imagenes/DSC_6241.webp', 'imagenes/DSC_6242.webp', 'imagenes/DSC_6243.webp', 'imagenes/DSC_6244.webp', 'imagenes/DSC_6245.webp', 'imagenes/DSC_6246.webp', 'imagenes/DSC_6247.webp', 'imagenes/DSC_6248.webp', 'imagenes/DSC_6249.webp', 'imagenes/DSC_6250.webp', 'imagenes/DSC_6251.webp', 'imagenes/DSC_6252.webp', 'imagenes/DSC_6253.webp', 'imagenes/DSC_6254.webp', 'imagenes/DSC_6255.webp', 'imagenes/DSC_6256.webp', 'imagenes/DSC_6257.webp', 'imagenes/DSC_6258.webp', 'imagenes/DSC_6259.webp', 'imagenes/DSC_6260.webp', 'imagenes/DSC_6261.webp', 'imagenes/DSC_6262.webp', 'imagenes/DSC_6263.webp', 'imagenes/DSC_6264.webp', 'imagenes/DSC_6265.webp', 'imagenes/DSC_6266.webp', 'imagenes/DSC_6267.webp', 'imagenes/DSC_6268.webp', 'imagenes/DSC_6269.webp', 'imagenes/DSC_6270.webp', 'imagenes/DSC_6271.webp', 'imagenes/DSC_6272.webp', 'imagenes/DSC_6273.webp', 'imagenes/DSC_6274.webp', 'imagenes/DSC_6275.webp', 'imagenes/DSC_6276.webp', 'imagenes/DSC_6277.webp', 'imagenes/DSC_6278.webp', 'imagenes/DSC_6279.webp', 'imagenes/DSC_6280.webp', 'imagenes/DSC_6281.webp', 'imagenes/DSC_6282.webp', 'imagenes/DSC_6283.webp', 'imagenes/DSC_6284.webp', 'imagenes/DSC_6285.webp', 'imagenes/DSC_6286.webp', 'imagenes/DSC_6287.webp', 'imagenes/DSC_6288.webp', 'imagenes/DSC_6289.webp', 'imagenes/DSC_6290.webp', 'imagenes/DSC_6291.webp', 'imagenes/DSC_6292.webp', 'imagenes/DSC_6293.webp', 'imagenes/DSC_6294.webp', 'imagenes/DSC_6295.webp', 'imagenes/DSC_6296.webp', 'imagenes/DSC_6297.webp', 'imagenes/DSC_6298.webp', 'imagenes/DSC_6299.webp', 'imagenes/DSC_6300.webp', 'imagenes/DSC_6301.webp', 'imagenes/DSC_6302.webp', 'imagenes/DSC_6303.webp', 'imagenes/DSC_6304.webp', 'imagenes/DSC_6305.webp', 'imagenes/DSC_6306.webp', 'imagenes/DSC_6307.webp', 'imagenes/DSC_6308.webp', 'imagenes/DSC_6309.webp', 'imagenes/DSC_6310.webp', 'imagenes/DSC_6311.webp', 'imagenes/DSC_6312.webp', 'imagenes/DSC_6313.webp', 'imagenes/DSC_6314.webp', 'imagenes/DSC_6315.webp', 'imagenes/DSC_6316.webp', 'imagenes/DSC_6317.webp', 'imagenes/DSC_6318.webp', 'imagenes/DSC_6319.webp', 'imagenes/DSC_6320.webp', 'imagenes/DSC_6321.webp', 'imagenes/DSC_6322.webp', 'imagenes/DSC_6323.webp', 'imagenes/DSC_6324.webp', 'imagenes/DSC_6325.webp', 'imagenes/DSC_6326.webp', 'imagenes/DSC_6327.webp', 'imagenes/DSC_6328.webp', 'imagenes/DSC_6329.webp', 'imagenes/DSC_6330.webp', 'imagenes/DSC_6331.webp', 'imagenes/DSC_6332.webp', 'imagenes/DSC_6333.webp', 'imagenes/DSC_6334.webp', 'imagenes/DSC_6335.webp', 'imagenes/DSC_6336.webp', 'imagenes/DSC_6337.webp', 'imagenes/DSC_6338.webp', 'imagenes/DSC_6339.webp', 'imagenes/DSC_6340.webp', 'imagenes/DSC_6341.webp', 'imagenes/DSC_6342.webp', 'imagenes/DSC_6343.webp', 'imagenes/DSC_6344.webp', 'imagenes/DSC_6345.webp', 'imagenes/DSC_6346.webp', 'imagenes/DSC_6347.webp', 'imagenes/DSC_6348.webp', 'imagenes/DSC_6349.webp', 'imagenes/DSC_6350.webp', 'imagenes/DSC_6351.webp', 'imagenes/DSC_6352.webp', 'imagenes/DSC_6353.webp', 'imagenes/DSC_6354.webp', 'imagenes/DSC_6355.webp', 'imagenes/DSC_6356.webp', 'imagenes/DSC_6357.webp', 'imagenes/DSC_6358.webp', 'imagenes/DSC_6359.webp', 'imagenes/DSC_6360.webp', 'imagenes/DSC_6361.webp', 'imagenes/DSC_6362.webp', 'imagenes/DSC_6363.webp', 'imagenes/DSC_6364.webp', 'imagenes/DSC_6365.webp', 'imagenes/DSC_6366.webp', 'imagenes/DSC_6367.webp', 'imagenes/DSC_6368.webp', 'imagenes/DSC_6369.webp', 'imagenes/DSC_6370.webp', 'imagenes/DSC_6371.webp', 'imagenes/DSC_6372.webp', 'imagenes/DSC_6373.webp', 'imagenes/DSC_6374.webp', 'imagenes/DSC_6375.webp', 'imagenes/DSC_6376.webp', 'imagenes/DSC_6377.webp', 'imagenes/DSC_6378.webp', 'imagenes/DSC_6379.webp', 'imagenes/DSC_6380.webp', 'imagenes/DSC_6381.webp', 'imagenes/DSC_6382.webp', 'imagenes/DSC_6383.webp', 'imagenes/DSC_6384.webp', 'imagenes/DSC_6385.webp', 'imagenes/DSC_6386.webp', 'imagenes/DSC_6387.webp', 'imagenes/DSC_6388.webp', 'imagenes/DSC_6389.webp', 'imagenes/DSC_6390.webp', 'imagenes/DSC_6391.webp', 'imagenes/DSC_6392.webp', 'imagenes/DSC_6393.webp', 'imagenes/DSC_6394.webp', 'imagenes/DSC_6395.webp', 'imagenes/DSC_6396.webp', 'imagenes/DSC_6397.webp', 'imagenes/DSC_6398.webp', 'imagenes/DSC_6399.webp', 'imagenes/DSC_6400.webp', 'imagenes/DSC_6401.webp', 'imagenes/DSC_6402.webp', 'imagenes/DSC_6403.webp', 'imagenes/DSC_6404.webp', 'imagenes/DSC_6405.webp', 'imagenes/DSC_6406.webp', 'imagenes/DSC_6407.webp', 'imagenes/DSC_6408.webp', 'imagenes/DSC_6409.webp', 'imagenes/DSC_6410.webp', 'imagenes/DSC_6411.webp', 'imagenes/DSC_6412.webp', 'imagenes/DSC_6413.webp', 'imagenes/DSC_6414.webp', 'imagenes/DSC_6415.webp', 'imagenes/DSC_6416.webp', 'imagenes/DSC_6417.webp', 'imagenes/DSC_6418.webp', 'imagenes/DSC_6419.webp', 'imagenes/DSC_6420.webp', 'imagenes/DSC_6421.webp', 'imagenes/DSC_6422.webp', 'imagenes/DSC_6423.webp', 'imagenes/DSC_6424.webp', 'imagenes/DSC_6425.webp', 'imagenes/DSC_6426.webp', 'imagenes/DSC_6427.webp', 'imagenes/DSC_6428.webp', 'imagenes/DSC_6429.webp', 'imagenes/DSC_6430.webp', 'imagenes/DSC_6431.webp', 'imagenes/DSC_6432.webp', 'imagenes/DSC_6433.webp', 'imagenes/DSC_6434.webp', 'imagenes/DSC_6435.webp', 'imagenes/DSC_6436.webp', 'imagenes/DSC_6437.webp', 'imagenes/DSC_6438.webp', 'imagenes/DSC_6439.webp', 'imagenes/DSC_6440.webp', 'imagenes/DSC_6441.webp', 'imagenes/DSC_6442.webp', 'imagenes/DSC_6443.webp', 'imagenes/DSC_6444.webp', 'imagenes/DSC_6445.webp', 'imagenes/DSC_6446.webp', 'imagenes/DSC_6447.webp', 'imagenes/DSC_6448.webp', 'imagenes/DSC_6449.webp', 'imagenes/DSC_6450.webp', 'imagenes/DSC_6451.webp', 'imagenes/DSC_6452.webp', 'imagenes/DSC_6453.webp', 'imagenes/DSC_6454.webp', 'imagenes/DSC_6455.webp', 'imagenes/DSC_6456.webp', 'imagenes/DSC_6457.webp', 'imagenes/DSC_6458.webp', 'imagenes/DSC_6459.webp', 'imagenes/DSC_6460.webp', 'imagenes/DSC_6461.webp', 'imagenes/DSC_6462.webp', 'imagenes/DSC_6463.webp', 'imagenes/DSC_6464.webp', 'imagenes/DSC_6465.webp', 'imagenes/DSC_6466.webp', 'imagenes/DSC_6467.webp', 'imagenes/DSC_6468.webp', 'imagenes/DSC_6469.webp', 'imagenes/DSC_6470.webp', 'imagenes/DSC_6471.webp', 'imagenes/DSC_6472.webp', 'imagenes/DSC_6473.webp', 'imagenes/DSC_6474.webp', 'imagenes/DSC_6475.webp', 'imagenes/DSC_6476.webp', 'imagenes/DSC_6477.webp', 'imagenes/DSC_6478.webp', 'imagenes/DSC_6479.webp', 'imagenes/DSC_6480.webp', 'imagenes/DSC_6481.webp', 'imagenes/DSC_6482.webp', 'imagenes/DSC_6483.webp', 'imagenes/DSC_6484.webp', 'imagenes/DSC_6485.webp', 'imagenes/DSC_6486.webp', 'imagenes/DSC_6487.webp', 'imagenes/DSC_6488.webp', 'imagenes/DSC_6489.webp', 'imagenes/DSC_6490.webp', 'imagenes/DSC_6491.webp', 'imagenes/DSC_6492.webp', 'imagenes/DSC_6493.webp', 'imagenes/DSC_6494.webp'];
const STORAGE_KEY = 'boda_refugio_juan_jesus_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains("selected");
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '? Esta acción se sincronizará con todos los dispositivos.')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Bodas de Diamante — Refugio & Juan Jesús',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-bodas-diamante-refugio-juan-jesus-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💎 SELECCIÓN DE FOTOS - BODAS DE DIAMANTE REFUGIO & JUAN JESÚS\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
