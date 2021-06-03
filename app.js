mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaGFzdXNhcml0YSIsImEiOiJja3BiZHZqazcweDh0MnJsbGh3ZXN5bjlhIn0.ORkW9gCJg_4youJQ5pxGIQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [-4.5, 56.4], // starting position [lng, lat]
      zoom: 5.2 // starting zoom
  });
  map.on('load', () => {
    var geojson;
    let request = new XMLHttpRequest();
    request.open("GET","http://192.168.32.1:5005/api/sightings");
    request.send();
    request.onload =() => {
      console.log(request);
      if(request.status ===200){
        geojson =JSON.parse(request.response);
        geojson.forEach(function (marker) {

let coordinates = [marker.longitude,marker.latitude];
console.log(coordinates);       // create a HTML element for each feature
          var el = document.createElement('div');
          el.className = 'marker';
           
          // make a marker for each feature and add it to the map
          new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
'<table class = marker-info><tbody><tr><th>DATE</th><td>'
+marker.sightingDate +'</td></tr>'+
'<tr><th>SPECIES</th><td>'+marker.speciesCode +'</td></tr>'+
'<tr><th>ESTIMATE</th><td>'+marker.estimate +'</td></tr>'+
'<tr><th>OBSERVER</th><td>'+marker.name +'</td></tr>'+
'</tbody></table>'

        
          )
          )
          .addTo(map);
          });
      }else{
        console.log("error")
      }
    }
  
   
    });