const getIDs = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([532, 543, 753, 1, 5]);
      }, 1500);
    });
  };
  
  const getRecipe = (recipeID) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${recipeID}: ${recipe.title}`);
      }, 1500);
    });
  };
  
  const fetchRecipe = async () => {
    try {
      const IDs = await getIDs();
      console.log(IDs);
  
      const recipe = await getRecipe(IDs[2]);
      console.log(recipe);
    } catch (error) {
      console.log("It is an error!");
    }
  };
  
  fetchRecipe();
  