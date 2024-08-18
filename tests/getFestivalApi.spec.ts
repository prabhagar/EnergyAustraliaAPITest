const { test, expect } = require('@playwright/test')



test('should validate get festival Api', async ({ request }) => {

   
   const getAPIResponse = await request.get('/codingtest/api/v1/festivals');

   console.log(await getAPIResponse.json());

   const data = await getAPIResponse.json();

   expect(getAPIResponse.ok()).toBeTruthy();
   expect(getAPIResponse.status()).toBe(200);


   // Ensure the response is an array
   expect(Array.isArray(data)).toBe(true);

   // Iterate over each object in the array
   data.forEach(item => {
      // Check if 'bands' is an array
      expect(Array.isArray(item.bands)).toBe(true);
      // Optional: Check if 'name' exists
      if (item.name) {
         expect(typeof item.name).toBe('string');
      }
   });

});