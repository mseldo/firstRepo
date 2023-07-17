let offer = "none";
let time = 1200;

const cafe = {
    name: "whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: false,
    drinks: [
        "Cappacino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
    ],

    breakfastOffer: "Free crossiant with coffee",
    lunchOffer: "Free drink with suprisingly priced sandwich",
    noOffer: "Sorry no offer",

    openCafe: ()=>{
        if(this.hasSpecialOffers == true){
            return "Come on in";
        }else{
            return "later";
        }
            
    },
    closeCafe:()=>{
        return "We are closed, come back tommorow!"
    }

    
};

console.log(cafe.openCafe());
//console.log(cafe.closeCafe());

if (time < 1100){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} else if (time < 1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
}else{
    offer = cafe.noOffer;
}
console.log(offer);