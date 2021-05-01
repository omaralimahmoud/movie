    let v=[]
  async  function we ()
 
 {
     let x= await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=332f74f5e3c73bec7c7b6c0e3b8b7b4d`)
          
     let r=await x.json()
       v=r.results
       console.log(v)
         welcome()
       
       
 }
 we()
 function welcome()
 {
    let post=``
     for(let i=0;i<v. length;i++)
     {
        
        post+=` <div class="col-md-3">
        <h5>${v[i].vote_average}</h5>
        <img class="w-100"  src="https://image.tmdb.org/t/p/w500${v[i].poster_path}">
        <h3>${v[i].title}</h3>
        <h6>${v[i].original_title}</h6>
        <p>${v[i].overview}</p>
        <h4>${v[i].id}</h4>
       </div>`
     }
     document.getElementById("cog").innerHTML=post;
 }




 let npm=30
 let nn=  function tw()
{
     
   console.log(npm)
   let npm=33
}
nn()

 
 
 
 
 
 /*(function(){
      console.log("hello")
  })



  import *as omar from './frist.js'
 omar. week()
 window.alert(omar. v)
/*async function pizza ()
{
   let x=  await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`,);
    let eat= await  x.json();
    console.log("pizza");
      console.log(eat.recipes);

}
  

   async function pasta(){
    let roomEat= await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pasta`);
     let lovePasta= await roomEat.json();
       console.log("pasta");
     console.log(lovePasta.recipes);
     
  }
  







 async function salad () {
      let goodfood=await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pasta`);
      let good= await   goodfood.json();
      console.log("salad");
      console.log(good.recipes);
      
  }

  
  (async function(){
    await pasta()
     await pizza()
     await salad()
     
  })()
 
 
  
  /*function pizza() {



    return  new Promise(function(callback){

        let allrepise = []
        let myHttp = new XMLHttpRequest()
        myHttp.open("Get", `https://forkify-api.herokuapp.com/api/search?&q=pizza`);
        myHttp.send();
        myHttp.addEventListener("readystatechange", function () {
            if (myHttp.readyState == 4 && myHttp.status == 200) {
    
                console.log("pizza")
    
                allrepise = JSON.parse(myHttp.response).recipes;
                console.log(allrepise)
                callback()
            }
        })


    })
    
};



    function salad() {
    
        let allrepise = []
        let myHttp = new XMLHttpRequest()
        myHttp.open("Get", `https://forkify-api.herokuapp.com/api/search?&q=salad`);
        myHttp.send();
        myHttp.addEventListener("readystatechange", function () {
            if (myHttp.readyState == 4 && myHttp.status == 200) {
    
                console.log("salad")
    
                allrepise = JSON.parse(myHttp.response).recipes;
                console.log(allrepise)
                callback()
            }
        })
    
   
};


function pasta() {

    return new Promise(function(callback){
        let allrepise = []
    let myHttp = new XMLHttpRequest()
    myHttp.open("Get", `https://forkify-api.herokuapp.com/api/search?&q=pasta`);
    myHttp.send();
    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && myHttp.status == 200) {

            console.log("pasta")

            allrepise = JSON.parse(myHttp.response).recipes;
            console.log(allrepise)
            callback()
        }
    })
    })

    
};
function finish() {
    console.log("all the finish function")
}



//pizza().then(function(){return salad()}).then(function(){return pasta()}).then(function(){finish()})
/*
//callback hell
pizza(function () {
           salad(function () {
           pasta(function () {
            finish()
        })
    })
})
*/ 


/*
let person=function(name,gender,age,salary,)
{   
   this.name=name;
   this.gender=gender;
   this.age=age;
   this.salary=salary;
   this.welcome=function()
   {
       console.log("hello")

   }
   
}
person.prototype.welcome5=function()
{
    console.log("yes2")
}

person.prototype.friends=["omar","ali"]
let p1=new person("ahmed","famale",33,32000)
let p2=new person("ali","famale",31,31000)
let p3=new person("omar","famale",35,300000)
let p4=new person("mai","male",38,30000)

p1.friends.push("syed")
console.log(p2.friends)*/

/*class Person1
{
    constructor(name,gender ,age, salary)
    {
     this.name=name;
     this.gender=gender;
     this.age=age;
     this.salary=salary;
    }
    welcome()
     {
         console.log('hello')
     }
}
let pr=new Person1("omar","famel",33,5000)
console.log(pr)

pr.welcome()
class Doctor  extends Person1   

{
    constructor(name,gender ,age, salary,uni,medical)
    {
         super(name,gender ,age, salary)
         this.uni=uni;
         this.medical=medical;
    }
    
}

   let pt=new Doctor("ali","femal",35,2000,"cairo","Hospital Grop")

   console.log(pt)
pt.welcome()


function we(userNAME)
{
console.log(`hello${userNAME}`)
}

we('omAR')

*/

