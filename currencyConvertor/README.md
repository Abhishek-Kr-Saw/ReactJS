Currency Converter App

This is a simple currency converter web application built using React, Vite, and Tailwind CSS. It allows users to convert from one currency to another using real-time exchange rates from ExchangeRate-API.

Features:
- Convert between any two currencies
- Live exchange rates using ExchangeRate-API
- Swap functionality to switch 'from' and 'to' currencies
- Clean user interface with light transparency and blur effects
- Built using modern tools: React, Tailwind CSS, and Vite

How to Use:
1. Enter the amount you want to convert.
2. Select the "From" currency.
3. Select the "To" currency.
4. Click "Convert" to see the result.
5. Use the "Swap" button to switch currencies easily.

Installation:
1. Make sure Node.js is installed on your system.
2. Clone the repository:
   git clone https://github.com/your-username/currency-converter.git
3. Navigate into the project folder:
   cd currency-converter
4. Install dependencies:
   npm install
5. Create a .env file and add your API key:
   VITE_EXCHANGE_API_KEY=your_api_key_here
6. Start the development server:
   npm run dev

Folder Structure:
- components/        - Reusable UI components (e.g., InputBox)
- hooks/             - Custom hooks (e.g., useCurrencyInfo.js)
- App.jsx            - Main component logic
- index.css          - Tailwind CSS styling

API:
- This app uses ExchangeRate-API (https://www.exchangerate-api.com/)
- You need to sign up and get a free API key

Credits:
- ExchangeRate-API for providing currency data
- Pexels.com for background image


