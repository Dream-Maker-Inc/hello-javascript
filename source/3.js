const arr = ['hello', 'hi', 'welcome', 'great', 'awesome']
let newArr = []

arr.map(it => {
    const char = it.charAt(0)
    const up = char.toUpperCase()
    newArr.push(up + it.slice(1) + ", js")
})

console.log(newArr)