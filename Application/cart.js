 container=JSON.parse(localStorage.getItem("data")) || [];
let label=document.getElementById("label");
let shoppingcart=document.getElementById("shopping-cart");
arr=[
 
    {
      id:1,
      img:"41WUb2JBGqL.jpg",
      name:"Featured Product",
      price:15,
    },
    {
      id:2,
      img:"81gv-D-LqhL._AC_UF1000,1000_QL80_.jpg",
      name:"Featured Product",
      price:15,
    },
    {
      id:3,
      img:"{304986AE-7F21-47D3-A90A-2EAF7CC27A80}Img400.jpg",
      name:"Featured Product",
      price:15,
    },
    {
      id:4,
      img:"71FEZm-lISL._AC_UL600_SR600,600_.jpg",
      name:"Featured Product",
      price:15,
    },
    {
      id:5,
      img:"c125623944946effb58043b7f6d2e96b.jpeg",
      name:"Featured Product",
      price:15,
    },
    {
      id:6,
      img:"dune-the-graphic-novel-book-1-dune.jpg",
      name:"Featured Product",
      price:15,
    }
  ]
let cartItems=()=>{
    if(container.length!==0)
    {
        return (shoppingcart.innerHTML=
            container.map((x)=>{
                console.log(x);
                let {id,item}=x;
                let search=arr.find((y)=>y.id===id) || [];
                return `
                <div class="cartitem">
                <img width="200" heigth="50px" src="${search.img}">
                <div class="details">

                  <div class="title-price-x">
                      <h4 class="title-price">
                    
                      <p class="cart-item-price">$ ${search.price}</p>
                      </h4>
                      <i onclick="remove(${id}) "class="bi bi-x-lg"></i>
                  </div>

                    <div class="button">
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id=${id} class="quan">${item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
                <h3 id="three">$ ${item*search.price}</h3>
                </div>
                </div>
                `;
            }).join("")
            )
        
    }
    else{
        shoppingcart.innerHTML=``;
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class="two">Back to Home</button>
        </a>
        `;
    }
};
cartItems();
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
     cartItems();
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
    cartItems();
    localStorage.setItem("data",JSON.stringify(container));
}
let update=(id)=>{
    let search=container.find((x)=>x.id===id)
    document.getElementById(id).innerHTML=search.item;
    total();
 }
 let remove=(id)=>
 {
     container=container.filter((x)=>x.id!==id);
     cartItems();
     total();
     localStorage.setItem("data",JSON.stringify(container));
     
 }
 let total=()=>
 {
    if(container.length!==0)
    {
       let amount=container.map((x)=>
       {
        let {id,item}=x;
        let search=arr.find((y)=>y.id===id) || [];
         return search.price*item;

       }).reduce((x,y)=>x+y,0);
       label.innerHTML=`<h2> Total Bill :
       $ ${amount}</h2>
       <button onclick=""class="checkout">Checkout</button>
       <button onclick="clearAll()" class="clearall">Clear Cart</button>
       `;
    }
    else return;
 }
 total();
 let clearAll=()=>{
    container=[];
    cartItems();
    localStorage.setItem("data",JSON.stringify(container));
 }