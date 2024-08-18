**Energy Australia - Playwright API Test**
Purpose:

This Playwright test script is designed to validate the structure of a specific API response. The primary goal is to ensure the response is an array of objects, each containing a 'bands' array, and optionally a 'name' property.

**Prerequisites:**

Node.js and npm (or yarn) installed
Playwright installed (npm install playwright)

**Setup:**

Clone this repository.
Install dependencies: npm install

Running the Test:

Install Playwright runner in visual studio code and click Green play button in test to execute

**Test Structure:**

The test script includes the following checks:

Verifies the response is an array.
Iterates through each object in the array.
Checks if the 'bands' property is an array.
Optionally checks if the 'name' property exists and is a string.
