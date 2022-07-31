import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';

export default class DailyForecastAdapter extends JSONAPIAdapter {
  host = '//dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';

  query(store, type, query) {
    const apiKeyParams = {
      apikey: encodeURIComponent(ENV.ACCUWEATHER_APIKEY),
    };
    return this.ajax(this.buildURL(query), 'GET', { data: apiKeyParams });
  }

  pathForType(modelName) {
    //remove the pluralization of the model name
    return modelName;
  }
}
