a = ["saeed", "neda"]

ans=a.push("mazi")
console.log(a)
console.log("push = ", ans);

ans = a.pop()
console.log(a)
console.log(ans)

ans = a.shift()
console.log(a)
console.log(ans)

ans = a.unshift("mazi")
console.log(a)
console.log(ans)
a.push(NaN)
// a.unshift(null)
a.unshift(' ')
ans = a.push(undefined)

console.log(a.join(', '))
console.log(ans)
console.log(typeof (a.join()))

let str = a.join('-')
console.log(str)
console.log(str[2])