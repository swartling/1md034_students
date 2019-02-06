function MenuItem(name, kcal, gluten, lactose, img){
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.img = img;
    this.allergies = function(){
        console.log(this.name + " gluten & lactose " + (this.gluten && this.lactose));
        if (this.gluten && this.lactose){
            return "Contains Gluten & Lactose"
        }
        else if (this.lactose){
            return "Contains Lactose"
        }
        else if (this.gluten){
            return "Contains Gluten"
        }
        else {
            return ""
        }
    }
    this.info = function() {

        return (name + "\n" + kcal + " kcal");
    }
}
/*
let basicBurger = new MenuItem("The Basic Burger", 700, true, false, "http://www.buenavistabocas.com/wp-content/uploads/2011/03/Basic-Burger-panama-restaurants-300x227.jpg");
let veggieBurger = new MenuItem("The Veggie Burger", 600, false, false, "https://howtofeedaloon.com/wp-content/uploads/2016/06/veggie-burger-gawker-2.jpg");
let cheesyBurger = new MenuItem("The Cheesy Burger", 1000, true, true, "https://media-cdn.tripadvisor.com/media/photo-s/0b/86/ac/0f/crafty-burger.jpg");
let turkeyBurger = new MenuItem("The Turkey Burger", 600, true, false, "https://foremangrillrecipes.com/wp-content/uploads/2013/05/turkey-burger-foreman-grill.jpg");
let briocheBurger = new MenuItem("The Brioche Burger", 800, true, false, "https://s.hdnux.com/photos/34/42/22/7480507/3/920x920.jpg");
let bajsMackan = new MenuItem("Bajsmackan", 300, false, false, "https://image.shutterstock.com/z/stock-photo-a-shit-burger-fast-food-is-a-garbage-concept-unpleasant-food-212949169.jpg");


let menuArray = [basicBurger, veggieBurger, cheesyBurger, turkeyBurger, basicBurger, bajsMackan];


*/

function createBurgers() {
    let burgers = [];
    for (let thing of food) {
        let burger = new MenuItem(thing.name, thing.kcal, thing.gluten, thing.lactose, thing.img)
        burgers.push(burger);
    }
    return burgers;
}


function updateBurger() {
    let el = document.getElementById("grid");
    console.log(el);
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }

    for (let burger of menuArray) {
        let box = document.createElement("div");
        box.setAttribute("class", "box");

        let title = document.createElement("h3");
        title.innerText = burger.name;
        box.appendChild(title);

        let img = document.createElement("img");
        img.setAttribute('src', burger.img);
        img.setAttribute("height", "200");
        img.setAttribute("width", "200");
        box.appendChild(img);

        let allergy = document.createElement("div");
        allergy.innerText = burger.allergies();
        box.appendChild(allergy);

        el.appendChild(box);
    }
}

let menuArray = createBurgers();
updateBurger();