/* Карта */

let screenWidth = window.screen.width;
let mapWrapper = document.querySelector('.page__map');
let mapImage = document.querySelector('.contacts__map-image-wrapper');
let center = [59.93875045552004,30.322844830309467];
let pinSize = [67, 100];
let pinOffset = [-25, -80];
let zoom = 17;

mapWrapper.classList.remove('map--no-js');
mapImage.classList.remove('contacts__map-image-wrapper--no-js');

if (screenWidth >= 1150) {
  zoom = 16;
}

if (screenWidth < 768) {
  pinOffset = [-22, -80];
}

if (screenWidth >= 768 && screenWidth < 1150) {
  pinOffset = [-20, -90];
}

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
