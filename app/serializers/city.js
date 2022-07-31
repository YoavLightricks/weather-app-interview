import JSONAPISerializer from '@ember-data/serializer/json-api';
import ENV from '../config/environment';

export default class CitySerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload) {
    if (payload.length === 0) return;

    const defaultCity = payload[0];
    const defaultCityId = defaultCity.Key;

    payload = {
      data: {
        id: defaultCityId,
        type: 'city',
        attributes: {
          name: defaultCity.LocalizedName,
        },
      },
    };
    return payload;
  }
}
