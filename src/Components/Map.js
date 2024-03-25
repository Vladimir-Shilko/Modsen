import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
export default function Map() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        // Initialize the map only once when the component mounts
        const mapContainer = mapContainerRef.current;

        if (!mapContainer || mapContainer._leaflet_id) return;

        const map = L.map(mapContainer).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            ,
            accessToken: 'AAPKc3b7e393c57a4a6dbaf2c958c00e4045ZG-aexaDhrPWXRf-wFHEJJ2L6EGm7Pwox-Z0hSWpJP_pVwBzUQ8sTcaBhteabk8A'}).addTo(map);
    }, []);

    return <div ref={mapContainerRef} id="map" style={{ height: '400px' }}></div>;
}