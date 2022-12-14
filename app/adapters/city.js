import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';
export default class CityAdapter extends JSONAPIAdapter {
  host = '//dataservice.accuweather.com';
  namespace = 'locations/v1/cities/search';
  queryRecord(store, type, query) {
    const params = {
      apikey: encodeURIComponent(ENV.ACCUWEATHER_APIKEY),
      q: query,
    };
    return this.ajax(this.buildURL(), 'GET', { data: params });
  }
}
