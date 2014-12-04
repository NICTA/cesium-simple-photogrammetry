var viewer = new Cesium.Viewer('cesiumContainer');
var scene = viewer.scene;
var globe = scene.globe;
globe.depthTestAgainstTerrain = true;

// Terrain
var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
  url : '//cesiumjs.org/stk-terrain/tilesets/world/tiles'
});
scene.terrainProvider = cesiumTerrainProviderMeshes;

// Our model
var czmlDataSource = new Cesium.CzmlDataSource();
czmlDataSource.loadUrl('models/bulldozer.czml');
viewer.dataSources.add(czmlDataSource);

// Set camera
var west = 151.227;
var south = -33.88;
var east = 151.207;
var north = -33.86;

scene.camera.flyToRectangle({
  destination : Cesium.Rectangle.fromDegrees(west, south, east, north)
});
