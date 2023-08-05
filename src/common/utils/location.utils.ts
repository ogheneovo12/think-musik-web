export function LocationSuccess(position: {
  coords: { longitude: number; latitude: number };
}) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  return { latitude, longitude };
}
export function getUserLocation(): Promise<{
  longitude: number;
  latitude: number;
}> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject("sorry geolocation is not suppoerted");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(LocationSuccess(position)),
      error
    );

    function error() {
      return reject(
        "sorry we couldn't get your location, but you can search for it"
      );
    }
  });
}
