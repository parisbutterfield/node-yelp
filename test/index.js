import test from 'blue-tape';
import Yelp from '../src/';

const opts = {
  access_token: process.env.ACCESS_TOKEN,
};

const yelp = new Yelp(opts);
test('yelp search', (t) => {
  return yelp.search({
    term: 'food',
    location: 'Montreal',
  }).then((data) => {
    t.equal(typeof data.businesses[0].location, 'object');
    t.equal(typeof data.total, 'number');
    t.equal(typeof data.businesses[0].price, 'string');
    t.ok(Array.isArray(data.businesses), 'businesses is array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('yelp businesses', (t) => {
  return yelp.businesses('yelp-san-francisco').then((data) => {
    t.equal(typeof data.rating, 'number');
    t.equal(typeof data.url, 'string');
    t.ok(Array.isArray(data.photos), 'photos is array');
    t.ok(Array.isArray(data.hours), 'hours is array');
  })
  .catch((err) => {
    t.error(err);
  });
});


test('yelp autocomplete', (t) => {
  return yelp.autocomplete({
    text: 'Mc',
    latitude: 40.730610,
    longitude: -73.935242,
  }).then((data) => {
    t.ok(Array.isArray(data.businesses), 'businesses is array');
    t.ok(Array.isArray(data.businesses), 'catagories is array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('yelp phoneSearch', (t) => {
  return yelp.phoneSearch({ phone: '+14159083801' }).then((data) => {
    t.equal(typeof data.total, 'number');
    t.ok(Array.isArray(data.businesses), 'businesses is array');
  })
  .catch((err) => {
    t.error(err);
  });
});


test('yelp businesses reviews', (t) => {
  return yelp.businessesReviews('yelp-san-francisco').then((data) => {
    t.equal(typeof data.reviews[0].url, 'string');
    t.ok(Array.isArray(data.reviews), 'reviews is array');
  })
  .catch((err) => {
    t.error(err);
  });
});
