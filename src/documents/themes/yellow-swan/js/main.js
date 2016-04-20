(function () {
    'use strict';

    var conf = {};
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    // Init functions, called on DOMContentLoaded event
    conf.init = function () {
        conf.map.init($('#map-canvas'));
        conf.direction.init($('#direction-canvas'));
        conf.menu.init();
    };

    /***
        Google Maps implementation
    ***/
    conf.map = {
        marker: 'themes/yellow-swan/img/marker-default.png'
    };

    conf.direction = {};

    conf.direction.init = function($element) {
        conf.direction.element = $element;
        conf.direction.geocoder = new google.maps.Geocoder();
        conf.direction.latlng = new google.maps.LatLng(0, 0);        

        conf.direction.options = {
            zoom: 16,
            center: conf.direction.latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        conf.direction.canvas = new google.maps.Map(conf.direction.element.get(0), conf.direction.options);
        conf.direction.canvas.setCenter(conf.direction.latlng);
        directionsDisplay.setMap(conf.direction.canvas);

        conf.direction.createRoute();
    };

    conf.direction.createRoute = function() {
        

        var request = {
          origin: "Terminal Rodoviário de Campinas, Campinas",
          destination: conf.map.address,
          travelMode: google.maps.TravelMode.WALKING
        };
        
        directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
      });
    };

    // Google Maps configs
    conf.map.init = function ($element) {
        conf.map.element = $element;

        conf.map.geocoder = new google.maps.Geocoder();

        conf.map.latlng = new google.maps.LatLng(0, 0);

        conf.map.options = {
            zoom: 16,
            center: conf.map.latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        conf.map.canvas = new google.maps.Map(conf.map.element.get(0), conf.map.options);
        conf.map.canvas.setCenter(conf.map.latlng);

        conf.map.createMarker();
    };

    conf.map.createMarker = function () {
        
        conf.map.address = conf.map.element.attr('data-address');

        conf.map.geocoder.geocode({ 'address': conf.map.address}, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {

                conf.map.canvas.setCenter(results[0].geometry.location);

                new google.maps.Marker({
                    map: conf.map.canvas,
                    position: results[0].geometry.location,
                    icon: conf.map.marker
                });
            } else {
                if (window.console) {
                    console.log('Google Maps was not loaded: ', status);
                }
            }
        });
    };

    /***
        Create animated scroll for menu links
    ***/
    conf.menu = {
        itemsSelector: '.nav-link[href^="#"]',
        animationSpeed: 400
    };

    conf.menu.init = function () {
        conf.menu.menuItems = $(conf.menu.itemsSelector);
        conf.menu.document = $('html, body');

        conf.menu.menuItems.on('click.animateScroll', function (event) {
            event.preventDefault();

            conf.menu.animateTo(event.target);
        });
    };

    conf.menu.animateTo = function (link) {

        var $link = $(link),
            href = $link.attr('href'),
            offSetTop = $(href).offset().top;
        
        conf.menu.document.finish().animate({scrollTop : offSetTop}, conf.menu.animationSpeed, function () {
            location.hash = href;
        });
    };

    conf.init();
}());