class Pizza{
    constructor(size,type,crust)
    {
        this.size=size;
        this.type=type;
        this.crust=crust;
        this.toppings=[];
    }
    settoppings(toppings)
    {
        this.toppings.push(toppings);
    }
    gettoppings()
    {
        return this.toppings;
    }
    bake()
    {
        return `Baking a ${this.size} ${this.type} ${this.crust} with ${this.toppings} crust pizza`;
    }
}
const obj=new Pizza("small","Margerita","Original");
obj.settoppings("Extra Cheese");
obj.settoppings("Mushroom");
console.log(obj.gettoppings());
console.log(obj.bake());

class A{
    name="Akash";
    #lastname="Kannan";
    constructor(age)
    {
       this.age=age;
    }
    getM()
    {
        return this.name;
    }
    setM(name,age,lastname){
        this.name=name;
        this.age=age;
    }
   display()
   {
    return `My name and age is ${this.name} ${this.#lastname},${this.age} `
   }
}
const obj2=new A(21);
obj2.setM("Santhosh",24,"T G");
console.log(obj2.getM());
console.log(obj2.display());
