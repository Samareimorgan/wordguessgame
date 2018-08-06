// Various Variables //
var wins=0;
var losses=0;

var maxGuesses=12;

var wordDisplay=document.getElementsByClassName(...);
var guessedLetters=document.getElementsByClassName(...);
var guessNum=document.getElementsByClassName(...);
var winCount=document.getElementsByClassName(...);
var lossCount=document.getElementsByClassName(...);


//..Level Arrays..//
var mildLevel=["Hot Tamales", "Red Hots", "Yellow", "Ghost", "Red", "Bell", "Cumin", "Chili Powder", "Cajun Seasoning", "Paprika", "Cinnamon", "Sahara", "Arabian", "Kalahari", "Mojave", "Kilauea", "Mount Saint Helen's", "Yellowstone"]

var mediumLevel=["Cinnamon Discs", "Jolly Rancher Fire Stick", "Cinnamon Bears", "Atomic Fireballs", "Habanero Orange", "Serrano", "Cayenne", "Turmeric", "Coriander", "Ground Ginger", "Syrian", "Great Victoria", "Simpson", "Mauna Loa", "Krakatoa", "Mount Vesuvius", "Mount Pelee"]

var spicyLevel=["Tabasco Jelly Belly Jelly Beans", "Sweet Heat Skittles", "Carolina Reaper", "Devil's Tongue Red", "Hot Paper Lantern", "Scotch Bonnet", "Cardamom", "Sumac", "Juniper Berry", "Sonoran", "Thar", "Chihuahuan", "Havre", "Olympus Mons", "Parícutin"]

var extraSpicyLevel=["Mango Chile Barrels", "Wasabi Candy Nuggets", "Naga Viper", "Fatalii", "Bahamian Bird", "Amchur Powder", "Galangal", "Achiote", "Nigella Seeds", "Registan", "Dasht-e Margo", "Novarupta", "Shishaldin"]

// Array of the Various Levels //
var levelsArray=["mildLevel", "mediumLevel","spicyLevel", "extraSpicyLevel"]

//..Category Arrays..//
var candy=["Hot Tamales", "Red Hots","Cinnamon Discs", "Jolly Rancher Fire Stick", "Cinnamon Bears",  "Atomic Fireballs", "Tabasco Jelly Belly Jelly Beans", "Sweet Heat Skittles", "Mango Chile Barrels"]

var chiliPepper=["Jalapeno","Bell", "Red", "Ghost", "Yellow", "Habanero Orange", "Serrano", "Carolina Reaper", "Devil's Tongue Red", "Hot Paper Lantern", "Scotch Bonnet", "Naga Viper", "Fatalii", "Bahamian Bird"]

var deserts=["Sahara", "Arabian", "Kalahari", "Mojave", "Syrian", "Great Victoria", "Simpson", "Sonoran", "Thar", "Chihuahuan", "Registan", "Dasht-e Margo"]

var spices=["Cajun Seasoning", "Chili Powder", "Paprika", "Cumin", "Cinnamon", "Cayenne", "Turmeric", "Coriander", "Ground Ginger", "Cardamom", "Sumac", "Juniper Berry", "Amchur Powder", "Galangal", "Achiote", "Nigella Seeds"]

var volcanoes=["Yellowstone", "Kilauea", "Mount Saint Helens", "Mauna Loa", "Krakatoa", "Mount Vesuvius", "Olympus Mons",
"Mount Pelee" , "Havre", "Paricutin", "Novarupta", "Shishaldin"]

var game = new Hangman();
    document.onkeyup = function(event) {
    var userGuess = event.key;


    function Hangman() {
        this.wordList =
//Mild Level Selection
        //On click event
    var randIndex="";
    
    for(var i = 0; i < 18; i++) {
     var randomNum = Math.floor((Math.random() *17 ) +1)
     randIndex= randomNum 
     console.log("Your Index Number is:" + randomNum)


// 4. After word is choice, it goes through the Category arrays until the word is matched.
// 5. Once the word is matched the script then "activates" the category on the UI
// 6. Also, once the word is selected, letter spaces are created (appended) to the Wordbox with the length of letters in the selected word.
// 7. Then, the words " Please select a letter " comes on the screen
// 8. On key event (letter selection), the script goes through the chosen word in the wordbox to see if that letter 
//matches any in the word. 
//  9. If a letter matches, then it highlights that letter in the letter box Green.
//         Also if a letter matches, then it places it on the appropriate line in the wordbox. 
//         Also it adds it to the Letters Guessed area 
//         Also it decreases the guesses left by 1
// 10. If a letter does not match, then it highlights that letter in the letter box red. 
//           Also, it adds it to the guessed letters areas
//           It decreases the guesses left by 1
// Total guesses for the word 12
// If all guesses are used and the word has not been solved by User - the User loses 
// If all letters are guessed in the word, they win the game.  And the Win goes up by 1 
// If the User presses the Solution Button - they forfeit the game and Losses increases by 1
// On click of the Solution Button - The word in the wordbox appears
// Begin New Game Button 
    // When clicked on, it resets the game and the wins and losses

