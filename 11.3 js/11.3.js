const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];

// 1
    // function getNames(data) {
    //     return data.map((person) => person.name);
    //   }
      
    //   const names = getNames(data);
    //   console.log(names);
      
// 2
// function bornBefore1990(data) {
//     const cutoffYear = 1990;
  
//     const birthYears = data.map((person) => new Date(person.birthday).getFullYear());
  
//     const filteredObjects = data.filter((_, index) => birthYears[index] < cutoffYear);
  
//     return filteredObjects;
//   }
  
//   const bornBefore1990Objects = bornBefore1990(data);
//   console.log(bornBefore1990Objects);

// 3
function countFoods(data) {
    const foodCounts = {};
  
    data.forEach((person) => {
      const favoriteFoods = person.favoriteFoods;
  
      favoriteFoods.meats.forEach((meat) => {
        if (foodCounts[meat]) {
          foodCounts[meat]++;
        } else {
          foodCounts[meat] = 1;
        }
      });
  
      favoriteFoods.fish.forEach((fish) => {
        if (foodCounts[fish]) {
          foodCounts[fish]++;
        } else {
          foodCounts[fish] = 1;
        }
      });
    });
  
    return foodCounts;
  }
  
  const foodCounts = countFoods(data);
  console.log(foodCounts);
  
  