import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSlider } from './main-slider/main-slider';
import { TopMenu } from './top-menu/top-menu';
import { ProductCard } from './product-card/product-card';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainSlider, TopMenu, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title : string = 'ng_Test';
  std_name: string = 'Punleur';
  std_age : number = 25;
  std_Url : string = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';


  products = [
  {
    id: 1,
    name: "Remote Control Car",
    price: 39.99,
    qty: 80,
    image: "https://m.media-amazon.com/images/I/71c-9SYk3pL.jpg", 
    description: "High-speed RC car with rechargeable battery and LED lights."
  },
  {
    id: 2,
    name: "Building Blocks Set",
    price: 29.99,
    qty: 120,
    image: "https://m.media-amazon.com/images/I/81D9vyIHXbL.jpg",
    description: "100-piece colorful building block set for creative play."
  },
  {
    id: 3,
    name: "Stuffed Teddy Bear",
    price: 19.99,
    qty: 150,
    image: "https://m.media-amazon.com/images/I/91gbfULvW0L.jpg",
    description: "Soft plush teddy bear, 18 inches tall, safe for all ages."
  },
  {
    id: 4,
    name: "Toy Kitchen Set",
    price: 59.99,
    qty: 45,
    image: "https://m.media-amazon.com/images/I/614bAev2oiL.jpg",
    description: "Interactive play kitchen with utensils and pretend food."
  },
  {
    id: 5,
    name: "Action Figure Pack",
    price: 24.99,
    qty: 95,
    image: "https://m.media-amazon.com/images/I/81Mp2WJXmxL._UF894,1000_QL80_.jpg",
    description: "Superhero action figures, posable and durable."
  },
  {
    id: 6,
    name: "Wooden Train Set",
    price: 34.99,
    qty: 60,
    image: "https://m.media-amazon.com/images/I/81XsmUmi9HL.jpg",
    description: "Classic wooden train with tracks and bridges."
  },
  {
    id: 7,
    name: "Dollhouse with Furniture",
    price: 79.99,
    qty: 30,
    image: "https://m.media-amazon.com/images/I/71WQGP2ElsL.jpg",
    description: "Multi-story dollhouse with miniature furniture set."
  },
  {
    id: 8,
    name: "Educational Tablet Toy",
    price: 49.99,
    qty: 110,
    image: "https://m.media-amazon.com/images/I/71J8RDzgIyL.jpg",
    description: "Learning tablet with interactive games and songs."
  },
  {
    id: 9,
    name: "Robot Toy",
    price: 44.99,
    qty: 70,
    image: "https://m.media-amazon.com/images/I/61f3Th2i6lL.jpg",
    description: "Programmable toy robot with lights and voice features."
  },
  {
    id: 10,
    name: "Puzzle Set 100pcs",
    price: 14.99,
    qty: 200,
    image: "https://m.media-amazon.com/images/I/81scgkD5uCL._UF894,1000_QL80_.jpg",
    description: "Colorful animal puzzle set, 100 pieces."
  },
  {
    id: 11,
    name: "Bubble Machine",
    price: 22.99,
    qty: 85,
    image: "https://m.media-amazon.com/images/I/71VC6SkLI6L._UF894,1000_QL80_.jpg",
    description: "Automatic bubble maker for outdoor fun."
  },
  {
    id: 12,
    name: "Play Tent Castle",
    price: 38.99,
    qty: 50,
    image: "https://m.media-amazon.com/images/I/71luat2Ee7L.jpg",
    description: "Indoor princess play tent for toddlers and kids."
  },
  {
    id: 13,
    name: "Musical Toy Drum",
    price: 18.99,
    qty: 65,
    image: "https://m.media-amazon.com/images/I/71EIMV4jDFL._UF894,1000_QL80_.jpg",
    description: "Electronic toy drum set with sounds and lights."
  },
  {
    id: 14,
    name: "Toy Doctor Kit",
    price: 27.99,
    qty: 90,
    image: "https://m.media-amazon.com/images/I/71iZCEcbGFL.jpg",
    description: "Complete toy medical kit with stethoscope and tools."
  },
  {
    id: 15,
    name: "RC Helicopter",
    price: 59.99,
    qty: 40,
    image: "https://m.media-amazon.com/images/I/71K2ASj-1ML._UF1000,1000_QL80_.jpg",
    description: "Remote-controlled mini helicopter with gyro stabilization."
  },
  {
    id: 16,
    name: "Toy Tool Set",
    price: 23.99,
    qty: 100,
    image: "https://m.media-amazon.com/images/I/713xUqgxlNL.jpg",
    description: "Pretend play tool set with toolbox, drill, and wrench."
  },
  {
    id: 17,
    name: "Plush Animal Set",
    price: 32.99,
    qty: 130,
    image: "https://m.media-amazon.com/images/I/812E9pPGGNL._UF894,1000_QL80_.jpg",
    description: "Set of 5 soft animal plushies, perfect for cuddling."
  },
  {
    id: 18,
    name: "Race Track Set",
    price: 49.99,
    qty: 75,
    image: "https://m.media-amazon.com/images/I/81hXdfc5fyL.jpg",
    description: "DIY car racing track with loops and curves."
  },
  {
    id: 19,
    name: "LEGO Compatible Bricks",
    price: 25.99,
    qty: 140,
    image: "https://m.media-amazon.com/images/I/714sQpo-wFL._UF894,1000_QL80_.jpg",
    description: "Compatible building bricks with over 500 pieces."
  },
  {
    id: 20,
    name: "Toy Cash Register",
    price: 33.99,
    qty: 55,
    image: "https://m.media-amazon.com/images/I/81dj0depb+L.jpg",
    description: "Interactive cash register toy with scanner and play money."
  }
]


}
