mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaGFzdXNhcml0YSIsImEiOiJja3BiZHZqazcweDh0MnJsbGh3ZXN5bjlhIn0.ORkW9gCJg_4youJQ5pxGIQ';
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v9",
        center: [52.76,-4.75],
      maxBounds: [
        [-14.835942,49.156329],
        [5.378902,59.974586],
        
      ],
      });
      map.on('load', () => {
      // TODO: Here we want to load a layer
      // TODO: Here we want to load/setup the popup
      });
      const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "top-right");
      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });

      map.addControl(geolocate, "top-right");
   
       var el= document.createElement('div'); 
       el.style.width ='30px';
       el.style.height='30px';
       el.style.borderRadius = '50%';   
       new mapboxgl.Marker(el).setLngLat([52.5325,-4.5918]).addTo(map);