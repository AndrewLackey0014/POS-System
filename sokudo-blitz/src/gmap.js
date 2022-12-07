import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

/**
 * Uses Google Maps API key to load map
 */
export default function GMap() {
    const {isLoaded} = useLoadScript({
      googleMapsApiKey: "AIzaSyD-_a_EYSspgekMTYfVWyzIyN6EeVtaI8w"
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }
  
  /**
 * Loads the map at set location
 */
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