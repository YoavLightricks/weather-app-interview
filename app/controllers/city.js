import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CityController extends Controller {
    @tracked
    singleCity = ' ';

    @action
    updateValue(event) {
        this.singleCity = event.target.value;
        console.log(this.singleCity);
    }
}
