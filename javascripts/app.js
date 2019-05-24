var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
     rover.direction = "W";
     console.log("Rover is now facing west");
    break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing east");
    break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing north");
    break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing south");
    break;
    default:
      console.log("Direction is invalid")
    break;
  };
};

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
     rover.direction = "E";
     console.log("Rover is now facing east");
    break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing west");
    break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing south");
    break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing north");
    break;
    default:
      console.log("Direction is invalid")
    break;
  };
};

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.travelLog.push(`${rover.x},${rover.y}`)
      rover.y--;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   case "S":
      rover.travelLog.push(`${rover.x},${rover.y}`)
      rover.y++;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   case "E":
      rover.travelLog.push(`${rover.x},${rover.y}`)
      rover.x++;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   case "W":
      rover.travelLog.push(`${rover.x},${rover.y}`)
      rover.x--;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   default:
     console.log("I don\'t know where I\'m going")
   break;
  }
}

function moveBackwards(rover){
  console.log("moveBackwards was called")
  switch (rover.direction) {
    case "N":
      rover.travelLog.push(`${rover.x},${rover.y}`)
      rover.y++;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   case "S":
      rover.travelLog.push(`${rover.x},${rover.y}`) 
      rover.y--;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   case "E":
      rover.travelLog.push(`${rover.x},${rover.y}`)
      rover.x--;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   case "W":
      rover.travelLog.push(`${rover.x},${rover.y}`) 
      rover.x++;
      console.log(`Rover position is now (${rover.x},${rover.y})`);
   break;
   default:
     console.log("I don\'t know where I\'m going")
   break;
  }
}

var commandList = "rffrfflfrff";

function executeCommand(commandList) {
  for(let command of commandList) {
    switch(command) {
      case "r":
        turnRight(rover);
      break;
      case "l":
        turnLeft(rover);
      break;
      case "f":
        moveForward(rover);
      break;
      case "b":
        moveBackwards(rover);
      break;
      default:
        console.log("Invalid command. Sorry!");
      break;
    };
  };
  console.log(`Rover position is now (${rover.x},${rover.y})`);
};

