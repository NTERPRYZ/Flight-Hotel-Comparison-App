const FlightView = require('./flightView');
const HotelView = require('./hotelView');
const MiniMapView = require('./miniMapView');

const PackageView = function(){

}


PackageView.prototype.createPackageView = function(flightHotelPackage, displayMinimap){
  const flightView = new FlightView();
  const flightViewDiv = flightView.createFlightView(flightHotelPackage.flightPackage);

  const hotelView  = new HotelView();
  const hotelViewDiv = hotelView.createHotelView(flightHotelPackage.hotel);

  let miniMapViewDiv = document.createElement('div');
  miniMapViewDiv.className = "mini-map-view-class";

  if(displayMinimap)
  {
    const miniMapView = new MiniMapView();
    miniMapViewDiv    = miniMapView.createMiniMapView(flightHotelPackage);
  }


  let packageViewDiv = document.createElement('div');
  packageViewDiv.classList.add('flex-row');
  packageViewDiv.classList.add('div-package');

  packageViewDiv.appendChild(flightViewDiv);
  packageViewDiv.appendChild(hotelViewDiv);
  packageViewDiv.appendChild(miniMapViewDiv);

  return packageViewDiv;

}

module.exports = PackageView;
