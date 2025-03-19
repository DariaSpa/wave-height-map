import express from "express";
import { getMaxWaveHeight } from "../services/waveDataService.js";

const router = express.Router();

router.get("/wave-height", (req, res) => {
  try {
    const lat = parseFloat(req.query.lat);
    const lon = parseFloat(req.query.lon);

    if (isNaN(lat) || isNaN(lon)) {
      return res.status(400).json({ error: "Invalid latitude or longitude values." });
    }

    const maxWaveHeight = getMaxWaveHeight(lat, lon);
    if (maxWaveHeight === null) {
      return res.status(404).json({ error: "No valid wave data available for the given location." });
    }

    res.json({ requestedLat: lat, requestedLon: lon, maxWaveHeight, units: "m" });
  } catch (error) {
    console.error("Error in wave height retrieval:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;