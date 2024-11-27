function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Headquarters location
    return Math.abs(pickupLocation - hqLocation);
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); // Reuse the previous function
    return blocks * 264;
  }
  

  function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(destination - start);
  return distanceInBlocks * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fee for distances over 2000 feet
    } else {
      return "cannot travel that far"; // Disallow distances over 2500 feet
    }
  }

