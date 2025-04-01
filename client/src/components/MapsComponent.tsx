import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, Circle } from "@react-google-maps/api";

// Define location type
type Location = {
  name: string;
  lat: number;
  lng: number;
};

interface LocationProps {
  lat: number | undefined;
  long: number | undefined;
}

const containerStyle = {
  width: "100%",
  height: "500px",
};



const RADIUS_IN_MILES = 5 * 1609.34;

const GOOGLE_MAPS_API_KEY = "AIzaSyCptEE2wIlnpx4Cb7rNVfg7jhfsZ28Ni1g"; 

export const MapsComponent = ({lat, long}: LocationProps) => {
  const [selectedLocation, setSelectedLocation] = React.useState<Location | null>(null);
  const center = {
    lat: lat,
    lng: long,
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={lat !== undefined && long !== undefined ? { lat, lng: long } : undefined} zoom={12}>
          {lat !== undefined && long !== undefined && (
            <>
            {/* <Marker
              position={{ lat: lat, lng: long }}
              onClick={() => setSelectedLocation({ name: "Selected Location", lat: lat, lng: long })}
              /> */}
            <Circle
          center={lat !== undefined && long !== undefined ? { lat, lng: long } : undefined}
          radius={RADIUS_IN_MILES}
          options={{
            fillColor: "#FF0000",
            fillOpacity: 0.2,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
          />
          </>
          )}

        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h3>{selectedLocation.name}</h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
