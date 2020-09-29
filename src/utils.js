function convertUnix(timestamp, option = 'all'){
    const milliseconds = timestamp * 1000;

    const dateObject = new Date(milliseconds);

    const weekDay = dateObject.toLocaleString("en-US", {weekday: "long"});
    const date = dateObject.toLocaleString("en-US", {dateStyle: 'short'});
    let formattedDate = ''

    switch (option) {
      case 'all':
        formattedDate = weekDay + ' ' + date;
        break;
      case 'weekDay':
        formattedDate = weekDay;
        break;
      case 'shortDate':
        formattedDate = date;
        break;

      default:
        formattedDate = weekDay + ' ' + date;
        break;
    }

    return formattedDate;
}
 
var warehouses = [
        {
            'name': 'San Diego',
            'lat': '32.715736',
            'lon': '-117.161087'
        },
        {
            'name': 'Chexbres',
            'lat': '46.481709',
            'lon': '6.778770'
        }
    ]

export { warehouses, convertUnix };