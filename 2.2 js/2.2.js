function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`;
  }
  
  const jobTitle = "programmer";
  const location = "New York";
  const partnerName = "Rana";
  const numberOfChildren = 2;
  
  const fortune = tellFortune(jobTitle, location, partnerName, numberOfChildren);
  console.log(fortune);