import React, { useState } from 'react';
import Header from './components/Header/Header';
import WorldMap from './components/WorldMap/WorldMap';
import WaveInfo from './components/WaveInfo/WaveInfo';
import './App.scss';
import 'leaflet/dist/leaflet.css';

const WaveHeightMap: React.FC = () => {
  const [waveData, setWaveData] = useState<{ lat: number; lon: number; maxWaveHeight: number | null } | null>(null);

  return (
    <div className='wrapper'>
      <Header headerText={'Max Wave Height Map'} />

      <div className='content-wrapper'>
        <div className='map-wrapper'>
          <WorldMap waveData={waveData} setWaveData={setWaveData} />
        </div>

        <div className='aside-info-container'>
          <WaveInfo waveData={waveData} /> 
        </div>
      </div>
    </div>
  );
};

export default WaveHeightMap;
