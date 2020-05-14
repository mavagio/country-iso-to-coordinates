const IsoToLatLng = require('./index');

it('should return name of ISO', () => {
	expect(IsoToLatLng['GB'].name).toEqual('United Kingdom');
});

it('should return coordinates of ISO', () => {
	expect(IsoToLatLng['BR'].coordinate).toEqual(["-14.235004","-51.92528"]);
});

it('should return undefined if ISO does not exist', () => {
  console.log(IsoToLatLng['GB'])
	expect(IsoToLatLng['UK']).toEqual(undefined);
});