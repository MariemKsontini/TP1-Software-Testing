import { describe, it, expect } from 'vitest';
import { fetchRandomUser } from '../fetchRandomUser';

describe('fetchRandomUser()', () => {
  it('should fetch data from the server and return user data', async () => {
    try {
      const user = await fetchRandomUser();
      expect(user).toBeDefined();
      expect(user).toHaveProperty('gender');  
      expect(user).toHaveProperty('email');  
    } catch (error) {
      fail('Should not throw any error');
    }
  });
});
