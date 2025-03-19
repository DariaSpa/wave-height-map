import React from 'react';
import styles from './WaveInfo.module.scss';

type WaveInfoProps = {
  waveData: { lat: number; lon: number; maxWaveHeight: number | null } | null;
};

const WaveInfo: React.FC<WaveInfoProps> = ({ waveData }) => {
  if (!waveData) {
    return <p className={styles.infoMessage}>Click on the map to get wave height data.</p>;
  }

  const { lat, lon, maxWaveHeight } = waveData;

  return (
    <div className={styles.waveInfo}>
      <p><span className={styles.label}>Latitude:</span> {lat.toFixed(2)}</p>
      <p><span className={styles.label}>Longitude:</span> {lon.toFixed(2)}</p>
      {maxWaveHeight !== null ? (
        <p><span className={styles.label}>Max Wave Height:</span> {maxWaveHeight.toFixed(2)} m</p>
      ) : (
        <p className={styles.warning}>No wave data available at this location.</p>
      )}
    </div>
  );
};

export default WaveInfo;
