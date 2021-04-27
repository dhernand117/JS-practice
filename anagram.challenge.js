//*This function will check if the values of the first array are the same but in different order of the second one
function validAnagram (first, second) {
    if(first.length !== second.length){
        return false;
    }
    const lookup= {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];

        lookup[letter] ? lookup[letter] +=1 : lookup[letter]=1;
        console.log(lookup);
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }        
    }
    return true;
}

let result = validAnagram('anagram', 'nagaram');
console.log(result);