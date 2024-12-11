//generate prefix of name
function genPrefix(firstName){
    if(firstName.length > 4){
        return 'The Great'
} else{
    return 'Master'
}
}

//generate first name of name
function genFirstName(firstName){
   const firstLetter = firstName.charAt(0).toLowerCase()
   if (firstLetter === 'a'){
    return 'Jeff'
   } else if (firstLetter === 'b'){
   return 'Joe'
   } else if (firstLetter === 'c'){
    return 'Chris'
    } else if (firstLetter === 'd'){
        return 'Diana'
    }else {
        return 'Zach'
    }
}

//generate middle name
function getMiddleName(roadType, favoriteColor){
    if (roadType === 'road'){
        return `${favoriteColor} ridge`
    }else if (roadType === 'street'){
        return `${favoriteColor}son`
    }else if (roadType === 'ave'){
        return `${favoriteColor}field`
        
    } else {
        return`${favoriteColor}stone`
    }
}

//generate last name
function getlastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if(lastLetter === 'a'){
        return 'Shadow'
    } else if (lastLetter === 'e'){
        return 'Storm'
    }else if (lastLetter === 'i'){
        return 'Blaze'
    }else if (lastLetter === 'o'){
        return 'Thorn'
    }else if (lastLetter === 'u'){
        return 'Frost'} else{
            return 'Moon'
        }
}
//generate suffix 
function getSuffix(favoriteAnimal){
    return `of the ${favoriteAnimal}`
}

//master function to essemble full name
function genFullName(){
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const genderType = document.getElementById('genderType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

//generate each part of the name using helper functions
const prefix = genPrefix(firstName)
const newFirstName = genFirstname(firstName)
const newMiddleName = genMiddlenName(roadType, favoriteColor)
const newLastName = genLastName(lastName)
const newSuffix = genSuffix(favoriteAnimal)

}




