import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

interface Location {
    long: number;
    lat: number;
    title: string;
}

interface MapGLProps {
    searchResults: Location[];
}

export default function MapGL({ searchResults }: MapGLProps) {
    const mapbox_key = process.env.NEXT_PUBLIC_MAPBOX_KEY; // Use NEXT_PUBLIC_ prefix for environment variables

    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    const [viewPort, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11.5,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/desaad/clcq04er9004a14pf80lbn9u2"
            mapboxApiAccessToken={mapbox_key}
            {...viewPort}
            onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offset={[-20, -10]} // Adjust the numbers as needed for your desired offset
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                        >
                            📌
                        </p>
                    </Marker>

                    {selectedLocation?.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation(null)}
                            closeOnClick={true}
                            longitude={result.long}
                            latitude={result.lat}
                            className="z-50"
                        >
                            {result.title}
                        </Popup>
                    ) : null
                    }
                </div>
            ))}
        </ReactMapGL>
    );
}
