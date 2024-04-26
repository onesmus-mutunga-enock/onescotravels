function initMap() {
    // The location of Kutus
    var kutusLocation = { lat: -0.6766, lng: 37.2789 };
  
    // The map, centered at Kutus
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: kutusLocation,
    });
  
    // The marker, positioned at Kutus
    var marker = new google.maps.Marker({
      position: kutusLocation,
      map: map,
    });
  }




      // function initMap() {
      //   var uluru = {lat: 38.9822282, lng: -94.6707917};
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 18,
      //     center: uluru
      //   });
      //   var marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map
      //   });
      // }
    
   
  // Call initMap when the page has finished loading
google.maps.event.addDomListener(window, "load", initMap);