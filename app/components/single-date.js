import Component from '@glimmer/component';

export default class SingleDateComponent extends Component {
  iconUrl(iconId) {
    return `/conditions/${iconId}.svg`;
  }

  returnDateFromTimestamp(timestamp) {
    var date = new Date(timestamp * 1000);
    const [winthoutTime] = date.toLocaleDateString().split(',');
    return winthoutTime;
  }

  getTemps(minTemp, maxTemp) {
    const min = Math.floor(((minTemp - 32) * 5) / 9);
    const max = Math.floor(((maxTemp - 32) * 5) / 9);

    return `From ${min}° To ${max}°`;
    
  }

  oddEvenClass(index) {
    return index % 2 === 0 ? 'even' : 'odd';
  }
}
