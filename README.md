# 🍔 Burger Shop Web App

An interactive burger shop web application built with React, Vite, and Tailwind CSS. Users can browse hot burgers, add items to cart, mark favorites, and view prices in EUR and CZK.

## Features

- Browse hot burger items with images and details
- Add burgers to cart and view cart summary
- Mark burgers as favorites (persisted in local storage)
- Dynamic price conversion (EUR to CZK)
- Responsive design for desktop and mobile
- Modern UI with Tailwind CSS

## Screenshots

_Add screenshots here if available_

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
	```sh
	git clone https://github.com/allzaitseva/Burger.git
	cd Burger
	```
2. Install dependencies:
	```sh
	npm install
	# or
	yarn install
	```

### Running the App

Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/components/` — React components (Hot, Navbar, Footer, AddToCart, etc.)
- `src/pages/` — Page components (HomePage, MenuPage, OutletsPage)
- `src/services/` — API service modules
- `src/utils/` — Utility functions (localStorage helpers)
- `public/` — Static assets (images, SVGs)

## Tech Stack

- React
- Vite
- Tailwind CSS
- Redux Toolkit (for cart and currency state)
- ESLint & PostCSS

## API

- Hot burger images and data are fetched from a backend (see `hotService.js`)
- Currency rates fetched from an external API (see `ratesApi.js`)

## Credits

- Developed by [allzaitseva](https://github.com/allzaitseva)
- Images and assets: see `public/` folder

## License

MIT