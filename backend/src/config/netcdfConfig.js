import { readFileSync } from "fs";
import { NetCDFReader } from "netcdfjs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const filePath = path.resolve(process.env.NETCDF_FILE_PATH);
const data = readFileSync(filePath);
const reader = new NetCDFReader(data);

const extractHmaxAttributes = () => {
  let scaleFactor = 1, addOffset = 0, fillValue = -32767, missingValue = -32767;

  reader.variables.forEach((variable) => {
    if (variable.name === "hmax") {
      variable.attributes.forEach((attr) => {
        if (attr.name === "scale_factor") scaleFactor = attr.value;
        if (attr.name === "add_offset") addOffset = attr.value;
        if (attr.name === "_FillValue") fillValue = attr.value;
        if (attr.name === "missing_value") missingValue = attr.value;
      });
    }
  });

  return { scaleFactor, addOffset, fillValue, missingValue };
};

const latitudes = reader.getDataVariable("latitude").slice().sort((a, b) => a - b);
const longitudes = reader.getDataVariable("longitude").slice().sort((a, b) => a - b);
const timeValues = reader.getDataVariable("time").slice();
const waveDataRaw = reader.getDataVariable("hmax");

if (!waveDataRaw || waveDataRaw.length === 0) {
  console.error("Error: Wave height data is missing or empty!");
  process.exit(1);
}

export { reader, extractHmaxAttributes, latitudes, longitudes, timeValues, waveDataRaw };
