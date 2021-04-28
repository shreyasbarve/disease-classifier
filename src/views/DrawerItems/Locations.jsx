import ReactMapGl, { Marker, Popup } from "react-map-gl";
import React, { useState } from "react";
import hospital from "../../mapData.json";

export default function Locations() {
  const [viewport, setViewport] = useState({
    latitude: 21.146633,
    longitude: 79.08886,
    zoom: 12.5,
    width: "100vw",
    height: "100vh",
  });

  console.log(hospital[0]);

  const [selectedHospital, setSelectedHospital] = useState(null);

  return (
    // <div className="App">
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiYWRpMTQ0OTYiLCJhIjoiY2tueTZtOW1hMDJtYTMwcW5odDV6aGhjOCJ9._byumzgme8ygkKXkfUAUHQ"
      }
      mapStyle="mapbox://styles/adi14496/cknyphtsk464x17jg4dlljuod"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {hospital.map((i) => (
        <Marker
          key={i.id}
          longitude={i.coordinates[1]}
          latitude={i.coordinates[0]}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedHospital(i);
            }}
          >
            <img
              src="/hospital.png"
              alt="Hospital"
              height="20"
              width="20"
            ></img>
          </button>
        </Marker>
      ))}

      {selectedHospital ? (
        <Popup
          longitude={selectedHospital.coordinates[1]}
          latitude={selectedHospital.coordinates[0]}
          onClose={() => {
            setSelectedHospital(null);
          }}
        >
          <div>
            <h2>{selectedHospital.name}</h2>
            <p>{selectedHospital.description}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGl>
    // </div>
  );
}
