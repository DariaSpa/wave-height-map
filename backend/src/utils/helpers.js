const findNearestIndex = (array, value) =>
  array.reduce(
    (prevIdx, _, currIdx) =>
      Math.abs(array[currIdx] - value) < Math.abs(array[prevIdx] - value)
        ? currIdx
        : prevIdx,
    0
  );

export { findNearestIndex };