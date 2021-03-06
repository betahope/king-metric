function initMap() {
  // Initial loading zoom and location of map
  const initialStatus = {
    zoom: 2,
    center: { lat: 32.9714929, lng: -3.5220193 },
  };

  // Creation of the map
  var map = new google.maps.Map(document.getElementById("map"), initialStatus);

  // Setting the markers
  const locations = [
    {
      //United States
      position: { lat: 37.0902, lng: -95.7129 },
      icon: "assets/media/flag_usa.png",
      title: "United States of America",
      content:
        '<h5 style="color:black;">The United States of America</h5>' +
        '<p style="color:black;"><strong>Population</strong>: 328.2 million (2019)</p>' +
        '<p style="color:black;"><strong>Capital</strong>: Washington, D.C.</p>' +
        '<p style="color:black;"><a title="USA Wikipedia Page" href="https://en.wikipedia.org/wiki/United_States" target="_blank" rel="noopener">Wikipedia Page</a></p>',
    },
    {
      // Myanmar
      position: { lat: 21.9162, lng: 95.956 },
      icon: "assets/media/flag_myanmar.png",
      title: "Myanmar",
      content:
        '<h5 style="color:black;">Myanmar</h5>' +
        '<p style="color:black;"><strong>Population</strong>: 53.5 million (2017)</p>' +
        '<p style="color:black;"><strong>Capital</strong>: Naypyidaw</p>' +
        '<p style="color:black;"><a title="Myanmar Wikipedia Page" href="https://en.wikipedia.org/wiki/Myanmar" target="_blank" rel="noopener">Wikipedia Page</a></p>',
    },
    {
      // Liberia
      position: { lat: 6.4281, lng: -9.4295 },
      icon: "assets/media/flag_liberia.png",
      title: "Liberia",
      content:
        '<h5 style="color:black;">Liberia</h5>' +
        '<p style="color:black;"><strong>Population</strong>: 5.07 million (2015)</p>' +
        '<p style="color:black;"><strong>Capital</strong>: Monrovia</p>' +
        '<p style="color:black;"><a title="Liberia Wikipedia Page" href="https://en.wikipedia.org/wiki/Liberia" target="_blank" rel="noopener">Wikipedia Page</a></p>',
    },
  ];

  // Adding the markets to the map

  for (var i = 0; i < locations.length; i++) {
    addingMarkers(locations[i]);
  }

  function addingMarkers(locations) {
    var marker = new google.maps.Marker({
      position: locations.position,
      icon: locations.icon,
      title: locations.title,
      animation: google.maps.Animation.DROP,
      map: map,
    });

    var infoWindow = new google.maps.InfoWindow({
      content: locations.content,
    });

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  }
}
