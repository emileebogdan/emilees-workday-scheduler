function disasterSearch(lat1, lng1, lat2, lng2) {

    var url = "https://eonet.gsfc.nasa.gov/api/v3/events?bbox=" + lng1 + "," + lat1 + "," + lng2 + "," + lat2
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.events.length; i++) {
          var li = document.createElement("li");
          li.append(data.events[i].title, ", ", data.events[i].link);
          disasterDisplay.append(li);
        }
        
  
      })
      return;
  }