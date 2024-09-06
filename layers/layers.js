var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_pasirluyu_1 = new ol.format.GeoJSON();
var features_pasirluyu_1 = format_pasirluyu_1.readFeatures(json_pasirluyu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasirluyu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasirluyu_1.addFeatures(features_pasirluyu_1);
var lyr_pasirluyu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasirluyu_1, 
                style: style_pasirluyu_1,
                popuplayertitle: "pasirluyu",
                interactive: true,
                title: '<img src="styles/legend/pasirluyu_1.png" /> pasirluyu'
            });
var format_batununggal2_2 = new ol.format.GeoJSON();
var features_batununggal2_2 = format_batununggal2_2.readFeatures(json_batununggal2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batununggal2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batununggal2_2.addFeatures(features_batununggal2_2);
var lyr_batununggal2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batununggal2_2, 
                style: style_batununggal2_2,
                popuplayertitle: "batununggal 2",
                interactive: true,
                title: '<img src="styles/legend/batununggal2_2.png" /> batununggal 2'
            });
var format_mengger_3 = new ol.format.GeoJSON();
var features_mengger_3 = format_mengger_3.readFeatures(json_mengger_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mengger_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mengger_3.addFeatures(features_mengger_3);
var lyr_mengger_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mengger_3, 
                style: style_mengger_3,
                popuplayertitle: "mengger",
                interactive: true,
                title: '<img src="styles/legend/mengger_3.png" /> mengger'
            });
var format_JALAN_LN_25K_4 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_4 = format_JALAN_LN_25K_4.readFeatures(json_JALAN_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_4.addFeatures(features_JALAN_LN_25K_4);
var lyr_JALAN_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_4, 
                style: style_JALAN_LN_25K_4,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_4.png" /> JALAN_LN_25K'
            });
var format_SUNGAI_LN_25K_5 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_5 = format_SUNGAI_LN_25K_5.readFeatures(json_SUNGAI_LN_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_5.addFeatures(features_SUNGAI_LN_25K_5);
var lyr_SUNGAI_LN_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_5, 
                style: style_SUNGAI_LN_25K_5,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_5.png" /> SUNGAI_LN_25K'
            });
var format_BUFFER200M_6 = new ol.format.GeoJSON();
var features_BUFFER200M_6 = format_BUFFER200M_6.readFeatures(json_BUFFER200M_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER200M_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER200M_6.addFeatures(features_BUFFER200M_6);
var lyr_BUFFER200M_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER200M_6, 
                style: style_BUFFER200M_6,
                popuplayertitle: "BUFFER 200M",
                interactive: true,
                title: '<img src="styles/legend/BUFFER200M_6.png" /> BUFFER 200M'
            });
var format_JEMBATAN_LN_25K_7 = new ol.format.GeoJSON();
var features_JEMBATAN_LN_25K_7 = format_JEMBATAN_LN_25K_7.readFeatures(json_JEMBATAN_LN_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_LN_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_LN_25K_7.addFeatures(features_JEMBATAN_LN_25K_7);
var lyr_JEMBATAN_LN_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_LN_25K_7, 
                style: style_JEMBATAN_LN_25K_7,
                popuplayertitle: "JEMBATAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_LN_25K_7.png" /> JEMBATAN_LN_25K'
            });
var format_PENDIDIKAN_LN_25K_8 = new ol.format.GeoJSON();
var features_PENDIDIKAN_LN_25K_8 = format_PENDIDIKAN_LN_25K_8.readFeatures(json_PENDIDIKAN_LN_25K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_LN_25K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_LN_25K_8.addFeatures(features_PENDIDIKAN_LN_25K_8);
var lyr_PENDIDIKAN_LN_25K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_LN_25K_8, 
                style: style_PENDIDIKAN_LN_25K_8,
                popuplayertitle: "PENDIDIKAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_LN_25K_8.png" /> PENDIDIKAN_LN_25K'
            });
