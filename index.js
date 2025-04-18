// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  const hqStreet = 42;
  return Math.abs(pickupLocation - hqStreet);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = Math.abs(pickupLocation - 42);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = Math.abs(destination - start) * 264;

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
