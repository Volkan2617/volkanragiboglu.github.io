mapboxgl.accessToken = 'pk.eyJ1IjoidnJhZ2lib2dsdSIsImEiOiJjbG05dHdxNXUwN2VjM2dtdGphZW9iYzZkIn0.OPweljVwbxfaKv321emTzQ';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-79.4512, 43.6568],
zoom: 13
});
 
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);