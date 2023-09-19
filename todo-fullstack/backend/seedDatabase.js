require('dotenv').config();

const mongoose = require('mongoose');
const faker = require('faker');
const Product = require('./models/Product'); 

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



async function seedProducts() {

    await Product.deleteMany({});

    const products = Array.from({ length: 10 }).map(() => ({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        price: parseFloat(faker.commerce.price())
    }));

    try {        
        await Product.insertMany(products);
        console.log('Products seeded successfully');
    } catch (error) {
        console.error('Error seeding products:', error);
    } finally {

        mongoose.connection.close();
    }
}

seedProducts();  
