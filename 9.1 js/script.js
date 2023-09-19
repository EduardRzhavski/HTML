const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];
  
  for (let i = 0; i < listOfNeighbours.length; i++) {
    const subArray = listOfNeighbours[i];
    
    for (let j = 0; j < subArray.length; j++) {
      console.log("Neighbour:", subArray[j]);
    }
  }
  