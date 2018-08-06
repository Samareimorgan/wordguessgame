
//Variables

//Arrays

var mildLevel=["Hot Tamales", "Red Hots", "Yellow", "Ghost", "Red", "Bell", "Cumin", "Chili Powder", "Cajun Seasoning", "Paprika", "Cinnamon", "Sahara", "Arabian", "Kalahari", "Mojave", "Kilauea", "Mount Saint Helen's", "Yellowstone"]

var mediumLevel=["Cinnamon Discs", "Jolly Rancher Fire Stick", "Cinnamon Bears", "Atomic Fireballs", "Habanero Orange", "Serrano", "Cayenne", "Turmeric", "Coriander", "Ground Ginger", "Syrian", "Great Victoria", "Simpson", "Mauna Loa", "Krakatoa", "Mount Vesuvius", "Mount Pelee"]

//Set up mildbtn function
function mildbtn() {
  //selects random word from mildLevel Array
  var mildWord=mildLevel[Math.floor(Math.random()*mildLevel.length)]; 
  // create mildAnswer holder & place _ in place of letter in wordchoice area. 
  var mildAnswer =[];
  for(var i=0; i < mildWord.length; i++) {
  mildAnswer[i]="_";
  var holder=document.getElementById("wordchoice");
  holder.innerHTML=mildAnswer.join(" ");
};
}
function mediumbtn() {
  //selects random word from mediumLevel Array
  var medWord=mediumLevel[Math.floor(Math.random()*mediumLevel.length)]; 
  // create mildAnswer holder & place _ in place of letter in wordchoice area. 
  var medAnswer =[];
  for(var i=0; i < medWord.length; i++) {
  medAnswer[i]="_";
  var holder=document.getElementById("wordchoice");
  holder.innerHTML=medAnswer.join(" ");
};

var letterGuess = document.getElementById("letterguess");

document.onkeyup = function(event) {
letterGuess.textContent = event.key;
};
}
