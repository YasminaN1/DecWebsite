//generate prefix of name
function genPrefix(genderType, firstName) {
    if (genderType === 'male') {
        //
    } else {
        //
    }
  if (firstName.length > 4) {
    return "The Great";
  } else {
    return "Master";
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
  } else { // female
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
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "terrace") {
    return `${favoriteColor} terrace`;
  } else if (roadType === "street") {
    return `${favoriteColor}son`;
  } else if (roadType === "ave") {
    return `${favoriteColor}field`;
  } else if (roadType === "court") {
    return `${favoriteColor}court`;
  } else if (roadType === "other") {
    return `${favoriteColor}other`;
  } else {
    return `${favoriteColor}stone`;
  }
}

//generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Shadow";
  } else if (lastLetter === "e") {
    return "Storm";
  } else if (lastLetter === "i") {
    return "Blaze";
  } else if (lastLetter === "o") {
    return "Thorn";
  } else if (lastLetter === "u") {
    return "Frost";
  } else {
    return "Moon";
  }
}
//generate suffix
function genSuffix(favoriteAnimal) {
  return `of the ${favoriteAnimal}`;
}

//master function to essemble full name
function genFullName() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const genderType = document.getElementById("genderType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  // Generate each part of the name
  const prefix = genPrefix(genderType,firstName);
  const newFirstName = genFirstName(genderType, firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const newSuffix = genSuffix(favoriteAnimal);

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
