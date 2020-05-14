### Description
Get country latitude and longitude and name based on ISO code.


### Example
```
npm i country-iso-to-coordinates
```
```js

import IsoToLatLong from 'country-iso-to-coordinates';

const country = IsoToLatLong['GB'];

console.log(country); // { coordinate: [ '55.378051', '-3.435973' ], name: 'United Kingdom' }

```