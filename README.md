# REMWaste Code Challenge (React + Vite)

This is a React-based web application that allows users to browse and select various skip sizes available in the Lowestoft area. It fetches data from an external API and displays it in a responsive, interactive grid of cards with engaging UI animations.

## Features

- 🔄 **Live API Fetch**: Retrieves skip size data from the WeWantWaste API.
- 💾 **Local Storage Caching**: Caches API response in localStorage to avoid repeated fetches and preserve data if the page is reloaded or closed accidentally.
- 🖼️ **Image Backgrounds**: Each card shows a skip size with an image background, conditionally loaded based on item ID.
- 🎨 **Hover Animation**: On larger screens, detailed information slides in from the left with a dark overlay when the user hovers on a card.
- 📱 **Mobile Responsive**:
  - Adjusts layout for mobile, tablet, and desktop views.
  - Adds a paragraph of instruction text visible only on mobile devices.
  - On mobile, tapping a card reveals details instead of using hover.

## Tech Stack

- **React** (Functional Components + Hooks)
- **Tailwind CSS** for styling and responsive design
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

## Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/skip-selector-app.git
   cd skip-selector-app
   ```

2. Install dependancies

```npm install
or
  yarn install
```

3. Start the development server:

```npm run dev
or
  yarn dev
```

4. Open `http://localhost:5173` (or your configured port) in your browser.
   src/
   ├── components/
   │ └── Card.jsx # Main skip listing component
   ├── App.jsx # Main app entry
   ├── main.jsx # React DOM entry
   public/
   ├── index.html # HTML template

## License

This project is licensed under the MIT License

## Author

Developed Mishael Matende
