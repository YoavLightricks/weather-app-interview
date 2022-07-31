import Model, { attr, hasMany } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CityModel extends Model {
  @attr('string') name;
  @hasMany('daily-forecast') dailyForecasts;
}
