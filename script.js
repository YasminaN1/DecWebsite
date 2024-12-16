//generate prefix of name
function genPrefix(firstName) {
    if (firstName.length > 4) {
        return 'The Great'
    } else {
        return 'Master'
    }
}

//generate first name of name
function genFirstName(genderType, firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();


    if (genderType === 'male' && firstLetter === 'a') {
        return 'Alexander';
    } else if (genderType === 'male' && firstLetter === 'b') {
        return 'Benedict';
    } else if (genderType === 'male' && firstLetter === 'c') {
        return 'Charles';
    } else if (genderType === 'male' && firstLetter === 'd') {
        return 'Dominic';
    } else if (genderType === 'male' && firstLetter === 'e') {
        return 'Edmund';
    } else if (genderType === 'male' && firstLetter === 'f') {
       return 'Frederick';
    } else if (genderType === 'male' && firstLetter === 'g') {
       return 'George';
    } else if (genderType === 'male' && firstLetter === 'h') {
        return 'Henry';
    } else if (genderType === 'male' && firstLetter === 'i') {
        return 'Isaac'; 
    } else if (genderType === 'male' && firstLetter === 'j') {
        return 'James';
    } else if (genderType === 'male' && firstLetter === 'k') {
        return 'Kenneth';
    } else if (genderType === 'male' && firstLetter === 'l') {
        return 'Laurence';
    } else if (genderType === 'male' && firstLetter === 'm') {
        return 'Miles';
    } else if (genderType === 'male' && firstLetter === 'n') {
        return 'Nathaniel';
    } else if (genderType === 'male' && firstLetter === 'o') {
        return 'Oliver';
    } else if (genderType === 'male' && firstLetter === 'p') {
        return 'Percival';
    } else if (genderType === 'male' && firstLetter === 'q') {
        return 'Quentin';
    } else if (genderType === 'male' && firstLetter === 'r') {
        return 'Richard';
    } else if (genderType === 'male' && firstLetter === 's') {
        return 'Sebastian';
    } else if (genderType === 'male' && firstLetter === 't') {
        return 'Theodore';
    } else if (genderType === 'male' && firstLetter === 'u') {
        return 'Ulysses';
    } else if (genderType === 'male' && firstLetter === 'v') {
        return 'Victor';
    } else if (genderType === 'male' && firstLetter === 'w') {
        return 'William';
    } else if (genderType === 'male' && firstLetter === 'x') {
        return 'Xavier';
    } else if (genderType === 'male' && firstLetter === 'y') {
        return 'York';
    } else {
        return 'Zachary';
    }
} if (genderType === 'female' && firstLetter === 'a') {
        return 'Amelia';
    } else if (genderType === 'female' && firstLetter === 'b') {
        return 'Beatrice';
   
    } else {
        return 'Zara';
    }
} else {
    return 'Alex'; // Default for non-binary or unspecified gender
}
}
//generate middle name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor} ridge`
    } else if (roadType === 'street') {
        return `${favoriteColor}son`
    } else if (roadType === 'ave') {
        return `${favoriteColor}field`

    } else {
        return `${favoriteColor}stone`
    }
}

//generate last name
function genlastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase()
    if (lastLetter === 'a') {
        return 'Shadow'
    } else if (lastLetter === 'e') {
        return 'Storm'
    } else if (lastLetter === 'i') {
        return 'Blaze'
    } else if (lastLetter === 'o') {
        return 'Thorn'
    } else if (lastLetter === 'u') {
        return 'Frost'
    } else {
        return 'Moon'
    }
}
//generate suffix 
function genSuffix(favoriteAnimal) {
    return `of the ${favoriteAnimal}`
}

//master function to essemble full name
function genFullName() {
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const genderType = document.getElementById('genderType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

    //generate each part of the name using helper functions
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const MiddleName = genMiddleName(roadType, favoriteColor)

    const newLastName = genlastName(lastName)
    const newSuffix = genSuffix(favoriteAnimal)

    //function to capatilize words
    const capitalizedPrefix = toCapitalize(prefix)
    const capitalizedNewFirstName = toCapitalize(newFirstName)
    const capitalizedMiddleName = toCapitalize(MiddleName)
    const capitalizedNewLastName = toCapitalize(newLastName)

    const fullName = `${capitalizedPrefix} ${capitalizedNewFirstName} ${capitalizedMiddleName} ${capitalizedNewLastName}`

    //For div from html
    document.getElementById('result').textContent = fullName
}



//capatilizer function
function toCapitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice().toLowerCase()
}




