function landmarkGeocode(platform) {
  var geocoder = platform.getGeocodingService(),
    landmarkGeocodingParameters = {
      searchtext: 'Eiffel Tower',
      jsonattributes : 1
    };

  geocoder.search(
    landmarkGeocodingParameters,
    onSuccess,
    onError
  );
}

/**
 * This function will be called once the Geocoder REST API provides a response
 * @param  {Object} result          A JSONP object representing the  location(s) found.
 *
 * see: http://developer.here.com/rest-apis/documentation/geocoder/topics/resource-type-response-geocode.html
 */
function onSuccess(result) {
  var locations = result.response.view[0].result;
 /*
  * The styling of the geocoding response on the map is entirely under the developer's control.
  * A representitive styling can be found the full JS + HTML code of this example
  * in the functions below:
  */
  addLocationsToMap(locations);
  addLocationsToPanel(locations);
  // ... etc.
}

/**
 * This function will be called if a communication error occurs during the JSON-P request
 * @param  {Object} error  The error message received.
 */
function onError(error) {
  alert('Ooops!');
}