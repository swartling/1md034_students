'use strict';
var socket = io();
new Vue({
    el: "#main",
    data: {
        food,
        nameV: "Name: " + document.getElementById("name").value,
        emailV: "Email: " + document.getElementById("email").value,
        paymentV: "Payment: " + document.getElementById("payment").value,
        genderV: getGender(),
        ordersV: getOrders(),

        pressed: false,

        orders: {}
    },
    methods: {
        updateValues: function() {
            this.nameV = "Name: " + document.getElementById("name").value;
            this.emailV = "Email: " + document.getElementById("email").value;
            this.streetV = "Street: " + document.getElementById("street").value;
            this.houseV = "House: " + document.getElementById("house").value;
            this.paymentV = "Payment: " + document.getElementById("payment").value;
            this.genderV = getGender();
            this.ordersV = getOrders();

            this.pressed = true;


        },

        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};
            socket.emit("addOrder", { orderId: this.getNext(),
                details: { x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y },
                orderItems: ["Beans", "Curry"]
            });
        }
    },

    created: function(){
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));

        let menuArray = [];
        for(let burger of food) {
            let dish = new MenuItem(burger.name ,burger.kcal, burger.gluten, burger.lactose, burger.img)
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
            console.log(burger);
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
});

/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */


/*
var vm = new Vue({
    el: '#dots',
    data: {
        orders: {},
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};
            socket.emit("addOrder", { orderId: this.getNext(),
                details: { x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y },
                orderItems: ["Beans", "Curry"]
            });
        }
    }
});

*/


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
    return "\n Gender: "+gender.value;
}

function getOrders() {
    let stringList = [];
    for(let child of document.getElementById("grid").children){
        if(child.lastChild.checked){
            let string =child.firstChild.innerText + " ordered \n";
            stringList.push(string);
        }
    }
return stringList;
}




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
        else {
            return ""
        }
    }
    this.info = function() {

        return (name + "\n" + kcal + " kcal");
    }
}
