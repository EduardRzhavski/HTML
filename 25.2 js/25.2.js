const myObject = {
    name: "My Object",
    printName: function() {
      console.log(this.name);
    },
    printNameAfterASecond: function() {
      setTimeout(this.printName.bind(this), 1000);
    }
  };
  
  myObject.printName();
  myObject.printNameAfterASecond();
  