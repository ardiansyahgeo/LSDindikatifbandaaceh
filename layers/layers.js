var wms_layers = [];


        var lyr_satelite_0 = new ol.layer.Tile({
            'title': 'satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKabupatenKemendagri_1 = new ol.format.GeoJSON();
var features_BatasKabupatenKemendagri_1 = format_BatasKabupatenKemendagri_1.readFeatures(json_BatasKabupatenKemendagri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupatenKemendagri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenKemendagri_1.addFeatures(features_BatasKabupatenKemendagri_1);
var lyr_BatasKabupatenKemendagri_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKabupatenKemendagri_1, 
                style: style_BatasKabupatenKemendagri_1,
                interactive: true,
                title: '<img src="styles/legend/BatasKabupatenKemendagri_1.png" /> Batas Kabupaten Kemendagri'
            });
var format_LSDINDIKATIFBerdasarkanIrigasi_2 = new ol.format.GeoJSON();
var features_LSDINDIKATIFBerdasarkanIrigasi_2 = format_LSDINDIKATIFBerdasarkanIrigasi_2.readFeatures(json_LSDINDIKATIFBerdasarkanIrigasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSDINDIKATIFBerdasarkanIrigasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSDINDIKATIFBerdasarkanIrigasi_2.addFeatures(features_LSDINDIKATIFBerdasarkanIrigasi_2);
var lyr_LSDINDIKATIFBerdasarkanIrigasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LSDINDIKATIFBerdasarkanIrigasi_2, 
                style: style_LSDINDIKATIFBerdasarkanIrigasi_2,
                interactive: true,
    title: 'LSD INDIKATIF Berdasarkan Irigasi<br />\
    <img src="styles/legend/LSDINDIKATIFBerdasarkanIrigasi_2_0.png" /> Daerah Irigasi<br />\
    <img src="styles/legend/LSDINDIKATIFBerdasarkanIrigasi_2_1.png" /> Non-Daerah Irigasi<br />'
        });
var format_LSDINDIKATIFBerdasarkanRTRW_3 = new ol.format.GeoJSON();
var features_LSDINDIKATIFBerdasarkanRTRW_3 = format_LSDINDIKATIFBerdasarkanRTRW_3.readFeatures(json_LSDINDIKATIFBerdasarkanRTRW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSDINDIKATIFBerdasarkanRTRW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSDINDIKATIFBerdasarkanRTRW_3.addFeatures(features_LSDINDIKATIFBerdasarkanRTRW_3);
var lyr_LSDINDIKATIFBerdasarkanRTRW_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LSDINDIKATIFBerdasarkanRTRW_3, 
                style: style_LSDINDIKATIFBerdasarkanRTRW_3,
                interactive: true,
    title: 'LSD INDIKATIF Berdasarkan RTRW<br />\
    <img src="styles/legend/LSDINDIKATIFBerdasarkanRTRW_3_0.png" /> NO DATA<br />\
    <img src="styles/legend/LSDINDIKATIFBerdasarkanRTRW_3_1.png" /> Non Pertanian<br />'
        });
var format_LSDINDIKATIF_4 = new ol.format.GeoJSON();
var features_LSDINDIKATIF_4 = format_LSDINDIKATIF_4.readFeatures(json_LSDINDIKATIF_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSDINDIKATIF_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSDINDIKATIF_4.addFeatures(features_LSDINDIKATIF_4);
var lyr_LSDINDIKATIF_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LSDINDIKATIF_4, 
                style: style_LSDINDIKATIF_4,
                interactive: true,
                title: '<img src="styles/legend/LSDINDIKATIF_4.png" /> LSD INDIKATIF'
            });
var format_FaktorPengurangHAT_5 = new ol.format.GeoJSON();
var features_FaktorPengurangHAT_5 = format_FaktorPengurangHAT_5.readFeatures(json_FaktorPengurangHAT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaktorPengurangHAT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaktorPengurangHAT_5.addFeatures(features_FaktorPengurangHAT_5);
var lyr_FaktorPengurangHAT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FaktorPengurangHAT_5, 
                style: style_FaktorPengurangHAT_5,
                interactive: true,
    title: 'Faktor Pengurang HAT<br />\
    <img src="styles/legend/FaktorPengurangHAT_5_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/FaktorPengurangHAT_5_1.png" /> Hak Pakai<br />\
    <img src="styles/legend/FaktorPengurangHAT_5_2.png" /> Hak Wakaf<br />'
        });
