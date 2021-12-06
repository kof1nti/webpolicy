var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Designated_Open_Space_1 = new ol.format.GeoJSON();
var features_Designated_Open_Space_1 = format_Designated_Open_Space_1.readFeatures(json_Designated_Open_Space_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Designated_Open_Space_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Designated_Open_Space_1.addFeatures(features_Designated_Open_Space_1);
var lyr_Designated_Open_Space_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Designated_Open_Space_1, 
                style: style_Designated_Open_Space_1,
                interactive: true,
                title: '<img src="styles/legend/Designated_Open_Space_1.png" /> Designated_Open_Space'
            });
var format_Conservation_Areas_2 = new ol.format.GeoJSON();
var features_Conservation_Areas_2 = format_Conservation_Areas_2.readFeatures(json_Conservation_Areas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservation_Areas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservation_Areas_2.addFeatures(features_Conservation_Areas_2);
var lyr_Conservation_Areas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conservation_Areas_2, 
                style: style_Conservation_Areas_2,
                interactive: true,
                title: '<img src="styles/legend/Conservation_Areas_2.png" /> Conservation_Areas'
            });
var format_Areas_of_Intensification_3 = new ol.format.GeoJSON();
var features_Areas_of_Intensification_3 = format_Areas_of_Intensification_3.readFeatures(json_Areas_of_Intensification_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_of_Intensification_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_of_Intensification_3.addFeatures(features_Areas_of_Intensification_3);
var lyr_Areas_of_Intensification_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_of_Intensification_3, 
                style: style_Areas_of_Intensification_3,
                interactive: true,
                title: '<img src="styles/legend/Areas_of_Intensification_3.png" /> Areas_of_Intensification'
            });
var format_Opportunity_Areas1Opportunity_AreasMultiPolygon_4 = new ol.format.GeoJSON();
var features_Opportunity_Areas1Opportunity_AreasMultiPolygon_4 = format_Opportunity_Areas1Opportunity_AreasMultiPolygon_4.readFeatures(json_Opportunity_Areas1Opportunity_AreasMultiPolygon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Opportunity_Areas1Opportunity_AreasMultiPolygon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Opportunity_Areas1Opportunity_AreasMultiPolygon_4.addFeatures(features_Opportunity_Areas1Opportunity_AreasMultiPolygon_4);
var lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Opportunity_Areas1Opportunity_AreasMultiPolygon_4, 
                style: style_Opportunity_Areas1Opportunity_AreasMultiPolygon_4,
                interactive: true,
                title: '<img src="styles/legend/Opportunity_Areas1Opportunity_AreasMultiPolygon_4.png" /> Opportunity_Areas (1) Opportunity_Areas MultiPolygon'
            });
var format_Boroughs_5 = new ol.format.GeoJSON();
var features_Boroughs_5 = format_Boroughs_5.readFeatures(json_Boroughs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boroughs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boroughs_5.addFeatures(features_Boroughs_5);
var lyr_Boroughs_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boroughs_5, 
                style: style_Boroughs_5,
                interactive: true,
                title: '<img src="styles/legend/Boroughs_5.png" /> Boroughs'
            });
var group_TRANSFORMATIONAREAS = new ol.layer.Group({
                                layers: [lyr_Areas_of_Intensification_3,lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_4,],
                                title: "TRANSFORMATION AREAS"});
var group_NATUREANDENVIRONMENT = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_Designated_Open_Space_1,lyr_Conservation_Areas_2,],
                                title: "NATURE AND ENVIRONMENT"});

