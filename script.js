'user strict'


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log(`https://www.google.com/maps/@${latitude},${longitude},7z`);
      
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude]


      var map = new L.Map('map');
      map.setView([52.51836, 13.40438], 16, false);
      
      new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© Map <a href="https://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        maxNativeZoom: 20
      }).addTo(map);
      
      var osmb = new OSMBuildings(map).load();



      map.on('click', (e)=>{
        // console.log(e);
        const {lat, lng} = e.latlng;
        
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup("hospieces")
          .openPopup();
      })
      
    }),
      function () {
        alert("Couldn't get your position");
      };

      
}