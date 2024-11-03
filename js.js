// var a =prompt("عنوان ورودی را وارد کنید")

// if(a%2==0){
//     alert("زوج")
// }
// else{
//     alert("فرد")
// }

// ///////////17//////////////
// var a=+prompt("number 1: ")
// var b=+prompt("number 2: ")
// var c=+prompt("number 3: ")

// alert((a+b+c)/3)
///////////18//////////////
// var a= Number (prompt("age : "))

// if(a>=18){
//     alert("you can continue")
// }
// else{
//     alert("you can't continue")
// }


/////////19///////////
// var a=Number(prompt("num1 : "))
// var b=Number(prompt("Num2 : "))

// alert(a**b)
/////////////20///////////
// var a=Number(prompt("year of birth : "))
// if(isNaN(a)){
//     alert("bye")  
// }
// else if(a>2024){
//     alert("what??!") 
// }
// else{
//     alert(2024-a)    
// }
//////////////21///////////////
// var a=Number(prompt("num: "))

// var b= Math.trunc(a/60)
// var c= a%60
// if(isNaN(a)){
//     alert("what?")
// }else{
// alert(b +":" +c)}
//////////24////////
// var s=Number(prompt("1 male / 0 female :"))
// var a=Number(prompt("age: "))

// if(s===0||a<18){
//     alert("you can't continue ")
// }
// else{
//     alert("you can continue")
// }
/////////selfish/////////
// var s=Number(prompt("1 male / 0 female :"))
//  var a=Number(prompt("age: "))

//  if(s===0||a<18||a===20||s>1||s<0){
//     alert("you can't continue ")
//  }
//  else{
//      alert("you can continue")
//  }
//////////////28//////////
// var a=Number(prompt("point: "))

// switch(a){
//     case 20:
//     case 19:
//     case 18:    
//         alert("   A   ") 
//         break;
//     case 17:
//     case 16:
//     case 15:
//         alert("   B   ")
//         break;
//     case 14:
//     case 13:
//         alert("   C   ")
//         break;
//     default:
//         alert("   PP   ")                          
//         break;
// }
////////////////32//////////////
// function ZOF(num1){
//     if((num1%2)===0){
//         alert(num1+"is zoj")
//     }
//     else{
//         alert(num1+"is Fard")
//     }
// }
// var a=Number(prompt("number 1: "))
// ZOF(a)
// var b=Number(prompt("number 2: "))
// ZOF(b)
///////////////////33////////////////
// function M(A,B,C){
//     alert((A+B+C)/3)
// }
// var a=Number(prompt("number 1: "))
// var b=Number(prompt("number 2: "))
// var c=Number(prompt("number 3: "))

// M(a,b,c)

// var user= prompt("username")
// var pass= Number(prompt("password:"))

// if(user.length<=3){
//     alert("user is short")
// }
// else if (pass.length<8){
//     alert("password is short")
// }
// else{
//     alert("user band pass was Done")
// }
///////////////////39

// var user= prompt("username")
// var pass= Number(prompt("password:"))

// if(user=="ali"){
//     alert("wellcome")
// }
// else{
//     alert("who are you?")
// }

// var a=Math.random()*100000
// var b=Number(prompt(Math.floor(a)))
// var c=Math.floor(a)

// if(c===b){
//     alert("it's correct")
// }
// else{
//     alert("it isn't correct")
// }

// for(let i=0;i<101;i+=2){
//     console.log(i)
// }
//////////////////48/////////////

// var x=0
// var c
// for(var i=0;i<5;i++){
//     c=Number(prompt("inter price"+ i+1))

//      x=x+c
// }

// alert("your sum is "+ Number(x))
////////////////////48//////////////
// var x =0

// for(var i=1;i<6;i++){
//     x=x+Number(prompt("Number"+i))
// }
// alert(x/5)
///////////////////50
// var x=Number(prompt("Enter Number"))
// var sum=0
// for(var i= 0;Math.floor(x)!=0;i++){
//     sum=sum+(x%10)
//     x=Math.floor(x/10)
// }
// alert(sum)
//////////////////51///////
// var x=Number(prompt("Enter Number"))
// var sum=0
//  for(var i= 0;Math.floor(x)!=0;i++){
//     sum++
//     x=Math.floor(x/10)
// }

//  alert(sum)
 ///////////////52//////////
//  var x=Number(prompt("Enter Number"))
//  var sum=0
//  var j=0
// while(Math.floor(x)!=0){
//     sum=sum+(x%10)
//     j++
//     x=Math.floor(x/10)
// }

// alert("Sum is "+sum+"  and J is "+j)