var format_LBSPerbaikanDigitasi_6 = new ol.format.GeoJSON();
var features_LBSPerbaikanDigitasi_6 = format_LBSPerbaikanDigitasi_6.readFeatures(json_LBSPerbaikanDigitasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBSPerbaikanDigitasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBSPerbaikanDigitasi_6.addFeatures(features_LBSPerbaikanDigitasi_6);
var lyr_LBSPerbaikanDigitasi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LBSPerbaikanDigitasi_6, 
                style: style_LBSPerbaikanDigitasi_6,
                interactive: true,
                title: '<img src="styles/legend/LBSPerbaikanDigitasi_6.png" /> LBS Perbaikan Digitasi'
            });
var format_LBS2021kode34_7 = new ol.format.GeoJSON();
var features_LBS2021kode34_7 = format_LBS2021kode34_7.readFeatures(json_LBS2021kode34_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBS2021kode34_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBS2021kode34_7.addFeatures(features_LBS2021kode34_7);
var lyr_LBS2021kode34_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LBS2021kode34_7, 
                style: style_LBS2021kode34_7,
                interactive: true,
                title: '<img src="styles/legend/LBS2021kode34_7.png" /> LBS 2021 (kode 3 & 4)'
            });

lyr_satelite_0.setVisible(true);lyr_BatasKabupatenKemendagri_1.setVisible(true);lyr_LSDINDIKATIFBerdasarkanIrigasi_2.setVisible(false);lyr_LSDINDIKATIFBerdasarkanRTRW_3.setVisible(false);lyr_LSDINDIKATIF_4.setVisible(false);lyr_FaktorPengurangHAT_5.setVisible(false);lyr_LBSPerbaikanDigitasi_6.setVisible(false);lyr_LBS2021kode34_7.setVisible(false);
var layersList = [lyr_satelite_0,lyr_BatasKabupatenKemendagri_1,lyr_LSDINDIKATIFBerdasarkanIrigasi_2,lyr_LSDINDIKATIFBerdasarkanRTRW_3,lyr_LSDINDIKATIF_4,lyr_FaktorPengurangHAT_5,lyr_LBSPerbaikanDigitasi_6,lyr_LBS2021kode34_7];
lyr_BatasKabupatenKemendagri_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LSDINDIKATIFBerdasarkanIrigasi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Luas_Ha': 'Luas_Ha', 'NAMOBJ': 'NAMOBJ', 'RTRW': 'RTRW', 'Nama_DI': 'Nama_DI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'D_Irigasi': 'D_Irigasi', });
lyr_LSDINDIKATIFBerdasarkanRTRW_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Luas_Ha': 'Luas_Ha', 'NAMOBJ': 'NAMOBJ', 'RTRW': 'RTRW', 'Nama_DI': 'Nama_DI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'D_Irigasi': 'D_Irigasi', });
lyr_LSDINDIKATIF_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Luas_Ha': 'Luas_Ha', 'NAMOBJ': 'NAMOBJ', 'RTRW': 'RTRW', 'Nama_DI': 'Nama_DI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'D_Irigasi': 'D_Irigasi', });
lyr_FaktorPengurangHAT_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'WILAYAHID': 'WILAYAHID', 'WILAYAHIND': 'WILAYAHIND', 'KODEWILAYA': 'KODEWILAYA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'NOMORVIRTU': 'NOMORVIRTU', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_LBSPerbaikanDigitasi_6.set('fieldAliases', {'Luas_Ha': 'Luas_Ha', });
lyr_LBS2021kode34_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'Q_Name19': 'Q_Name19', 'Luas_Ha': 'Luas_Ha', 'Shape_Leng': 'Shape_Leng', 'Update2020': 'Update2020', 'Update2021': 'Update2021', 'Shape_Le_1': 'Shape_Le_1', 'Luas2021': 'Luas2021', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Area': 'Shape_Area', });
lyr_BatasKabupatenKemendagri_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LSDINDIKATIFBerdasarkanIrigasi_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Luas_Ha': 'TextEdit', 'NAMOBJ': 'TextEdit', 'RTRW': 'TextEdit', 'Nama_DI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'D_Irigasi': 'TextEdit', });
lyr_LSDINDIKATIFBerdasarkanRTRW_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Luas_Ha': 'TextEdit', 'NAMOBJ': 'TextEdit', 'RTRW': 'TextEdit', 'Nama_DI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'D_Irigasi': 'TextEdit', });
lyr_LSDINDIKATIF_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Luas_Ha': 'TextEdit', 'NAMOBJ': 'TextEdit', 'RTRW': 'TextEdit', 'Nama_DI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'D_Irigasi': 'TextEdit', });
lyr_FaktorPengurangHAT_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'WILAYAHID': 'TextEdit', 'WILAYAHIND': 'TextEdit', 'KODEWILAYA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'NOMORVIRTU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LBSPerbaikanDigitasi_6.set('fieldImages', {'Luas_Ha': 'TextEdit', });
lyr_LBS2021kode34_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'Q_Name19': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Update2020': 'TextEdit', 'Update2021': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Luas2021': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasKabupatenKemendagri_1.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'FCODE': 'inline label', 'REMARK': 'inline label', 'METADATA': 'inline label', 'SRS_ID': 'inline label', 'KDBBPS': 'inline label', 'KDCBPS': 'inline label', 'KDCPUM': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'inline label', 'KDPBPS': 'inline label', 'KDPKAB': 'inline label', 'KDPPUM': 'inline label', 'LUASWH': 'inline label', 'TIPADM': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'WIADKC': 'inline label', 'WIADKK': 'inline label', 'WIADPR': 'inline label', 'WIADKD': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_LSDINDIKATIFBerdasarkanIrigasi_2.set('fieldLabels', {'OBJECTID': 'inline label', 'Luas_Ha': 'inline label', 'NAMOBJ': 'inline label', 'RTRW': 'inline label', 'Nama_DI': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'D_Irigasi': 'inline label', });
lyr_LSDINDIKATIFBerdasarkanRTRW_3.set('fieldLabels', {'OBJECTID': 'inline label', 'Luas_Ha': 'inline label', 'NAMOBJ': 'inline label', 'RTRW': 'inline label', 'Nama_DI': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'D_Irigasi': 'inline label', });
lyr_LSDINDIKATIF_4.set('fieldLabels', {'OBJECTID': 'inline label', 'Luas_Ha': 'inline label', 'NAMOBJ': 'inline label', 'RTRW': 'inline label', 'Nama_DI': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'D_Irigasi': 'inline label', });
lyr_FaktorPengurangHAT_5.set('fieldLabels', {'OBJECTID_1': 'inline label', 'OBJECTID': 'inline label', 'ID': 'inline label', 'WILAYAHID': 'inline label', 'WILAYAHIND': 'inline label', 'KODEWILAYA': 'inline label', 'KECAMATAN': 'inline label', 'KELURAHAN': 'inline label', 'TIPEHAK': 'inline label', 'TIPEPRODUK': 'inline label', 'TAHUN': 'inline label', 'NIB': 'inline label', 'LUASTERTUL': 'inline label', 'LUASPETA': 'inline label', 'NOMORVIRTU': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Area': 'inline label', });
lyr_LBSPerbaikanDigitasi_6.set('fieldLabels', {'Luas_Ha': 'inline label', });
lyr_LBS2021kode34_7.set('fieldLabels', {'OBJECTID_1': 'inline label', 'OBJECTID_2': 'inline label', 'OBJECTID': 'inline label', 'Q_Name19': 'inline label', 'Luas_Ha': 'inline label', 'Shape_Leng': 'inline label', 'Update2020': 'inline label', 'Update2021': 'inline label', 'Shape_Le_1': 'inline label', 'Luas2021': 'inline label', 'Shape_Le_2': 'inline label', 'Shape_Le_3': 'inline label', 'Shape_Area': 'inline label', });
lyr_LBS2021kode34_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});