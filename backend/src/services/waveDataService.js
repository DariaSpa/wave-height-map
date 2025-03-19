import { extractHmaxAttributes, latitudes, longitudes, timeValues, waveDataRaw } from "../config/netcdfConfig.js";
import { findNearestIndex } from "../utils/helpers.js";

const { scaleFactor, addOffset, fillValue, missingValue } = extractHmaxAttributes();

const getMaxWaveHeight = (lat, lon) => {
  const latIdx = findNearestIndex(latitudes, lat);
  const lonIdx = findNearestIndex(longitudes, lon);

  let validHeights = [];
  for (let t = 0; t < timeValues.length; t++) {
    const rawValue = waveDataRaw[t * latitudes.length * longitudes.length + latIdx * longitudes.length + lonIdx];

    if (rawValue !== fillValue && rawValue !== missingValue && isFinite(rawValue)) {
      validHeights.push(rawValue * scaleFactor + addOffset);
    }
  }

  return validHeights.length ? Math.max(...validHeights) : null;
};

export { getMaxWaveHeight };