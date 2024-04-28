document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var username = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var storedData = localStorage.getItem("registerdata");
  var userData = storedData ? JSON.parse(storedData) : [];
  console.log(username)
  console.log(storedData)
  var isEmailRegistered = userData.some(function(item) {
    console.log(storedData)
    return item.email === username;
  });

  if (isEmailRegistered) {
    document.getElementById("success").style.display = "block";
    console.log(storedData)
    log();
     
}
  else{
    document.getElementById("message").style.display = "block";
    return; 
  }

  
  document.getElementById("loginForm").reset();

  
});
let wrap=document.querySelector(".adding");
let container=JSON.parse(localStorage.getItem("data")) || [];
let arr=[
 
  {
    id:1,
    img:"41WUb2JBGqL.jpg",
    name:"Featured Product",
    price:15,
    price2:20,
  },
  {
    id:2,
    img:"81gv-D-LqhL._AC_UF1000,1000_QL80_.jpg",
    name:"Featured Product",
    price:24.5,
    price2:30.9,
  },
  {
    id:3,
    img:"{304986AE-7F21-47D3-A90A-2EAF7CC27A80}Img400.jpg",
    name:"Featured Product",
    price:17.6,
    price2:23.5,
  },
  {
    id:4,
    img:"71FEZm-lISL._AC_UL600_SR600,600_.jpg",
    name:"Featured Product",
    price:30.3,
    price:35.2,
  },
  {
    id:5,
    img:"c125623944946effb58043b7f6d2e96b.jpeg",
    name:"Featured Product",
    price:16.4,
    price2:25.6,
  },
  {
    id:6,
    img:"dune-the-graphic-novel-book-1-dune.jpg",
    name:"Featured Product",
    price:20.5,
    price2:26.7,
  }
]
let fun=()=>{
  return (wrap.innerHTML=arr.map((x)=>
{
  let{id,img,name,price}=x;
  let search=container.find((x)=>x.id===id) || [];
  return `
  <div class="swiper-slide box">
                <div class="icons">
                    <a href="" class="fas fa-search"></a>
                    <a href="" class="fas fa-heart"></a>
                    <a href="" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src=${img}>
                </div>
                <div class="content">
                    <h3>${name}</h3>
                    <div class="price">$ ${price}<span>$ ${price}</span></div>
                    <button onclick="pushingitems(${id})" class="add btn">add to cart</button>
                </div>
            </div>
  ` 
}))
};
fun();

let pushingitems=(id)=>{
  
  let u=id;
  let search=container.find((x)=>x.id===u)
  if(search===undefined)
  {
    container.push(
      {
        id:u,
        item:1,
      }
    );
  }
  else{
     search.item+=1;
  }
  localStorage.setItem("data",JSON.stringify(container));
}

let log=()=>{
  let loginForm=document.querySelector(".login-form-container");
  document.querySelector("#close").onclick=()=>{
    loginForm.classList.remove('active');
    console.log("loggedin")
}
searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}
let loginForm=document.querySelector(".login-form-container");
document.querySelector("#login").onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector("#close").onclick=()=>{
    loginForm.classList.toggle('active');
}
let a=document.querySelector(".add");
function add(event){
  event.ta
}










window.onscroll=()=>
{
    searchForm.classList.remove('active');
    if(window.scrollY>80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
   
}
function loader()
{
  document.querySelector(".loader").classList.add('active');
}
function fadeout()
{
  setTimeout(loader,3000);
}
window.onload=()=>
{
    
    if(window.scrollY>80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadeout();
}
var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  var swiper = new Swiper(".arrival-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
