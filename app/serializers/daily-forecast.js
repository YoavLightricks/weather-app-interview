import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class DailyForecastSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      data: payload.DailyForecasts.map((info) => {
        return {
          id: info.EpochDate,
          type: 'daily-forecast',
          attributes: {
            date: info.EpochDate,
            minTemp: info.Temperature.Minimum.Value,
            maxTemp: info.Temperature.Maximum.Value,
            iconPhrase: info.Day.IconPhrase,
            iconId: info.Day.Icon,
          },
        };
      }),
    };
    return payload;
  }
}
