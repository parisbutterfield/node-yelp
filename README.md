[![Build Status](https://travis-ci.org/parisbutterfield/node-yelp.svg)](https://travis-ci.org/parisbutterfield/node-yelp) [![NPM version](https://badge.fury.io/js/yelp-v3.png)](http://badge.fury.io/js/yelp-v3)


This project uses v3 of the API which is currently in developer preview.
The library does not include functions to create the access token. Please review (https://github.com/Yelp/yelp-api-v3/blob/master/docs/tutorials/get-start-yelp-api-v3.md) for more information on generating an access token.

This is a fork of (https://github.com/olalonde/node-yelp). OAuth 1.0 has been removed. There are no OAuth libraries in this client. The auth_token header is set using requestify.

Tests have been updated to reflect the new endpoints.


# Install

```
npm install --save yelp-v3
```

# Usage

```javascript
// Request API access: https://www.yelp.com/developers/v3/preview
var Yelp = require('yelp-v3');

var yelp = new Yelp({
  access_token: 'access_token',
});


 //https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/autocomplete.md
yelp.autocomplete(text: 'Mc', latitude: 40.730610, longitude: -73.935242, }, function(error, data) {});

//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search-phone.md
yelp.phoneSearch({phone: "+12223334444"}, function(error, data) {});


//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id-reviews.md
yelp.businessesReviews('yelp-san-francisco', function(error, data) {});


//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id.md
yelp.businesses('yelp-san-francisco', function(error, data) {});


//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
yelp.search({term: 'food', location: 'Montreal', function(error, data) {});


// A promise based API is also available:
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});
```

See [./test](./test) for more usage examples.

# References

- [Yelp V3 API Documentation](https://github.com/Yelp/yelp-api-v3)

# Test

```bash
ACCESS_TOKEN="" npm test
```

# License

Copyright (c) 2016 Paris Butterfield <parisbdev@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
