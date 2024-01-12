//your JS code here. If required.

setTimeout(()=>{
	console.log("macrotask")
},1000)
const preomise = new Promise((resolve,reject)=>{
	resolve("i am in microtask")
})
preomise.then((data)=>{
	console.log("resolve" + data)
})
