# Property Visualizer

Property Visualizer is a modern React web app for exploring real estate towers, floors, and units interactively and visually. Users can browse towers, drill down to see available floors, and view detailed information about each unit, including images, prices, and amenities. The app is designed to make property discovery easy and engaging.

## Features

- **Browse Towers:** See all available towers with images and quick details.
- **View Floors:** Click a tower to view only its floors, with images that reflect floor type (e.g., premium, standard).
- **Explore Units:** Click a floor to see all units on that floor, with price, size, and availability.
- **Unit Details:** Click a unit to view full details, including images, features, and pricing.
- **Smart Navigation:** Uses URL parameters so you can refresh or share links to any tower, floor, or unit.
- **Responsive Design:** Works well on desktop and mobile.

## Tools & Libraries Used

- **React** (with hooks and context)
- **React Router** for navigation and deep linking
- **Tailwind CSS** for styling
- **Local JSON** for data (easy to swap for an API later)
- **Local Images** for property photos

## Known Limitations & Tradeoffs

- **No Backend:** All data is loaded from a local JSON file. There’s no live database or user authentication.
- **Image Imports:** Local images must be imported and mapped in code; you can’t just put a path in the JSON.
- **No Edit/Add:** The app is for browsing only; you can’t add or edit towers, floors, or units from the UI.
- **Limited Filtering:** There’s no advanced search or filtering (e.g., by price or amenities).
- **Demo Data:** The app uses sample data and images; you’ll need to update these for real-world use.

## Demo

[Live Demo](https://propertyvisualizer-six.vercel.app/)

## Getting Started

1. Clone the repo.
2. Run `npm install`.
3. Run `npm start` and open [http://localhost:3000](http://localhost:3000).

---

**Enjoy exploring properties! If you have questions or want to extend the app, feel free to clone the project or contact me at https://obeespace.vercel.app/about

