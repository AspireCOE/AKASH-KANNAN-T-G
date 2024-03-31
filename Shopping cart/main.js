let r=document.getElementById("navbar");
let shop=document.getElementById("shop");
let container=JSON.parse(localStorage.getItem("data")) || [];
let arr=[
    {
        id:1,
        img:"image/s1.jpg",
        name:"Casual Shirt",
        price:45,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ducimus!"
    },
    {
        id:2,
        img:"image/officeshirt.jpg",
        name:"Office Shirt",
        price:50,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ducimus!"
    },
    {
        id:3,
        img:"image/tshirt.jpg",
        name:"T Shirt",
        price:25,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ducimus!"
    },
    {
        id:4,
        img:"image/suit.jpg",
        name:"Men's Suit",
        price:100,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ducimus!"
    }
]
let fun=()=>{
  return (shop.innerHTML=arr.map((x)=>
  {
    let{id,img,name,price,desc}=x;
    let search=container.find((x)=>x.id===id) || [];
    return `<div id=product-id-${id} class="item">
    <img width="220" src="${img}">
    <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quan">
            <h2>$ ${price}</h2>
            <div class="button">
                <i onclick="decrement(${id})" class="bi bi-dash"></i>
                <div id=${id} class="quan">${search.item===undefined? 0:search.item}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>
  </div>`
  }).join(""));
};
fun();
let increment=(id)=>{
    let u=id;
     let search=container.find((x)=>
       x.id===u);
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
        search.item += 1;
     }
     update(id);
     console.log(container);
     localStorage.setItem("data",JSON.stringify(container));
}
let decrement=(id)=>{
    let u=id;
    let search=container.find((x)=>
      x.id===u);
      if(search==undefined) return;
   else if(search.item===0)
     return;
    else{
       search.item -= 1;
    }
    update(id);
    container=container.filter((x)=>x.item!==0)
    console.log(container);
    localStorage.setItem("data",JSON.stringify(container));
}
let update=(id)=>{
   let search=container.find((x)=>x.id===id)
   document.getElementById(id).innerHTML=search.item;
   calc();
}
let calc=()=>{
    let total=container.map((x)=>x.item).reduce((x,y)=>x+y,0);
    document.getElementById("one").innerHTML=total;
}
calc();