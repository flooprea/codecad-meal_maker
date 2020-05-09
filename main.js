//create menu object
let menu = {
    _courses : {
        appetizers : [],
        mains : [],
        desserts : []      
    },

    get courses(){
        return {
             appetizers : this.appetizers,
             mains : this.mains,
             desserts : this.desserts
        }
    },

    //method to add dishes to the corses property
    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {
            name : dishName,
            price : dishPrice
        }
        let name = courseName;
        this._courses[courseName].push(dish);
    },

    //method to return a random dish from each course
    getRandomDishFromCourse(courseName){
        let dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random()* dishes.length)];
    },

    //method to return a string containing one of each course and the total price or the meal
    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let desserts = this.getRandomDishFromCourse('desserts');

        let totalPrice = appetizer.price + main.price + desserts.price;
        return "Menu: " + appetizer.name + ", " + main.name + ", " + desserts.name + ". Total: " + totalPrice;
    }
   
}

//add dishes to courses
menu.addDishToCourse('appetizers', 'salad' , 5);
menu.addDishToCourse('appetizers', 'olives' , 3);
menu.addDishToCourse('appetizers', 'chese' , 4);
menu.addDishToCourse('mains', 'steak', 10);
menu.addDishToCourse('mains', 'crispy strips', 9);
menu.addDishToCourse('mains', 'burger', 8);
menu.addDishToCourse('desserts', 'lava cake', 2);
menu.addDishToCourse('desserts', 'tiramisu', 3);
menu.addDishToCourse('desserts', 'fruit', 1);

//print the result on the index.html document
document.getElementById('output').innerHTML = menu.generateRandomMeal();
