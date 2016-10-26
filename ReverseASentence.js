//Instructions

//Take a sentence (string) 
//and reverse each letter in each word in the sentence. Do not reverse the order of the words, just the letters in each word.

// reverse the letters in the sentence
function reverser(sentence) {
    return sentence.split(' ').map(function(ele){
        return ele.split('').reverse().join('');
    }).join(' ');	
}