lyr_GoogleRoad_0.setVisible(true);lyr_Designated_Open_Space_1.setVisible(true);lyr_Conservation_Areas_2.setVisible(true);lyr_Areas_of_Intensification_3.setVisible(true);lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_4.setVisible(true);lyr_Boroughs_5.setVisible(true);
var layersList = [group_NATUREANDENVIRONMENT,group_TRANSFORMATIONAREAS,lyr_Boroughs_5];
lyr_Designated_Open_Space_1.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Conservation_Areas_2.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Areas_of_Intensification_3.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_4.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planning_authority': 'planning_authority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Boroughs_5.set('fieldAliases', {'NAME': 'NAME', 'AREA_CODE': 'AREA_CODE', 'DESCRIPTIO': 'DESCRIPTIO', 'FILE_NAME': 'FILE_NAME', 'NUMBER': 'NUMBER', 'NUMBER0': 'NUMBER0', 'POLYGON_ID': 'POLYGON_ID', 'UNIT_ID': 'UNIT_ID', 'CODE': 'CODE', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'TYPE_CODE': 'TYPE_CODE', 'DESCRIPT0': 'DESCRIPT0', 'TYPE_COD0': 'TYPE_COD0', 'DESCRIPT1': 'DESCRIPT1', });
lyr_Designated_Open_Space_1.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'boroughdesignation': 'TextEdit', 'classification': 'TextEdit', 'designation': 'TextEdit', 'easting': 'TextEdit', 'extrainfo1': 'TextEdit', 'extrainfo2': 'TextEdit', 'extrainfo3': 'TextEdit', 'firstaddeddate': 'TextEdit', 'hectares': 'TextEdit', 'lastupdateddate': 'TextEdit', 'layerreference': 'TextEdit', 'northing': 'TextEdit', 'notes': 'TextEdit', 'objectid': 'TextEdit', 'planningauthority': 'TextEdit', 'removeddate': 'TextEdit', 'sitename': 'TextEdit', 'sitereference': 'TextEdit', 'source': 'TextEdit', 'status': 'TextEdit', 'uprn': 'TextEdit', 'runtime': 'TextEdit', });
lyr_Conservation_Areas_2.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'boroughdesignation': 'TextEdit', 'classification': 'TextEdit', 'designation': 'TextEdit', 'easting': 'TextEdit', 'extrainfo1': 'TextEdit', 'extrainfo2': 'TextEdit', 'extrainfo3': 'TextEdit', 'firstaddeddate': 'TextEdit', 'hectares': 'TextEdit', 'lastupdateddate': 'TextEdit', 'layerreference': 'TextEdit', 'northing': 'TextEdit', 'notes': 'TextEdit', 'objectid': 'TextEdit', 'planningauthority': 'TextEdit', 'removeddate': 'TextEdit', 'sitename': 'TextEdit', 'sitereference': 'TextEdit', 'source': 'TextEdit', 'status': 'TextEdit', 'uprn': 'TextEdit', 'runtime': 'TextEdit', });
lyr_Areas_of_Intensification_3.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_4.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'boroughdesignation': 'TextEdit', 'classification': 'TextEdit', 'designation': 'TextEdit', 'easting': 'TextEdit', 'extrainfo1': 'TextEdit', 'extrainfo2': 'TextEdit', 'extrainfo3': 'TextEdit', 'firstaddeddate': 'TextEdit', 'hectares': 'TextEdit', 'lastupdateddate': 'TextEdit', 'layerreference': 'TextEdit', 'northing': 'TextEdit', 'notes': 'TextEdit', 'objectid': 'TextEdit', 'planning_authority': 'TextEdit', 'removeddate': 'TextEdit', 'sitename': 'TextEdit', 'sitereference': 'TextEdit', 'source': 'TextEdit', 'status': 'TextEdit', 'uprn': 'TextEdit', 'runtime': 'TextEdit', });
lyr_Boroughs_5.set('fieldImages', {'NAME': 'TextEdit', 'AREA_CODE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'FILE_NAME': 'TextEdit', 'NUMBER': 'TextEdit', 'NUMBER0': 'TextEdit', 'POLYGON_ID': 'TextEdit', 'UNIT_ID': 'TextEdit', 'CODE': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'TYPE_CODE': 'TextEdit', 'DESCRIPT0': 'TextEdit', 'TYPE_COD0': 'TextEdit', 'DESCRIPT1': 'TextEdit', });
lyr_Designated_Open_Space_1.set('fieldLabels', {});
lyr_Conservation_Areas_2.set('fieldLabels', {});
lyr_Areas_of_Intensification_3.set('fieldLabels', {});
lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_4.set('fieldLabels', {});
lyr_Boroughs_5.set('fieldLabels', {'NAME': 'no label', 'AREA_CODE': 'no label', 'DESCRIPTIO': 'no label', 'FILE_NAME': 'no label', 'NUMBER': 'no label', 'NUMBER0': 'no label', 'POLYGON_ID': 'no label', 'UNIT_ID': 'no label', 'CODE': 'no label', 'HECTARES': 'no label', 'AREA': 'no label', 'TYPE_CODE': 'no label', 'DESCRIPT0': 'no label', 'TYPE_COD0': 'no label', 'DESCRIPT1': 'no label', });
lyr_Boroughs_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});