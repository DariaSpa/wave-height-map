import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapClickHandler from './MapClickHandler';

type WorldMapProps = {
  waveData: { lat: number; lon: number; maxWaveHeight: number | null } | null;
  setWaveData: (data: { lat: number; lon: number; maxWaveHeight: number | null }) => void;
};

const WorldMap: React.FC<WorldMapProps> = ({ waveData, setWaveData }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <MapClickHandler setWaveData={setWaveData} />

      {waveData && <Marker position={[waveData.lat, waveData.lon]} />}
    </MapContainer>
  );
};

export default WorldMap;
