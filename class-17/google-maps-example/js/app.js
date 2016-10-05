var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0059},
          zoom: 8
        });
      }

function initMap() {
        var myLatLng = {lat: 40.7128, lng: -74.0059};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }
