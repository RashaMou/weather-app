export const convertTemp = (temp, scale) => {
  if (scale === "farenheit") {
    return ((temp - 32) * 5) / 9;
  } else {
    return (temp * 9) / 5 + 32;
  }
};
