
// src/services/hotService.js

const API_URL = 'https://burger-be-production.up.railway.app/get-burgers';

class HotService {
  // In the future, this will use fetch(API_URL) and parse the response
  async getHotItems() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.burgers || [];
    } catch (error) {
      console.error('Failed to fetch burgers:', error);
      return [];
    }
  }
}

export const hotService = new HotService();
