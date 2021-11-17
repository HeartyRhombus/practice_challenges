// centuryFromYear
function solution(year) {
        let splitYear = year.toString().split('')
    if(splitYear.length == 4){
        let firstTwo = splitYear.slice(0,2).join('')
        let lastTwo = splitYear.slice(-2).join('')
        if(lastTwo != '00'){
            return parseInt(firstTwo)+1
        } else {
            return parseInt(firstTwo)
        }
    } else if(splitYear.length == 3){
        let firstNum = splitYear.slice(0,1).join('')
        let lastTwo = splitYear.slice(-2).join('')
        console.log()
        if(lastTwo != '00'){
            return parseInt(firstNum)+1
        } else {
            return parseInt(firstNum)
        }
    } else if(splitYear.length <= 2){
        return 1
    }
}

// checkPalindrome
function solution(inputString) {
    let reversedString = inputString.split('').reverse().join('')
    return inputString == reversedString ? true : false
}