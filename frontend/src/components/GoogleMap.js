import React, { useEffect } from 'react';

let google = (window.google = { maps: {} });
const GoogleMap = () => {
  let googleMapsPromise;
  const setGoogleMap = () => {
    // If we haven't already defined the promise, define it
    if (!googleMapsPromise) {
      googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.initMap = () => {
          resolve(google);
        };
      });
      const script = document.createElement('script');
      const API = 'AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
    }
    // Return a promise for the Google Maps API
    return googleMapsPromise;
  };

  useEffect(() => {
    // Once the Google Maps API has finished loading, initialize the map
    setGoogleMap().then((google) => {
      const location = { lat: 10.8458185, lng: 106.7171616 };
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: location,
      });
      const marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    });

    return () => {
      delete window.initMap;
      delete window.google;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div id='map' style={{ width: '100%', height: '460px' }}></div>
    </div>
  );
};

export default GoogleMap;