/////////////////////53///////////////
// var n1=Number(prompt("num 1"))
// var n2=Number(prompt("num 2"))
// var i=n1
// while(i<=n2){
//     if((i%2)===0){
//         console.log(i)
//     }
//     i++
// }
///////////////////////54//////////
// var j=0,i=1,x=Number(prompt("quantity"))
// while(i<=x){
//     j=j+Number(prompt("num " +i))
//     i++
// }
// alert(j/x)
////////////////////55//////////////
// var i=0,j=0
// while(i<=1){
//     if(i===0){
//         j=j+Number(prompt("num "))
//     }
//     else{
//         j=j**Number(prompt("tavan "))
//     }
//     i++
// }
// console.log(j)

// var x=Number(prompt("num "))
// var y=Number(prompt("tavan "))
// var i=0,j=1

// // for(var i=0;i<y;i++){
// //     j=j*x
// // }
// // while(i<y){
// //     j=j*x
// //     i++
// // }
// do{
//     j=j*x
//     i++
// }while(i<y)
// console.log(j)
///////////////////59////////////
// var a= new Array(),j=0

// for(var i=0;i<5;i++){
//     a[i]=Number(prompt("nomre "+(i+1)))
//     j=j+a[i]
// }
// console.log(j/5)

// var x=[],i=0,k=0,j=0,t=0
// while(i!= -1){
//     i=Number(prompt("nomre "+(i+1)))
//     if(i!= -1){
//         x.push(i)
//     }
// }
// for(t;t<x.length;t++){
//     j=j+ x[t]
//     k++
// }
// console.log(j/k)
////////////////////61////////////////
// var p=[
//     {
//         name:"a"
//         ,family:"a"
//         ,age:1
//         ,email:"a"},
//     {
//         name:"b"
//         ,family:"b"
//         ,age:1
//         ,email:"b"},
//     {
//         name:"c"
//         ,family:"c"
//         ,age:1
//         ,email:"c"}]

// for(var i=0;i<3;i++){
//     p[i].name=prompt("name")
//     if(p[i].name.length<3||p[i].name.length>10){
//         alert("3<name<10")
//         p[i].name=prompt("name")
//     }
//     p[i].family=prompt("family")
//     p[i].age=Number(prompt("age"))
//     p[i].email=prompt("email")
// }   
// console.log(p)     
////////////////////////////63/////////////////////

// var user=[
//     {
//         name: "Ali",
//         age: 21
//     },
//     {
//         name: "Mohammad"
//         ,age:20 
//     }
// ]

// user.forEach(function(user){
//     console.log("name:"+user.name+" "+user.age+" years old")
// })
/////////////////////////////////66////////////////////

// var prod=[ 
//     {
//         id:1,
//         name: "bag"
//         ,price: 20
//         ,qy: 3
//     }
//     ,{
//         id:2,
//         name: "cap"
//         ,price: 30
//         ,qy: 3    
//     }
//     ,{
//         id:3,
//         name: "pack"
//         ,price: 25
//         ,qy: 3    
//     }
//     ,{
//         id:4,
//         name: "pen"
//         ,price: 10
//         ,qy: 3    
//     }
//     ,{
//         id:5,
//         name: "lamp"
//         ,price: 33
//         ,qy: 3    
//     }
//     ,{
//         id:6,
//         name: "car"
//         ,price: 2000
//         ,qy: 3    
//     }
// ]
// var bask=[
//     {
//         id:1,
//         name: "bagff"
//         ,price: 20
//         ,qy: 3
//     }
//     ,{
//         id:2,
//         name: "capff"
//         ,price: 30
//         ,qy: 3    
//     }
//     ,{
//         id:3,
//         name: "packff"
//         ,price: 25
//         ,qy: 3    
//     }
// ]
// var C=0,i=0,h=3,k,rp

// do{
//     i++
//     var j= prompt("enter product"+i)
//     prod.forEach(function(user) {
//         if(user.name===j){
//             rp=user
//         }
//         else{
//             alert("product not fouand!!")
//         }
//     });
//     alert("product"+i+"was added")
//     k=prompt("if you want add a another product press 1 ,else press 0")
//     switch(k){
//         case 0 : C=0 
//         break;
//         case 1 : C=1
//         break;
//     }

// }while(C==1)


/////////////////////68//////////

// var group=[
//     {
//         age:19
//     },
//     {
//         age:23
//     },
//     {
//         age:18
//     }

// ]
// var is = group.every(function(Age){
//     return Age.age>=18
// })

// console.log(is)

///////////////////////70///////////////////

