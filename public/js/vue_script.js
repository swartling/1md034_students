

function MenuItem(name, kcal, gluten, lactose, img){
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.img = img;
    this.allergies = function(){
        if(this.gluten && this.lactose){
            return "Contains Gluten, Lactose"
        }
        else if (this.gluten){
            return "Contains Gluten"
        }
        else if (this.lactose){
            return "Contains Lactose"
        }
    }
    this.info = function() {

        return (name + "\n" + kcal + " kcal");
    }
}
/*
let basicBurger = new MenuItem("The Basic Burger", 700, true, false);
let veggieBurger = new MenuItem("The Veggie Burger", 600, false, false);
let cheesyBurger = new MenuItem("The Cheesy Burger", 1000, true, true);
let turkeyBurger = new MenuItem("The Turkey Burger", 600, true, false);
let briocheBurger = new MenuItem("The Brioche Burger", 800, true, false);
*/
new Vue({
    el: "#grid",
    data: {food},
    created: function(){
        let menuArray = [];
        for(let burger of food) {
            let dish = new MenuItem(burger.name, burger.kcal, burger.lactose, burger.img)
            menuArray.push(dish);
        }
        let el = document.getElementById("grid");

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
            img.src = burger.img;
            img.setAttribute("height", "200");
            img.setAttribute("width", "200");
            box.appendChild(img);

            let allergy = document.createElement("div");
            allergy.innerText = burger.allergies();
            box.appendChild(allergy);

            let checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            box.appendChild(checkBox);

            el.appendChild(box);
        }
    }
})

new Vue({
    el: "#info",
    data: {
        name: "Name: " + document.getElementById("name").value,
        email: "Email: " + document.getElementById("email").value,
        street: "Street: " + document.getElementById("street").value,
        house: "House: " + document.getElementById("house").value,
        payment: "Payment: " + document.getElementById("payment").value,
        gender: "Gender: " + getGender(),
        orders: getOrders()
    }
})

function getGender(){
    let gender;
    let r1 = document.getElementById("r1");
    let r2 = document.getElementById("r2");
    let r3 = document.getElementById("r3");

    if(r1.checked){
        gender = r1;
    }
    else if(r2.checked){
        gender = r2;
    }
    else {
        gender = r3;
    }
    return gender.value;
}

function getOrders() {
    let string = "";
    for(let child of document.getElementById("grid").children){
        if(child.lastChild.checked){
            string = string + child.firstChild.innerText + " ordered \n";
        }
    }
return string;
}

function pressButton(){
    pressed = true;
}
/*
var button = new Vue({
    el: "#order",
    data: {pressed: false}
})

let pressed = false;

let orderButton = document.getElementById("order";
orderButton.addEventListener("click", pressButton);
*/