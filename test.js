const IsoToLatLng = require('./index').default;

it('should return name of ISO', () => {
	expect(IsoToLatLng['GB'].name).toEqual('United Kingdom');
});


it('should return coordinates of ISO', () => {
	expect(IsoToLatLng['BR'].coordinate).toEqual(["-14.235004","-51.92528"]);
});