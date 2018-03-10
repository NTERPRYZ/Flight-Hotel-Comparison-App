const PackageView = require('./../src/views/packageView');
const HotelEntity = require('./../src/entities/hotelEntity');

const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    mapTypeId: 'terrain'
  });

  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
      this.markers.push(marker);
}

MapWrapper.prototype.addMarkerWithInfoWindow = function(travelPackage) {

  let lat = travelPackage.hotel.latitude;
  let lng = travelPackage.hotel.longitude;
  let coords = {lat: lat, lng: lng};

  let packageView = new PackageView();
  let contentDiv  = packageView.createPackageView(travelPackage, true);
  let infowindow  = new google.maps.InfoWindow({
    content: contentDiv});

  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });

  marker.addListener('click', function(){
    infowindow.open(this.googleMap,marker);
          });
  this.markers.push(marker);
}

MapWrapper.prototype.removeAllMarker = function() {
  this.markers.forEach(function(marker){
    marker.setMap(null);
  }.bind(this))
}

const addInfoWindow = function(text) {
  const infoWindow = new google.maps.InfoWindow({
    content: text
  });
};

module.exports = MapWrapper;
