
//Variables

//Arrays

var mildLevel=["HOT TAMALES", "RED HOTS", "YELLOW", "GHOST", "RED", "BELL", "CUMIN", "CHILI POWDER", "CAJUN SEASONING", "PAPRIKA", "CINNAMON", "SAHARA", "ARABIAN", "KALAHARI", "MOJAVE", "KILAUEA", "MOUNT SAINT HELEN'S", "YELLOWSTONE"]

var mediumLevel=["CINNAMON DISCS", "JOLLY RANCHER FIRE STICK", "CINNAMON BEARS", "ATOMIC FIREBALLS", "HABANERO ORANGE", "SERRANO", "CAYENNE", "TURMERIC", "CORIANDER", "GROUND GINGER", "SYRIAN", "GREAT VICTORIA", "SIMPSON", "MAUNA LOA", "KRAKATOA", "MOUNT VESUVIUS", "MOUNT PELEE"]

var spicyLevel=["TABASCO JELLY BELLY JELLY BEANS", "SWEET HEAT SKITTLES", "CAROLINA REAPER", "DEVIL'S TONGUE RED", "HOT PAPER LANTERN", "SCOTCH BONNETT", "CARDAMOM ", "SUMAC", "JUNIPER BERRY", "SONORAN", "THAR", "CHIHUAHUAN", "HAVRE", "OLYMPUS MONS", "PARICUTIN"]

var extraSpicyLevel=["MANGO CHILE BARRELS", "WASABI CANDY NUGGETS", "MAGA VIPER", "FATALII", "BAHAMIAN BIRD", "AMCHUR POWDER", "GALANGAL", "ACHIOTE", "NIGELLA SEEDS", "REGISTAN", "DASHT-E MARGOD", "NOVARUPTA", "SHISHALDIN"]

//Category Arrays
var candy=["Hot Tamales", "Red Hots","Cinnamon Discs", "Jolly Rancher Fire Stick", "Cinnamon Bears",  "Atomic Fireballs", "Tabasco Jelly Belly Jelly Beans", "Sweet Heat Skittles", "Mango Chile Barrels"]



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
}
//place letter guessed in the letter guess box
var letterGuess = document.getElementById("letterguess");
document.onkeyup = function(event) {
 letterGuess.textContent = event.key;
};
}
//Set up mediumbtn function
function mediumbtn() {
  //selects random word from mediumLevel Array
  var medWord=mediumLevel[Math.floor(Math.random()*mediumLevel.length)]; 
  // create medAnswer holder & place _ in place of letter in wordchoice area. 
  var medAnswer =[];
  for(var i=0; i < medWord.length; i++) {
  medAnswer[i]="_";
  var holder=document.getElementById("wordchoice");
  holder.innerHTML=medAnswer.join(" ");
}
//place letter guessed in the letter guess box
var letterGuess = document.getElementById("letterguess");
document.onkeyup = function(event) {
 letterGuess.textContent = event.key;
};
}
//Set up spicybtn function
function spicybtn() {
  //selects random word from spicyLevel Array
  var spicyWord=spicyLevel[Math.floor(Math.random()*spicyLevel.length)]; 
  // create spicyAnswer holder & place _ in place of letter in wordchoice area. 
  var spicyAnswer =[];
  for(var i=0; i < spicyWord.length; i++) {
  spicyAnswer[i]="_";
  var holder=document.getElementById("wordchoice");
  holder.innerHTML=spicyAnswer.join(" ");
}
//place letter guessed in the letter guess box
var letterGuess = document.getElementById("letterguess");
document.onkeyup = function(event) {
 letterGuess.textContent = event.key;
};
}
//Set up exspicybtn function
function exspicybtn() {
  //selects random word from extraspicyLevel Array
  var exspicyWord=extraSpicyLevel[Math.floor(Math.random()*extraSpicyLevel.length)]; 
  // create spicyAnswer holder & place _ in place of letter in wordchoice area. 
  var exspicyAnswer =[];
  for(var i=0; i < exspicyWord.length; i++) {
  exspicyAnswer[i]="_";
  var holder=document.getElementById("wordchoice");
  holder.innerHTML=exspicyAnswer.join(" ");
};
//place letter guessed in the letter guess box
var letterGuess = document.getElementById("letterguess");
document.onkeyup = function(event) {
 letterGuess.textContent = event.key;
};
}