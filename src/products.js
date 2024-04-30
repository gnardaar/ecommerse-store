import laptop from './assets/laptop.png'
import phoneCase from './assets/phoneCase.png'
import smartphone from './assets/smartPhone.png'
import tablet from './assets/tablet.png'
import tv from './assets/tv.png'
import headphones from './assets/headphones.png'
import camera from './assets/camera.png'
import speakers from './assets/speakers.png'



export const PRODUCTS = [
    {
        id: 1,
        name: "Laptop",
        description: "This is a laptop.",
        category: "Electronics",
        price: 2000.9,
        productImage:laptop
    },
    {
        id: 2,
        name: "Smartphone",
        description: "This is a smartphone.",
        category: "Communication",
        price: 1500.76,
        productImage:smartphone
    
    },
    {
        id: 3,
        name: "Tablet",
        description: "This is a tablet.",
        category: "Entertainment",
        price: 800.45,
        productImage:tablet
    },
    {
        id: 4,
        name: "Headphones",
        description: "These are headphones.",
        category: "Audio",
        price: 100.99,
        productImage:headphones
    },
    
    {
        id:5,
        name:"TV",
        description: "This is a TV.",
        category: "Home Appliances",
        price: 1500.99,
        productImage:tv
    } ,  
    {
        id: 6,
        name: "Speakers",
        description: "These are speakers.",
        category: "Audio",
        price: 300.99,
        productImage:speakers

    },
    {
        id:7,
        name: "Camera",
        description: "It's a camera!",
        category: "Photography",
        price: 200.99,
        productImage:camera
    },
    {
        id:8,
        name: "Phone Case",
        description: "Protect your phone with this case.",
        category: "Smartphone Accessories",
        price: 15.99,
        productImage:phoneCase
    }
]