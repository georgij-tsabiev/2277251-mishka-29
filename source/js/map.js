/* Карта */

let screenWidth = window.screen.width;
let mapWrapper = document.querySelector('.page__map');
let mapImage = document.querySelector('.contacts__map-image');
let center = [34.866849964021355,-111.76106949186402];
let pinSize = [27, 27];
let pinOffset = [-10, -20];
let zoom = 7;

mapWrapper.classList.remove('map--no-js');
mapImage.classList.remove('contacts__map-image--no-js');

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: zoom
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/stack.svg#map-pin',
    iconImageSize: pinSize,
    iconImageOffset: pinOffset
  });

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.geoObjects.add(placemark);
}

ymaps.ready(init);

