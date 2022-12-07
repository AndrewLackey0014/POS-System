import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function GMap() {
    const {isLoaded} = useLoadScript({
      googleMapsApiKey: "AIzaSyD-_a_EYSspgekMTYfVWyzIyN6EeVtaI8w"
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }
  
  function Map() {
    const center = useMemo(() => ({ lat: 30.612030, lng: -96.340590 }), []);

    return (
      <GoogleMap
        zoom={10}
        center={{ lat: 30.612030, lng: -96.340590 }}
        mapContainerClassName="map-container"
        >
          <MarkerF position={center} />
        </GoogleMap>
    );
  }