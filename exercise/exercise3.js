function digital(string) {
    let arr = string.split("")
    console.log(arr)
    let ascending = []
    for (let i = 0; i < arr.length; i++) {
        ascending.push(arr[i])
    }
    ascending.sort(function (a, b) { return a - b })
    let descending = []
    for (let count = arr.length - 1; count >= 0; count--) {
        descending.push(ascending[count])
    }
    console.log(arr, ascending, descending)
    let ascen = 0
    let descen = 0
    let rep = 0
    let mix = 0
    let newarr = []
    for (let num = 0; num < arr.length; num++) {
        if (newarr.indexOf(arr[num]) == -1) {
            newarr.push(arr[num])
        }
    }
    console.log(arr)
    if (arr[0] == ascending[0]) {
        for (let loop1 = 0; loop1 < ascending.length; loop1++) {
            if (arr[loop1] == ascending[loop1]) {
                ascen += 1
            } else if (arr[loop1] != ascending[loop1]) {
                mix += 1
            }
        }
    } else if (arr[0] == descending[0]) {
        for (let loop2 = 0; loop2 < descending.length; loop2++) {
            if (arr[loop2] == descending[loop2]) {
                descen += 1
            } else if (arr[loop2] != descending[loop2]) {
                mix += 1
            }
        }
    } else {
        console.log("Nondrome")
    }
    console.log(newarr)
    console.log(ascen, descen, mix, rep)
    if (ascen == arr.length) {
        if (newarr.length < arr.length) {
            if (newarr.length != 1) {
                console.log("Plaindrome")
            }
        } else {
            console.log("Metadrome")
        }
    }
    if (descen == arr.length) {
        if (newarr.length < arr.length) {
            console.log("Nialpdrome")
        } else {
            console.log("Katadrome")
        }
    }
    if (mix > 0) {
        console.log("Nondrome")
    }
    if (newarr.length == 1) {
        console.log("Repdrome")
    }
}

digital("1233321")

//dice gambling

function rolldice(arr) {
    console.log(arr)
    let sum = 0
    for (let o = arr.length - 1; o >= 0; o--) {
        if (arr[o - 1] != 1 && arr[o - 1] != 6) {
            sum += arr[o]
            console.log(sum)
        } else if (arr[o - 1] == 1) {
            arr[o] = 0
            sum += arr[o]
            console.log(sum)
        } else if (arr[o - 1] == 6) {
            arr[o] = arr[o] * 2
            sum += arr[o]

        }
    }
    console.log(sum)
}

let diceroll = [6, 1, 1]
rolldice(diceroll)

//Chinese Zodiac

function cycle(year) {
    console.log(year)
    let zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"]
    let element = ["Wood", "Wood", "Fire", "Fire", "Earth", "Earth", "Metal", "Metal", "Water", "Water"]
    let gap = Math.abs(year - 1984)
    let answer = ""
    let milestone = (gap % 12)
    let milestone2 = (gap % 10)
    console.log(milestone, milestone2)
    if (year >= 1984) {
        answer = year + " " + element[milestone2] + " " + zodiac[milestone]
        console.log(answer)
    } else {
        let a = (element.length - milestone2)
        if (milestone == 0) {
            answer = year + " " + element[(element.length - milestone2)] + " " + zodiac[milestone]
            console.log(answer)
        } else if (milestone2 == 0) {
            answer = year + " " + element[(milestone2)] + " " + zodiac[zodiac.length - milestone]
            console.log(answer)
        } else {
            answer = year + " " + element[(element.length - milestone2)] + " " + zodiac[zodiac.length - milestone]
            console.log(answer)
        }
    }
}

cycle(1935)

//Poker flush

function checkFlush(arr1, arr2) {
    console.log(arr1,arr2)
    let inhand= []
    let newcard=[]
    let sort=[]
    for(let count1=0;count1<arr1.length;count1++){
        inhand.push(arr1[count1])
    }
    for(let count2=0;count2<arr2.length;count2++){
        inhand.push(arr2[count2])
    }
    console.log(inhand)
    for(let count3=0;count3<inhand.length;count3++){
        console.log()
        newcard.push((inhand[count3].split("_"))[1])
    }
    console.log(newcard)
    for(let count4=0;count4<newcard.length;count4++){
        if(sort.indexOf(newcard[count4])==-1){
            sort.push(newcard[count4])
        }
    }
    console.log(sort)
    if(sort.length>2){
        console.log("false")
    } else{
        console.log("true")
    }
}

let arr1 = ["A_S", "J_H", "7_D", "8_C", "10_S"]
let arr2 = ["J_S", "3_D"]

checkFlush(arr1,arr2)