console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
   for (var i = 0, len = lands.length; i < len; i++){
    
  // inside, add each land as an article tag
    var land = document.createElement("article");

    
  // inside each article tag include an h1 with the name of the land
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
  }
  // append middle-earth to your document body
    body.appendChild(middleEarth);
  
}

makeMiddleEarth();

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var hobbitList = document.createElement('ul');
  for (var i =0, len = hobbits.length; i < len; i++){

  // give each hobbit a class of hobbit
  var hobbit = document.createElement('li');
  hobbit.className = 'hobbit';
  hobbit.innerText = hobbits[i];
  hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
}

makeHobbits();

var frodo = body.querySelector('li');
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListner('click', nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var buddyList = document.createElement('ul');
  for (var i = 0, len = buddies.length; i < len; i++){
    var buddy = document.createElement('li');
    buddy.textContent = buddies [i];
    buddyList.appendChild(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();



// Part 5
var strider = rivendell.querySelectorAll('li')[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = 'Aragon';
}

beautifulStranger();


// Part 6
var hobbits = theShire.querySelector('ul');
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);
}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within 
  var theFellowship = document.createElement('div');
  
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = 'Gandalf the White';
  // apply style to the element
  gandalf.style.border = '3px solid gray';
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = 'whtie';
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('the horn of gondor has been blown');
  // Boromir's been killed by the Uruk-hai!
  boromir.style.textDecoration = 'linethrough';
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  //???//
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain();
