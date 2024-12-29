const age = 18;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("you can not eligble");
}

const age1 = 18;
if (age1 < 18) {
  console.log("shivani under age1");
} else if (age1 >= 18 && age1 <= 21) {
  console.log("shivani is between the age of 18 and 21.");
} else {
  console.log("shivani is over 21 years old.");
}

const pet = "parrot";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}

const pet1 = "dog";
switch (pet1) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("i own a snake");
    break;
  case "parrot":
    console.log("i own a parrot");
    break;
  default:
    console.log("I do not own a pet ");
    break;
}

const ages = 17;
const ownsCar = true;
if (age >= 16 && ownsCar) {
  console.log("Jerry is old enough to drive and has his own car.");
} else {
  console.log("Jerry does not drive.");
}

const agess = 13;
const ownsCarrr = true;

if (agess >= 16 && ownsCarrr) {
  console.log("Jerry is old enough to drive and has his own car.");
} else {
  console.log("Jerry does not drive.");
}

const boyfriendIsPaying = false;
const isSale = false;

if (boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}

const boyfriendIsPaying1 = true;
const isSale1 = false;
if (!boyfriendIsPaying1 || isSale1) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}
