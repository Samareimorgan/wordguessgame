
//Variables
var wins=0;
var losses=0;

var maxGuesses=12;

//Arrays

var mildLevel=["HOT TAMALES", "RED HOTS", "YELLOW", "GHOST", "RED", "BELL", "CUMIN", "CHILI POWDER", "CAJUN SEASONING", "PAPRIKA", "CINNAMON", "SAHARA", "ARABIAN", "KALAHARI", "MOJAVE", "KILAUEA", "MOUNT SAINT HELEN'S", "YELLOWSTONE"]

var mediumLevel=["CINNAMON DISCS", "JOLLY RANCHER FIRE STICK", "CINNAMON BEARS", "ATOMIC FIREBALLS", "HABANERO ORANGE", "SERRANO", "CAYENNE", "TURMERIC", "CORIANDER", "GROUND GINGER", "SYRIAN", "GREAT VICTORIA", "SIMPSON", "MAUNA LOA", "KRAKATOA", "MOUNT VESUVIUS", "MOUNT PELEE"]

var spicyLevel=["TABASCO JELLY BELLY JELLY BEANS", "SWEET HEAT SKITTLES", "CAROLINA REAPER", "DEVIL'S TONGUE RED", "HOT PAPER LANTERN", "SCOTCH BONNETT", "CARDAMOM ", "SUMAC", "JUNIPER BERRY", "SONORAN", "THAR", "CHIHUAHUAN", "HAVRE", "OLYMPUS MONS", "PARICUTIN"]

var extraSpicyLevel=["MANGO CHILE BARRELS", "WASABI CANDY NUGGETS", "MAGA VIPER", "FATALII", "BAHAMIAN BIRD", "AMCHUR POWDER", "GALANGAL", "ACHIOTE", "NIGELLA SEEDS", "REGISTAN", "DASHT-E MARGOD", "NOVARUPTA", "SHISHALDIN"]

//Category Arrays
var candy=["Hot Tamales", "Red Hots","Cinnamon Discs", "Jolly Rancher Fire Stick", "Cinnamon Bears",  "Atomic Fireballs", "Tabasco Jelly Belly Jelly Beans", "Sweet Heat Skittles", "Mango Chile Barrels"]
var chiliPepper=["Jalapeno","Bell", "Red", "Ghost", "Yellow", "Habanero Orange", "Serrano", "Carolina Reaper", "Devil's Tongue Red", "Hot Paper Lantern", "Scotch Bonnet", "Naga Viper", "Fatalii", "Bahamian Bird"]

var deserts=["Sahara", "Arabian", "Kalahari", "Mojave", "Syrian", "Great Victoria", "Simpson", "Sonoran", "Thar", "Chihuahuan", "Registan", "Dasht-e Margo"]

var spices=["Cajun Seasoning", "Chili Powder", "Paprika", "Cumin", "Cinnamon", "Cayenne", "Turmeric", "Coriander", "Ground Ginger", "Cardamom", "Sumac", "Juniper Berry", "Amchur Powder", "Galangal", "Achiote", "Nigella Seeds"]

var volcanoes=["Yellowstone", "Kilauea", "Mount Saint Helens", "Mauna Loa", "Krakatoa", "Mount Vesuvius", "Olympus Mons",
"Mount Pelee" , "Havre", "Paricutin", "Novarupta", "Shishaldin"]



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
//Remaining PseudoCode
// 1. After word is chose, the script matches the Random word to a word in a Category array.
// 2. Once the word is matched the script then "activates" the category on the UI.
// 3. The words " Please select a letter " comes on the screen
// 4. After letter selection, the script changes the case to Upper case and matches the letter to the Random word.  
      //if the letter matches in the Random Word then the letter appears in the correct place in the word box AND
      // it changes the letter in the letters available box to Green. 
//       it decreases the guesses left by 1
// 5. If a letter does not match, then it changes that letter in the letter box red.
//           It decreases the guesses left by 1
// 
//Total guesses for the word 12
// If all guesses are used and the word has not been solved by User - the User loses and Losses increase by 1.
// If all letters are guessed in the word, they win the game.  And the Win goes up by 1 
// ***Need to add: Begin New Game Button 
    // When clicked on, it resets the game and the wins and losses

}