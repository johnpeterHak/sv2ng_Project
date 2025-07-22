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


  products: any = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Earbuds",
      "price": 59.99,
      "qty": 100,
      "image": "https://picsum.photos/id/1080/300/200",
      "description": "Crystal-clear sound with 20-hour battery life and sweat resistance."
    },
    {
      "id": 2,
      "name": "Smartphone 128GB",
      "price": 699.99,
      "qty": 50,
      "image": "https://picsum.photos/id/160/300/200",
      "description": "6.5\" AMOLED display, triple-camera system, and 5G connectivity."
    },
    {
      "id": 3,
      "name": "Laptop 15.6\" FHD",
      "price": 899.99,
      "qty": 30,
      "image": "https://picsum.photos/id/119/300/200",
      "description": "Powerful Intel Core i7 processor, 16GB RAM, and 512GB SSD."
    },
    {
      "id": 4,
      "name": "Smart Watch",
      "price": 199.99,
      "qty": 75,
      "image": "https://picsum.photos/id/175/300/200",
      "description": "Track heart rate, workouts, and notifications with 7-day battery."
    },
    {
      "id": 5,
      "name": "Wireless Keyboard",
      "price": 49.99,
      "qty": 120,
      "image": "https://picsum.photos/id/180/300/200",
      "description": "Slim design with quiet keys and 2-year battery life."
    },
    {
      "id": 6,
      "name": "Gaming Mouse",
      "price": 39.99,
      "qty": 90,
      "image": "https://picsum.photos/id/119/300/200",
      "description": "RGB lighting, 6 programmable buttons, and 10,000 DPI sensor."
    },
    {
      "id": 7,
      "name": "Portable Bluetooth Speaker",
      "price": 79.99,
      "qty": 60,
      "image": "https://picsum.photos/id/106/300/200",
      "description": "360° sound, waterproof, and 12-hour playtime."
    },
    {
      "id": 8,
      "name": "4K Ultra HD TV 55\"",
      "price": 599.99,
      "qty": 25,
      "image": "https://picsum.photos/id/157/300/200",
      "description": "HDR10+, smart TV with built-in Alexa and Dolby Atmos."
    },
    {
      "id": 9,
      "name": "Noise Cancelling Headphones",
      "price": 349.99,
      "qty": 40,
      "image": "https://picsum.photos/id/136/300/200",
      "description": "Industry-leading ANC, 30-hour battery, and touch controls."
    },
    {
      "id": 10,
      "name": "Fitness Tracker",
      "price": 79.99,
      "qty": 85,
      "image": "https://picsum.photos/id/163/300/200",
      "description": "Track steps, sleep, and SpO2 with color AMOLED display."
    },
    {
      "id": 11,
      "name": "External Hard Drive 1TB",
      "price": 59.99,
      "qty": 70,
      "image": "https://picsum.photos/id/119/300/200",
      "description": "USB 3.0, plug-and-play, compatible with PC and Mac."
    },
    {
      "id": 12,
      "name": "Wireless Charging Pad",
      "price": 29.99,
      "qty": 110,
      "image": "https://picsum.photos/id/160/300/200",
      "description": "Fast-charging Qi-certified pad for smartphones and earbuds."
    },
    {
      "id": 13,
      "name": "Stainless Steel Coffee Maker",
      "price": 129.99,
      "qty": 35,
      "image": "https://picsum.photos/id/225/300/200",
      "description": "12-cup programmable brewer with thermal carafe."
    },
    {
      "id": 14,
      "name": "Robot Vacuum Cleaner",
      "price": 299.99,
      "qty": 20,
      "image": "https://picsum.photos/id/1077/300/200",
      "description": "Self-charging, app-controlled, and works with Alexa."
    },
    {
      "id": 15,
      "name": "Air Fryer",
      "price": 89.99,
      "qty": 45,
      "image": "https://picsum.photos/id/24/300/200",
      "description": "5.8-quart capacity with 7 presets and 1700W power."
    },
    {
      "id": 16,
      "name": "Electric Toothbrush",
      "price": 49.99,
      "qty": 95,
      "image": "https://picsum.photos/id/203/300/200",
      "description": "3 brushing modes, 30-day battery, and pressure sensor."
    },
    {
      "id": 17,
      "name": "Digital Camera",
      "price": 449.99,
      "qty": 30,
      "image": "https://picsum.photos/id/250/300/200",
      "description": "24.2MP sensor, 4K video, and 3\" flip touchscreen."
    },
    {
      "id": 18,
      "name": "Electric Kettle",
      "price": 39.99,
      "qty": 65,
      "image": "https://picsum.photos/id/431/300/200",
      "description": "1.7L capacity, auto shut-off, and boil-dry protection."
    },
    {
      "id": 19,
      "name": "Blender",
      "price": 59.99,
      "qty": 50,
      "image": "https://picsum.photos/id/541/300/200",
      "description": "1000W motor, 6-speed control, and BPA-free jar."
    },
    {
      "id": 20,
      "name": "Smart Thermostat",
      "price": 199.99,
      "qty": 40,
      "image": "https://picsum.photos/id/628/300/200",
      "description": "Learns your schedule and saves energy with geofencing."
    }
  ]
}
