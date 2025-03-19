import React from 'react';
import { useMapEvents } from 'react-leaflet';
import { API_URL } from '../../config/apiConfig';

type MapClickHandlerProps = {
  setWaveData: (data: { lat: number; lon: number; maxWaveHeight: number | null }) => void;
};

const MapClickHandler: React.FC<MapClickHandlerProps> = ({ setWaveData }) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;

      try {
        const response = await fetch(`${API_URL}/wave-height?lat=${lat}&lon=${lng}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setWaveData({
          lat,
          lon: lng,
          maxWaveHeight: data.maxWaveHeight !== undefined && data.maxWaveHeight >= 0 ? data.maxWaveHeight : null,
        });
      } catch (error) {
        console.error('Error fetching wave data:', error);
        setWaveData({ lat, lon: lng, maxWaveHeight: null });
      }
    },
  });

  return null;
};

export default MapClickHandler;
