//Objective is to find the shortest distance in a 1-D array between 2 words.

let arr = ["practice", "makes", "perfect", "coding", "makes"]
let word1 = "practice"
let word2 = "makes"


//O(n) solution that updates the minimum distance during each iteration.

let index1 = -1
let index2 = -2
let result = Infinity

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word1) {
        index1 = i
    } else if (arr[i] == word2) {
        index2 = i
    }

    if (index1 !== -1 && index2 !== -1) {
        result = Math.min(result, Math.abs(index2 - index1))
    }
}

return result