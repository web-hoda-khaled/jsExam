
$(document).ready(function () {
   //select element
   let icon = $("#closeNav i")
   let navWidth = $("nav").outerWidth()
   let allDataForHome = []
   let allCat = []
   let userName = document.getElementById("userName")
   let userMail = document.getElementById("userMail")
   let userNumber = document.getElementById("userNumber")
   let userAge = document.getElementById("userAge")
   let userPass1 = document.getElementById("userPass1")
   let userPass2 = document.getElementById("userPass2")
   let check = document.getElementById("check")






//loading
   $(".loading").fadeOut(1000 , _ => {
      $("body").css("overflowY" ,"visible")
   })



//nav toggle
$("nav").animate({left:-navWidth},0)

   $("#closeNav").click(function(){
if($("nav").css("left") == "0px"){
   
   $(icon).addClass("fa-bars").removeClass("fa-xmark")
   $("nav").animate({left:-navWidth},500 ,function(){

      $("#item1").animate({paddingTop: "50px" , opacity:"0"} ,0 ,function(){
         $("#item2").animate({paddingTop: "50px" , opacity:"0"},0,function(){
            $("#item3").animate({paddingTop: "50px" , opacity:"0"} , 0 ,function(){
               $("#item4").animate({paddingTop: "50px" , opacity:"0"},0,function(){
                  $("#item5").animate({paddingTop: "50px" , opacity:"0"},0)
               })
            })
         })
      });

   })


}
else{
   $(icon).addClass("fa-xmark").removeClass("fa-bars")
   $("nav").animate({left:0},500  , function(){
      $("#item1").animate({paddingTop: "0px" , opacity:"1"} ,400 ,function(){
         $("#item2").animate({paddingTop: "0px" , opacity:"1"},350,function(){
            $("#item3").animate({paddingTop: "0px" , opacity:"1"} , 300 ,function(){
               $("#item4").animate({paddingTop: "0px" , opacity:"1"},250,function(){
                  $("#item5").animate({paddingTop: "0px" , opacity:"1"},200)
               })
            })
         })
      });
   })


}
   })




//apiToHomePage
async function apiToHomePage(){
   let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
   let finalRes  = await response.json()
   allDataForHome = finalRes.meals
   desplayForPage()
}

apiToHomePage()


function desplayForPage(){
   let html = ""

   for(let i = 0 ; i<allDataForHome.length ; i++ ){

      html += 
      ` <div class="col-lg-3 col-md-3">
            <figure class="figure bg-info  rounded-2 position-relative">
               <img class="w-100 rounded-2 " src=${allDataForHome[i].strMealThumb} alt="img"/>
                  <figcaption class="figure-caption position-absolute bg-white bg-opacity-75 rounded-2 h-100">
                     <div class="d-flex justify-content-start align-items-center h-100">
                        <h3 class="text-black">${allDataForHome[i].strMeal}</h3>
                     </div>
                  </figcaption>
            </figure>
         </div><!--./col-->
      `
   }

document.querySelector(".display").innerHTML = html


}



//api for serch by name
async function fetchDataForSearch(meal){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
   let finalRes  = await response.json()
   allDataForHome = finalRes.meals
   displaySerch()
}

//api for serch by first letter

async function fetchDataForSearchByFirtLetter(L){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${L}`)
   let finalRes  = await response.json()
   allDataForHome = finalRes.meals
   console.log(allDataForHome);
   displaySerch()
}


//api for serch category

async function fetchDataForcategory(){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
   let finalRes  = await response.json()
   allDataForHome = finalRes.categories
   console.log(allDataForHome);
   displayCategory()
}

//api for serch fillterCategory

async function fillterCategory(category){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
   let finalRes  = await response.json()
   allCat = finalRes.meals
   console.log(allCat);

}
fillterCategory("beef")






//api for serch fillteringredient

async function fillterIngredient(Ingredient){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`)
   let finalRes  = await response.json()
   allCat = finalRes.meals
   console.log(allCat);

}
fillterIngredient("chicken")




//api for serch fillterArea

async function fillterArea(Area){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
   let finalRes  = await response.json()
   allCat = finalRes.meals
   console.log(allCat);

}
fillterArea("Canadian")

//api for serch ingredient

async function ingredient(){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
   let finalRes  = await response.json()
   allDataForHome = finalRes.meals
   console.log(allDataForHome);
console.log(allDataForHome);
desplayIngreadient()
}



//api for area

async function getArea(){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
   let finalRes  = await response.json()
   allDataForHome = finalRes.meals
   console.log(allDataForHome);
   desplayArea()
}

//serch
$("#item1").click(function(){
   $("nav").animate({left:-navWidth},500)
   $(icon).addClass("fa-bars").removeClass("fa-xmark")
   $(".serch").fadeIn(500)
   $("header").fadeOut(0)
   $(".category").fadeOut(0)
   $(".Area").fadeOut(0)
   $(".content").fadeOut(0)
})

//serchBymeal
$("#serchByName").keyup(function(){
   let meal = $(this).val()
   
   fetchDataForSearch(meal.toLowerCase())

})


//serchByFirstLetter
$("#serchByFirstLetter").keyup(function(){
   let L = $(this).val()
   fetchDataForSearchByFirtLetter(L.toLowerCase())

})



//desplay serch  BY meal
function displaySerch(){
   let html = ""

   for(let i = 0 ; i<allDataForHome.length ; i++ ){

      html += 
      ` <div class="col-lg-3 col-md-3">
            <figure class="figure bg-info  rounded-2 position-relative">
               <img class="w-100 rounded-2 " src=${allDataForHome[i].strMealThumb} alt="img"/>
                  <figcaption class="figure-caption position-absolute bg-white bg-opacity-75 rounded-2 h-100">
                     <div class="d-flex justify-content-start align-items-center h-100">
                        <h3 class="text-black">${allDataForHome[i].strMeal}</h3>
                     </div>
                  </figcaption>
            </figure>
         </div><!--./col-->
      `
   }

document.querySelector(".displayBySerch").innerHTML = html


}



//category
$("#item2").click(function(){
   $("nav").animate({left:-navWidth},500)
   $(icon).addClass("fa-bars").removeClass("fa-xmark")
   $("header").fadeOut(0)
   $(".serch").fadeOut(0)
   $(".category").fadeIn(0)
   $(".filtercategory").fadeIn(0)
   $(".Area").fadeOut(0)
   $(".content").fadeOut(0)

   fetchDataForcategory()
})

//area
$("#item3").click(function(){
   $("nav").animate({left:-navWidth},500)
   $(icon).addClass("fa-bars").removeClass("fa-xmark")
   $("header").fadeOut(0)
   $(".serch").fadeOut(0)
   $(".category").fadeOut(0)
   $(".Area").fadeIn(0)
   $(".ingredient").fadeOut(0)
   $(".content").fadeOut(0)

   getArea()
})


//ingredient
$("#item4").click(function(){
   $("nav").animate({left:-navWidth},500)
   $(icon).addClass("fa-bars").removeClass("fa-xmark")
   $("header").fadeOut(0)
   $(".serch").fadeOut(0)
   $(".category").fadeOut(0)
   $(".Area").fadeOut(0)
   $(".ingredient").fadeIn(0)
   $(".content").fadeOut(0)

   ingredient()
})


//ingredient
$("#item5").click(function(){
   $("nav").animate({left:-navWidth},500)
   $(icon).addClass("fa-bars").removeClass("fa-xmark")
   $("header").fadeOut(0)
   $(".serch").fadeOut(0)
   $(".category").fadeOut(0)
   $(".Area").fadeOut(0)
   $(".content").fadeIn(0)
   $(".ingredient").fadeOut(0)
})



//desplay serch  BY category
function displayCategory(){
   let html = ""

   for(var i = 0 ; i<allDataForHome.length ; i++ ){
      
      html += 
      ` <div class="col-lg-3 col-md-3 categoryHeder">
            <figure class="figure rounded-2 categoryHeder position-relative">
               <img class="w-100 rounded-2 " src=${allDataForHome[i].strCategoryThumb} alt="img"/>
                  <figcaption class="figure-caption position-absolute bg-white bg-opacity-75 rounded-2 h-100">
                     <div  class="d-flex justify-content-center text-center flex-column align-items-center h-100">
                     <h3  class="text-black">${allDataForHome[i].strCategory}</h3>
                        <p class="text-black">${(allDataForHome[i].strCategoryDescription).substring(1,100)}</p>
                     </div>
                  </figcaption>
            </figure>
         </div><!--./col-->
      `
   }

   document.querySelector(".displayByCategory").innerHTML = html


}





//desplay desplayArea
function desplayArea(){
   let html = ""
   for(let i = 0 ; i<allDataForHome.length ; i++ ){

      html += 
      ` <div class="col-lg-3 col-md-3">
            <div id="fiterCategory"  class="figure text-center rounded-2 ">
                     <i class="fa-solid fa-city fa-4x text-danger"></i>
                     <h3 class="text-white">${allDataForHome[i].strArea}</h3>
            </div>
         </div><!--./col-->
      `
   }

document.querySelector(".displayArea").innerHTML = html
}







//desplay desplayIngreadient
function desplayIngreadient(){
   let html = ""
   for(let i = 0 ; i<20 ; i++ ){

      html += 
      ` <div class="col-lg-3 col-md-3">
            <figure id="fiterCategory"  class="figure text-center  rounded-2 position-relative">
            <i class="fa-solid fa-bowl-food fa-4x text-success"></i>
                     <h3 class="text-white">${allDataForHome[i].strIngredient}</h3>
                     <p class="text-white">${(allDataForHome[i].strDescription).substring(1,100)}</p>
            </figure>
         </div><!--./col-->
      `
   }

document.querySelector(".desplay-ingredient").innerHTML = html
}






//validName
function validName(){
   var regex = /^[a-z]{3,15}$/gi
   if( regex.test(userName.value) == true)
   {
         return true
   }
   else
   {
         return false
   }
   }
   
   //valid Mail
   function validMail(){
      var regex = /^[a-z]{3,15}[0-9]{0,5}@[a-z]{3,15}.com$/g
      if( regex.test(userMail.value) == true)
      {
         return true
      }
      else
      {
         return false
      }

      }
   
   //valid Pass
   function validPass1(){
      var regex = /^[a-z]{3,15}[0-9]{0,10}$/gi
      if( regex.test(userPass1.value) == true)
      {
         return true
      }
      else
      {
         return false
      }
   }



   //valid Pass
   function validPass2(){
      if( userPass2.value == userPass1.value)
      {
         return true
      }
      else
      {
         return false
      }
   }





  //valid validNumber
  function validNumber(){
   var regex = /^(010|011|012|015)[0-9]{8}$/g
   if(regex.test(userNumber.value) == true)
   {
      return true
   }
   else
   {
      return false
   }
}






  //valid validAge
  function validAge(){
   var regex = /^[1-9][0-9]?$|^100$/g
   if(regex.test(userAge.value) == true)
   {
      return true
   }
   else
   {
      return false
   }
}


// && validName == true &&  validNumber == true && validPass1 == true && validPass2 == true  &&  validName == true &&

function contact(){
   if (validNumber() == true && validMail() == true &&  validName() == true &&  validAge() == true&& validPass1() == true && validPass2() == true ) {
      document.getElementById("submit").removeAttribute("disabled")
      document.querySelector(".alert").style.display ="none"
   }
   else{
      document.querySelector(".alert").style.display ="block"

   }
}



check.addEventListener("click",contact)













})


















