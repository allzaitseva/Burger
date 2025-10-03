const API_URL = 'https://burger-be-production.up.railway.app/get-burgers';

class HotService {

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