var format_AIRJERAM_PT_25K_9 = new ol.format.GeoJSON();
var features_AIRJERAM_PT_25K_9 = format_AIRJERAM_PT_25K_9.readFeatures(json_AIRJERAM_PT_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRJERAM_PT_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRJERAM_PT_25K_9.addFeatures(features_AIRJERAM_PT_25K_9);
var lyr_AIRJERAM_PT_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRJERAM_PT_25K_9, 
                style: style_AIRJERAM_PT_25K_9,
                popuplayertitle: "AIRJERAM_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/AIRJERAM_PT_25K_9.png" /> AIRJERAM_PT_25K'
            });
var format_AIRTANAH_AR_25K_10 = new ol.format.GeoJSON();
var features_AIRTANAH_AR_25K_10 = format_AIRTANAH_AR_25K_10.readFeatures(json_AIRTANAH_AR_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRTANAH_AR_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRTANAH_AR_25K_10.addFeatures(features_AIRTANAH_AR_25K_10);
var lyr_AIRTANAH_AR_25K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRTANAH_AR_25K_10, 
                style: style_AIRTANAH_AR_25K_10,
                popuplayertitle: "AIRTANAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AIRTANAH_AR_25K_10.png" /> AIRTANAH_AR_25K'
            });
var format_Waypoints_11 = new ol.format.GeoJSON();
var features_Waypoints_11 = format_Waypoints_11.readFeatures(json_Waypoints_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_11.addFeatures(features_Waypoints_11);
var lyr_Waypoints_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_11, 
                style: style_Waypoints_11,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints_11.png" /> Waypoints'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_pasirluyu_1.setVisible(true);lyr_batununggal2_2.setVisible(true);lyr_mengger_3.setVisible(true);lyr_JALAN_LN_25K_4.setVisible(true);lyr_SUNGAI_LN_25K_5.setVisible(true);lyr_BUFFER200M_6.setVisible(true);lyr_JEMBATAN_LN_25K_7.setVisible(true);lyr_PENDIDIKAN_LN_25K_8.setVisible(true);lyr_AIRJERAM_PT_25K_9.setVisible(true);lyr_AIRTANAH_AR_25K_10.setVisible(true);lyr_Waypoints_11.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_pasirluyu_1,lyr_batununggal2_2,lyr_mengger_3,lyr_JALAN_LN_25K_4,lyr_SUNGAI_LN_25K_5,lyr_BUFFER200M_6,lyr_JEMBATAN_LN_25K_7,lyr_PENDIDIKAN_LN_25K_8,lyr_AIRJERAM_PT_25K_9,lyr_AIRTANAH_AR_25K_10,lyr_Waypoints_11];
lyr_pasirluyu_1.set('fieldAliases', {});
lyr_batununggal2_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_mengger_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BUFFER200M_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JEMBATAN_LN_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PENDIDIKAN_LN_25K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'FGDPDK': 'FGDPDK', 'JLPDDK': 'JLPDDK', 'JJGPDF': 'JJGPDF', 'JNSPDK': 'JNSPDK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AIRJERAM_PT_25K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_AIRTANAH_AR_25K_10.set('fieldAliases', {'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ATH': 'ATH', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Waypoints_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_pasirluyu_1.set('fieldImages', {});
lyr_batununggal2_2.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_mengger_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_25K_4.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_LN_25K_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_BUFFER200M_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JEMBATAN_LN_25K_7.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'JBTJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PENDIDIKAN_LN_25K_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'FGDPDK': '', 'JLPDDK': '', 'JJGPDF': '', 'JNSPDK': '', 'SHAPE_Leng': '', });
lyr_AIRJERAM_PT_25K_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ELEVAS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_AIRTANAH_AR_25K_10.set('fieldImages', {'SRS_ID': '', 'METADATA': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'NAMOBJ': '', 'ATH': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Waypoints_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_pasirluyu_1.set('fieldLabels', {});
lyr_batununggal2_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_mengger_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BUFFER200M_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JEMBATAN_LN_25K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PENDIDIKAN_LN_25K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'FGDPDK': 'no label', 'JLPDDK': 'no label', 'JJGPDF': 'no label', 'JNSPDK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AIRJERAM_PT_25K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_AIRTANAH_AR_25K_10.set('fieldLabels', {'SRS_ID': 'no label', 'METADATA': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ATH': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Waypoints_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Waypoints_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});