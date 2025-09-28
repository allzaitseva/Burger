
// src/services/hotService.js

const API_URL = '/api/hot'; // Replace with real BE URL later

const mockItems = [
  { id: 1, title: 'Classic Beef Supreme', price: '11.50', img: '/B1.png' },
  { id: 2, title: 'Smoky Bacon Tower', price: '12.20', img: '/B2.png' },
  { id: 3, title: 'Texas BBQ Beef', price: '12.80', img: '/B3.png' },
  { id: 4, title: 'Double Meat Monster', price: '13.50', img: '/B4.png' },
  { id: 5, title: 'Hot Chili Beef Blast', price: '12.00', img: '/b4.png' },
  { id: 6, title: 'Veg Chizy Burger', price: '9.50', img: '/b4.png' },
  { id: 7, title: 'Triple Cheese Melt', price: '11.20', img: '/b4.png' },
  { id: 8, title: 'Cheddar Crunch Burger', price: '10.80', img: '/b4.png' },
  { id: 9, title: 'Blue Cheese Deluxe', price: '12.40', img: '/b4.png' },
  { id: 10, title: 'Mozzarella Magic', price: '11.00', img: '/b4.png' },
  { id: 11, title: 'Swiss Alps Cheese Burger', price: '12.90', img: '/b4.png' },
  { id: 12, title: 'Green Delight Burger', price: '8.90', img: '/b4.png' },
  { id: 13, title: 'Spicy Bean Crunch', price: '9.20', img: '/b4.png' },
  { id: 14, title: 'Avocado Dream Burger', price: '9.80', img: '/b4.png' },
  { id: 15, title: 'Vegan BBQ Smoke', price: '10.50', img: '/b4.png' },
  { id: 16, title: 'Mediterranean Veggie Bite', price: '9.90', img: '/b4.png' },
];

class HotService {
  // In the future, this will use fetch(API_URL) and parse the response
  async getHotItems() {
    // Simulate network request and parsing
    await new Promise(res => setTimeout(res, 300));
    // Here you could parse/transform data if needed
    return mockItems;
  }
}

export const hotService = new HotService();
