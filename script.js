//generate prefix of name
function genPrefix(genderType, firstName) {
  if (genderType === "male") {
    if (firstName.length > 4) {
      return "Lord";
    } else {
      return "Count";
    }
  } else {
    if (firstName.length > 4) {
      return "Lady";
    } else {
      return "Countess";
    }
  }
}

//generate first name of name
function genFirstName(genderType, firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();

  if (genderType === "male") {
    if (firstLetter === "a") {
      return "Alexander";
    } else if (firstLetter === "b") {
      return "Benedict";
    } else if (firstLetter === "c") {
      return "Charles";
    } else if (firstLetter === "d") {
      return "Dominic";
    } else if (firstLetter === "e") {
      return "Edmund";
    } else if (firstLetter === "f") {
      return "Frederick";
    } else if (firstLetter === "g") {
      return "George";
    } else if (firstLetter === "h") {
      return "Henry";
    } else if (firstLetter === "i") {
      return "Isaac";
    } else if (firstLetter === "j") {
      return "James";
    } else if (firstLetter === "k") {
      return "Kenneth";
    } else if (firstLetter === "l") {
      return "Laurence";
    } else if (firstLetter === "m") {
      return "Miles";
    } else if (firstLetter === "n") {
      return "Nathaniel";
    } else if (firstLetter === "o") {
      return "Oliver";
    } else if (firstLetter === "p") {
      return "Percival";
    } else if (firstLetter === "q") {
      return "Quentin";
    } else if (firstLetter === "r") {
      return "Richard";
    } else if (firstLetter === "s") {
      return "Sebastian";
    } else if (firstLetter === "t") {
      return "Theodore";
    } else if (firstLetter === "u") {
      return "Ulysses";
    } else if (firstLetter === "v") {
      return "Victor";
    } else if (firstLetter === "w") {
      return "William";
    } else if (firstLetter === "x") {
      return "Xavier";
    } else if (firstLetter === "y") {
      return "York";
    } else {
      return "Zachary";
    }
  } else {
    // female
    if (firstLetter === "a") {
      return "Amelia";
    } else if (firstLetter === "b") {
      return "Beatrice";
    } else if (firstLetter === "c") {
      return "Charlotte";
    } else if (firstLetter === "d") {
      return "Daphne";
    } else if (firstLetter === "e") {
      return "Eleanor";
    } else if (firstLetter === "f") {
      return "Francesca";
    } else if (firstLetter === "g") {
      return "Genevieve";
    } else if (firstLetter === "h") {
      return "Helena";
    } else if (firstLetter === "i") {
      return "Isabella";
    } else if (firstLetter === "j") {
      return "Josephine";
    } else if (firstLetter === "k") {
      return "Katherine";
    } else if (firstLetter === "l") {
      return "Lydia";
    } else if (firstLetter === "m") {
      return "Margaret";
    } else if (firstLetter === "n") {
      return "Nicolette";
    } else if (firstLetter === "o") {
      return "Olivia";
    } else if (firstLetter === "p") {
      return "Penelope";
    } else if (firstLetter === "q") {
      return "Quintessa";
    } else if (firstLetter === "r") {
      return "Rebecca";
    } else if (firstLetter === "s") {
      return "Sophia";
    } else if (firstLetter === "t") {
      return "Tessa";
    } else if (firstLetter === "u") {
      return "Ursula";
    } else if (firstLetter === "v") {
      return "Violet";
    } else if (firstLetter === "w") {
      return "Wini";
    } else if (firstLetter === "x") {
      return "Xerina";
    } else if (firstLetter === "y") {
      return "Yelena";
    } else {
      return "Zara";
    }
  }
}

//generate middle name
function genMiddleName(iceCream, favoriteSeason) {
  if (iceCream === "Gingerbread Fable") {
    return `${favoriteSeason}smith`;
  } else if (iceCream === "Lavender & Honey Tincture") {
    return `${favoriteSeason}son`;
  } else if (iceCream === "Elderflower Cream") {
    return `${favoriteSeason}field`;
  } else if (iceCream === "Jasmine Blossom") {
    return `${favoriteSeason}berg`;
  } else if (iceCream === "other") {
    return `${favoriteSeason}man`;
  } else {
    return `${favoriteSeason}wick`;
  }
}

//generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Lockhart";
  } else if (lastLetter === "e") {
    return "Hastings";
  } else if (lastLetter === "i") {
    return "Pembroke";
  } else if (lastLetter === "o") {
    return "Ellington";
  } else if (lastLetter === "u") {
    return "Hawthorne";
  } else {
    return "Davenport";
  }
}
//generate suffix
function genSuffix(favoriteCountry) {
  return `of ${favoriteCountry}`;
}

//master function to essemble full name
function genFullName() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const iceCream = document.getElementById("iceCream").value;
  const genderType = document.getElementById("genderType").value;
  const favoriteSeason = document.getElementById("favoriteSeason").value.trim();
  const favoriteCountry = document
    .getElementById("favoriteCountry")
    .value.trim();

  // Generate each part of the name
  const prefix = genPrefix(genderType, firstName);
  const newFirstName = genFirstName(genderType, firstName);
  const middleName = genMiddleName(iceCream, favoriteSeason);
  const newLastName = genLastName(lastName);
  const newSuffix = genSuffix(favoriteCountry);

  // Capitalize each part
  const capitalizedPrefix = toCapitalize(prefix);
  const capitalizedNewFirstName = toCapitalize(newFirstName);
  const capitalizedMiddleName = toCapitalize(middleName);
  const capitalizedNewLastName = toCapitalize(newLastName);

  const fullName = `${capitalizedPrefix} ${capitalizedNewFirstName} ${capitalizedMiddleName} ${capitalizedNewLastName} ${newSuffix}`;

  // Display the result
  document.getElementById("result").innerHTML = fullName;
}

//capatilizer function
function toCapitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
