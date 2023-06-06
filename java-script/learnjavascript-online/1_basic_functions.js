
function sum(x, y) {
    return x + y;
}

let result = sum(5, 7);
console.log(result)

const word = "Calendar";
console.log(word[1]);
console.log(word[word.length - 2])


for (let i in word) {
    console.log(word[i]);
}

for (let i = 0; i < word.length; i++) {
    console.log(word[word.length - 1 - i]);
}

console.log(word.charAt(5))
