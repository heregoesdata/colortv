  var faveShade;
  faveShade = prompt("What is your fave shade? ;)");
  console.log("The user entered: " + faveShade);

  //Default color
  document.getElementById("all").style.backgroundColor = "Tomato";

  //Overwrite from prompt if valid
  document.getElementById("all").style.backgroundColor = faveShade;

  // What data type is the variable?
  
