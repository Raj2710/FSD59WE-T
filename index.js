// class User{
//     constructor(name,email,password="111"){
//         this.name=name
//         this.email=email
//         this.password=password
//     }

//     display(){
//         console.log(this.name,this.email,this.password)
//     }
// }

// let user1 = new User("Nagarajan","nag@gmail.com","123")
// let user2 = new User("Arun","arun@gmail.com")

// console.log(user1.name)

// user1.display()
// user2.display()

//Inheritance - Ability to inherit the parent data
// 1. Single
// 2. Hirarchial
// 3. Multi Level
// 4. Multiple (does not support)

// Single Inheritance
// class Parent{
//     constructor(fname,famount){
//         this.fname = fname
//         this.famount = famount
//     }

//     displayParent(){
//         console.log(`${this.fname} holds Rs. ${this.famount}`)
//     }
// }

// class Children extends Parent{
//     constructor(cname,camount,fname,famount){
//         super(fname,famount)
//         this.cname = cname
//         this.camount = camount
//     }

//     displayChild(){
//         console.log(`${this.cname} holds Rs.${this.camount}`)
//     }

//     totalAssets(){
//         console.log(`${this.fname} and ${this.cname} holds Rs.${Number(this.famount) + Number(this.camount)} together`)
//     }
// }

// let c1 = new Children("Whatsapp","5000","Meta","1000000")

// c1.displayChild()
// c1.displayParent()
// c1.totalAssets()

//Hirarchial Inheritance
// class Meta{
//     constructor(fname,famount){
//         this.fname = fname
//         this.famount = famount
//     }

//     displayParent(){
//         console.log(`${this.fname} holds Rs. ${this.famount}`)
//     }
// }

// class Whatsapp extends Meta{
//     constructor(cname,camount,fname,famount){
//         super(fname,famount)
//         this.cname = cname
//         this.camount = camount
//     }

//     displayChild(){
//         console.log(`${this.cname} holds Rs.${this.camount}`)
//     }

//     totalAssets(){
//         console.log(`${this.fname} and ${this.cname} holds Rs.${Number(this.famount) + Number(this.camount)} together`)
//     }
// }


// class Twitter extends Meta{
//     constructor(cname,camount,fname,famount){
//         super(fname,famount)
//         this.cname = cname
//         this.camount = camount
//     }

//     displayChild(){
//         console.log(`${this.cname} holds Rs.${this.camount}`)
//     }

//     totalAssets(){
//         console.log(`${this.fname} and ${this.cname} holds Rs.${Number(this.famount) + Number(this.camount)} together`)
//     }
// }

// let c1 = new Whatsapp("Whatsapp","5000","Meta","1000000")
// let c2 = new Twitter("Twitter","10000","Meta","1000000")
// c1.displayChild()
// c1.displayParent()
// c1.totalAssets()

// c2.displayChild()
// c2.displayParent()
// c2.totalAssets()


// Prviate Property
// class Rectangle{
//     #l;
//     #b;

//     constructor(l,b){
//         this.#l = l
//         this.#b = b
//     }

//     area(){
//         return this.#l * this.#b
//     }
// }
// let rect = new Rectangle(5,10)
// console.log(rect.l,rect.b,rect.area())


//Using Private in Inheritance
// class Parent{
//     #fname;
//     #famount;
//     constructor(fname,famount){
//         this.#fname = fname
//         this.#famount = famount
//     }

//     displayParent(){
//         console.log(`${this.#fname} holds Rs. ${this.#famount}`)
//     }

//     getParentData(){
//         return {
//             fname:this.#fname,
//             famount:this.#famount
//         }
//     }
// }

// class Children extends Parent{
//     constructor(cname,camount,fname,famount){
//         super(fname,famount)
//         this.cname = cname
//         this.camount = camount
//     }

//     displayChild(){
//         console.log(`${this.cname} holds Rs.${this.camount}`)
//     }

//     totalAssets(){
//         let {fname,famount} = this.getParentData()
//         console.log(`${fname} and ${this.cname} holds Rs.${Number(famount) + Number(this.camount)} together`)
//     }
// }

// let c1 = new Children("A",10000,"B",100000)

// c1.displayChild()
// c1.displayParent()
// c1.totalAssets()

//static methods in a class
// class Rectangle{
//     static pi = 3.14
//     constructor(l,b){
//         this.l = l
//         this.b = b
//     }

//     area(){
//         return this.l * this.b
//     }

//     static display(){
//        return "This is static method"
//     }
// }

// let rect = new Rectangle(5,10)
// console.log(Rectangle.display())
// console.log(Rectangle.pi)
// console.log(rect.l,rect.b,rect.area())

// function loopThroughJSON(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         if (Array.isArray(obj[key])) {
//           // loop through array
//           console.log(key)
//           for (let i = 0; i < obj[key].length; i++) {
//             if(typeof(obj[key])==="string" || typeof(obj[key])==="number" || typeof(obj[key])==="boolean")
//             {
//                 console.log(obj[key][i])
//             }
//             else
//                 loopThroughJSON(obj[key][i]);
//           }
//         } else {
//           // call function recursively for object
//           console.log(key)
//           loopThroughJSON(obj[key]);
//         }
//       } 
//       else {
//         // do something with value
//         console.log(key + ': ' + obj[key]);
//       }
//     }
//   }

// let resume = {
//     "name": "John",
//     "age": 30,
//     "address": {
//       "street": "123 Main St",
//       "city": "New York",
//       "state": "NY",
//       "zip": "10001"
//     },
//     "phoneNumbers": [
//       {
//         "type": "home",
//         "number": "555-555-1234"
//       },
//       {
//         "type": "work",
//         "number": "555-555-5678"
//       }
//     ]
//   }

// loopThroughJSON(resume)



//recursion
// function fact(n)
// {
//     if(n===1)
//         return 1
//     else
//         return n * fact(n-1)
// }

// console.log(fact(5))