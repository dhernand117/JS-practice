function countingValleys(n, s) {
  let steps = s.split("");
  let valleyCount = 0;
  let currentSeaLevel = 0;
  let valleyStatus = false;
  steps.forEach((step) => {
    step === "U" ? currentSeaLevel++ : currentSeaLevel--;
    if (currentSeaLevel < 0 && !valleyStatus) {
      valleyCount++;
      valleyStatus = true;
    } else if (currentSeaLevel >= 0 && valleyStatus) {
      valleyStatus = false;
    }
  });
  return valleyCount;
}
console.log(countingValleys(0, "DDUU"));
// console.log(countingValleys(1, "DDDUUUDDUDDUUDDUUUDU"));
// console.log(countingValleys(0, "UUDDDDUUDUDUDDDUUUUD"));

// function countingValleys(steps, path) {
//   // Vally's count when you go below sea level and back up
//   // mountains's count when you go above sea level and back down
//   const U = 1;
//   const D = -1;
//   var uCount = 0;
//   var dCount = 0;
//   var valley = 0;

//   for (var i = 0; i < path.length; i++) {
//     if (path.charAt(i) === "U") {
//       uCount++;
//     } else {
//       dCount++;
//     }
//   }
//   if (uCount === dCount) {
//     valley++;
//   }
//   return valley;
// }
