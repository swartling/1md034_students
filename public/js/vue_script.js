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
    el: "wrapper",
    data: {food},
    created: function(){
        for(let burger of food){
            dish = new MenuItem(burger.name, burger.kcal, burger.lactose, burger.img)




}



    }


})

burgerMenu = new Vue({
    el: burgerMenu,
    data: {
        burgers: [basicBurger, veggieBurger, cheesyBurger, turkeyBurger, briocheBurger]
    }
})
