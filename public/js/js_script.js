function MenuItem(name, kcal, gluten, lactose, img){
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.img = img;
    this.allergies = function(){
        if(this.gluten && this.lactose){
            return "contains Gluten, Lactose"
        }
        else if (this.gluten){
            return "contains Gluten"
        }
        else if (this.lactose){
            return "contains Lactose"
        }
    }
    this.info = function() {

        return (name + "\n" + kcal + " kcal");
    }
}