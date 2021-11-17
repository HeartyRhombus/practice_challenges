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

// adjacentElementsProduct
function solution(inputArray) {
    let finalProduct
    for(let i = 0; i < inputArray.length; i++){
        let product = inputArray[i] * inputArray[i+1]
        if(product > finalProduct || finalProduct == undefined){
            finalProduct = product
        }
    }
    
    return finalProduct
}

// shapeArea
function solution(n) {
    let outerSum
    let next = n - 1
    let prod = 0

    if(n > 1){
        outerSum = n+(n-1)+(n-1)+(n-2)
    } else {
        outerSum = 1
    }
    
    if(next > 1){
        prod = outerSum + solution(n-1)
    } else if(next == 1){
        prod = outerSum + 1
    } else {
        prod = 1
    }
    // console.log(outerSum, next, prod)
    
    return prod
}