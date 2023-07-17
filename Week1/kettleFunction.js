let waterLevel = 2;

const Kettle = () => {
    if (waterLevel > 3){
        console.log("OK kettle is on");          
    } else {
        console.log("Please fill the kettle");       
    }
}

Kettle();