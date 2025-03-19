import React from 'react';

type WaveInfoProps = {
  waveData: { lat: number; lon: number; maxWaveHeight: number | null } | null;
};

const WaveInfo: React.FC<WaveInfoProps> = ({ waveData }) => {
  if (!waveData) {
    return <p className='info-message'>Click on the map to get wave height data.</p>;
  }

  const { lat, lon, maxWaveHeight } = waveData;

  return (
    <div className='wave-info'>
      <p><span className='label'>Latitude:</span> {lat.toFixed(2)}</p>
      <p><span className='label'>Longitude:</span> {lon.toFixed(2)}</p>
      {maxWaveHeight !== null ? (
        <p><span className='label'>Max Wave Height:</span> {maxWaveHeight.toFixed(2)} m</p>
      ) : (
        <p className='warning'>No wave data available at this location.</p>
      )}
    </div>
  );
};

export default WaveInfo;
