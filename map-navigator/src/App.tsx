import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function App() {
  
  // Use google map api key
  const mapApiKey  = '';

  const latitude: string = '28.4595';
  const longitude: string = '77.0266';

  let lat: number | undefined = latitude
            ? parseFloat(latitude)
            : undefined;
      let lng: number | undefined = longitude
            ? parseFloat(longitude)
            : undefined;
    
    const {isLoaded} = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: mapApiKey
    });

    const onLoad = () => {};
    return isLoaded ? (
      <div>
        {lat && lng && (
          <GoogleMap
            mapContainerStyle={{width: '1800px', height: '1000px'}}
            center={{lat: lat, lng: lng}}
            zoom={15}
          >
            <Marker
              onLoad={onLoad} 
              position={{lat: lat, lng: lng}} 
            />
          </GoogleMap>
        )}
      </div>
  ) : (
      <></>
  );
}

export default App;
