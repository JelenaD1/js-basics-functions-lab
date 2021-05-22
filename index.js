function distanceFromHqInBlocks(pickUpLocation){
 const hq = 42
 if (hq > pickUpLocation){
    return hq - pickUpLocation
 } else {
    return pickUpLocation - hq
 }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264

}

function distanceTravelledInFeet(start, end){
  if (end > start){
    return (end - start) * 264
  } else {
    return (start - end) * 264
  }

}

function calculatesFarePrice(start, end){

  if (distanceTravelledInFeet(start, end) <= 400){
    return 0
  } else if (distanceTravelledInFeet(start, end) >400 && distanceTravelledInFeet(start, end) <= 2000){
    return (distanceTravelledInFeet(start, end) - 400) * 0.02
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500) {
    return 25
  } else if (distanceTravelledInFeet(start, end) > 2500) {
    return "cannot travel that far"
  }
  }
  

  

  
  

