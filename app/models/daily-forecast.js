import Model, { attr, belongsTo } from '@ember-data/model';

export default class DailyForecastModel extends Model {
  @attr('number') date;
  @attr('string') minTemp;
  @attr('string') maxTemp;
  @attr('string') iconId;
  @attr('string') iconPhrase;
  @belongsTo('city') city;
}