// var prod=[ 
//     {
//         id:1,
//         name: "bag"
//         ,price: 20
//         ,qy: 3
//     }
//     ,{
//         id:2,
//         name: "cap"
//         ,price: 30
//         ,qy: 3    
//     }
//     ,{
//         id:3,
//         name: "pack"
//         ,price: 25
//         ,qy: 3    
//     }
//     ,{
//         id:4,
//         name: "pen"
//         ,price: 10
//         ,qy: 3    
//     }
//     ,{
//         id:5,
//         name: "lamp"
//         ,price: 33
//         ,qy: 3    
//     }
//     ,{
//         id:6,
//         name: "car"
//         ,price: 2000
//         ,qy: 3    
//     }
// ]
// var bask=[
//     {
//         id:1,
//         name: "bagff"
//         ,price: 20
        
//     }
//     ,{
//         id:2,
//         name: "capff"
//         ,price: 30
           
//     }
//     ,{
//         id:3,
//         name: "packff"
//         ,price: 25
          
//     }
// ]
// var i,fn,fi
// do{
//     i=prompt("add 1 , delet 2 , exit 0  ")
//     if(i==1){
//         fn=prompt("prod name :")
//         fi=prod.findIndex(function(prod){
//             return prod.name=== fn
//         })
//         bask.push({
//             id: prod[fi].id
//             ,name:prod[fi].name
//             ,price:prod[fi].price
//         })
//     }
//     else if(i==2){
//         fn=prompt("prod name :")
//         fi=bask.findIndex(function(prod){
//             return prod.name=== fn
//         })
//         bask.splice(fi,1)
//     }
    
// }while(i!=0)

// console.log(bask)
///////////////////73
// var prod=[ 
//     {
//         id:1,
//         name: "bag"
//         ,price: 200
//         ,qy: 3
//     }
//     ,{
//         id:2,
//         name: "cap"
//         ,price: 300
//         ,qy: 3    
//     }
//     ,{
//         id:3,
//         name: "pack"
//         ,price: 250
//         ,qy: 3    
//     }
//     ,{
//         id:4,
//         name: "pen"
//         ,price: 100
//         ,qy: 3    
//     }
//     ,{
//(         id:5,
//         name: "lamp"
//         ,price: 330
//         ,qy: 3    
//     }
//     ,{
//         id:6,
//         name: "car"
//         ,price: 2000
//         ,qy: 3    
//     }
// ]
// var s=0,sp

// sp=prod.filter(function(pro){
//     return pro.price<300
// })
// prod.forEach(function(pro){
//     s=s+ pro.price
// })
// s=s+(20* sp.length)

// console.log(s)
///////////////////////76
// var s=0,i= prompt("enter :")
// console.log("i "+i)
// var t = i.split('')
// console.log("t "+t)
// var j = t.reverse()
// console.log("j "+j)
// var k= j.join('')
// console.log("k "+k)
// if(i===k){
//     alert("is correct")
// }
// else{
//     alert("isn't correct")
// }

///////////////////////////78

// var list=[
//     {
//         id:1
//         ,name: 'JS'
//         ,yon:false
//     }
//     ,{
//         id:2
//         ,name: 'CSS'
//         ,yon:false
//     }
//     ,{
//         id:3
//         ,name: 'ENGLISH'
//         ,yon:false
//     }
// ]
// var i,j,k,G,B

// do{
//     i= prompt(" 1-add / 2- delete / 3- do / 0- exit")
//     if(i==1){
//         list.push({
//             id: (list.length)+1
//             ,name: prompt("enter name of do ")
//             ,yon:false
//         })
//     }

//     else if(i==2){
//         j= prompt("enter name ")
//         k= list.findIndex(function(user){
//             return user.name === j
//         })
//         list.splice(k,1)
//     }
//     else if(i==3){
//         G=prompt("enter name")
//         list.forEach(function(user){
//             if(user.name==G){
//                 user.yon=true
//             }
//         })
//     }
//     console.log(list)
// }while(i!=0)

// console.log(list)
//////////////////////////////////80
// var porson=[
//     {
//         id:1
//         ,name: 'Ali'
//         ,task: 'manager'
//     },
//     {
//         id:2
//         ,name: 'Kasra'
//         ,task: 'sale person'
//     },
//     {
//         id:3
//         ,name: 'Hamid'
//         ,task: 'enginear'
//     },
//     {
//         id:4
//         ,name: 'Yas'
//         ,task: 'sister hezab'
//     }
// ]

// var t,n,i
// t=prompt("enter new task")
// n=prompt("enter name of push task")

// i= porson.findIndex(function(user){
//     return user.name === n
// })
// porson[i].task=porson[i].task+" , "+t

// console.log(porson)

//////////////////////////////