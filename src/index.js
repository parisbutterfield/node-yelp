import querystring from 'querystring';
import requestify from 'requestify';

const baseUrl = 'https://api.yelp.com/v3/';

class Yelp {
  constructor(opts) {
    this.access_token = opts.access_token;
  }

  get(resource, params = {}, cb) {
    const promise = new Promise((resolve, reject) => {
      requestify.get(baseUrl + resource + '?' + querystring.stringify(params), {
        headers: {
          'Authorization': 'Bearer ' + this.access_token,
        },
      }).then(function(response) {
        resolve(JSON.parse(response.body));
      })
      .fail(function(response) {
        reject(response);
      });
    });
    if (typeof cb === 'function') {
      promise
        .then((res) => cb(null, res))
        .catch(cb);
      return null;
    }
    return promise;
  }


  /**
   * https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
   * Example:
   * yelp.search({term: 'food', location: 'Montreal', function(error, data) {});
   */
  search(params, callback) {
    return this.get('businesses/search', params, callback);
  }


  /**
   * https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id.md
   * Example:
   * yelp.businesses('yelp-san-francisco', function(error, data) {});
   */
  businesses(id, callback) {
    return this.get('businesses/' + id, undefined, callback);
  }


  /**
   * https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id-reviews.md
   * Example:
   * yelp.businessesReviews('yelp-san-francisco', function(error, data) {});
   */
  businessesReviews(id, callback) {
    return this.get('businesses/' + id + '/reviews', undefined, callback);
  }

  /**
   * https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/autocomplete.md
   * Example:
   * yelp.autocomplete(text: 'Mc', latitude: 40.730610, longitude: -73.935242, }, function(error, data) {});
   */
  autocomplete(params, callback) {
    return this.get('autocomplete', params, callback);
  }
  /**
   *https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search-phone.md
   * Example:
   * yelp.phoneSearch({phone: "+12223334444"}, function(error, data) {});
   */
  phoneSearch(params, callback) {
    return this.get('businesses/search/phone', params, callback);
  }
}

export default Yelp;
