import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model(params) {
    const { user_id } = params;
    const response = await fetch('/api/forecast.json');

    const { DailyForecasts } = await response.json();
    return DailyForecasts;
  }
}
