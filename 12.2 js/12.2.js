function getCandy(candyStore, id) {
    for (const candy of candyStore.candies) {
      if (candy.id === id) {
        return candy;
      }
    }
    return null;
}
    
//   const candyStore = {
//     candies: [
//       {
//         name: "mint gum",
//         id: "as12f",
//         price: 2,
//         amount: 2
//       },
//       {
//         name: "twix",
//         id: "5hd7y",
//         price: 5,
//         amount: 4
//       },
//     ],
//     cashRegister: 200
//   };
  
//   const candy = getCandy(candyStore, "as12f");
//   console.log(candy);

//   

// function addCandy(candyStore, id, name, price) {
//     const newCandy = {
//       id: id,
//       name: name,
//       price: price,
//       amount: 1, 
//     };
  
//     candyStore.candies.push(newCandy);
//   }
  
//   const candyStore = {
//     candies: [
//       {
//         name: "mint gum",
//         id: "as12f",
//         price: 2,
//         amount: 2
//       },
//       {
//         name: "twix",
//         id: "5hd7y",
//         price: 5,
//         amount: 4
//       },
//     ],
//     cashRegister: 200
//   };
  
//   addCandy(candyStore, "newthing", "chocolate", 3);
  
//   console.log(candyStore.candies);
  
//   

function buy(candyStore, id) {
    for (const candy of candyStore.candies) {
      if (candy.id === id) {
        if (candy.amount > 0) {
          candyStore.cashRegister += candy.price;
          candy.amount -= 1;
          return;
        } else {
          console.log("No more of this candy available.");
          return; 
        }
      }
    }
    console.log("Candy not found.");
  }
  
  const candyStore = {
    candies: [
      {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2
      },
      {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4
      },
    ],
    cashRegister: 200
  };
  
  buy(candyStore, "as12f"); 
  buy(candyStore, "as12f");
  buy(candyStore, "as12f");
  
  console.log("Cash Register:", candyStore.cashRegister);
  console.log("Mint Gum Amount:", candyStore.candies[0].amount);
  
  