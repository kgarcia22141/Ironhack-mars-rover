// Rover Object Goes Here
// ======================
var rover = { direction: ["N","S","E","W"]}
// ======================
function turnLeft(rover){
  if (rover.direction == "N"){
    rover.direction = "W";
  }
  else if (rover.direction == "S"){
    rover.direction = "E";
  }
  else if (rover.direction == "E"){
    rover.direction = "N";
  }
  else if (rover.direction == "W"){
    rover.direction = "S";
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  if (rover.direction == "N"){
    rover.direction = "E";
  }
  else if (rover.direction == "S"){
    rover.direction = "W";
  }
  else if (rover.direction == "E"){
    rover.direction = "S";
  }
  else if (rover.direction == "W"){
    rover.direction = "N";
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  if (rover.direction == "N"){
    rover.y = rover.y + 1;
  }
  else if (rover.direction == "S"){
    rover.y = rover.y - 1 ;
  }
  else if (rover.direction == "E"){
    rover.x = rover.x + 1;
  }
  else if (rover.direction == "W"){
    rover.x = rover.x - 1 ;
  }
  console.log("moveForward was called")
}
