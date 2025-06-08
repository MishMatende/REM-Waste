# REMWaste Code Challenge (React + Vite)

This project is a responsive React component designed to visually showcase different skip sizes available for hire. The component fetches skip data from a real API and renders it in a card-based layout with rich UI/UX features.

## 🎯 Objective

To create an intuitive and mobile-responsive interface for users to choose a skip size that fits their needs. The design should balance aesthetics, usability, and performance while maintaining accessibility across devices.

---

## 🧠 Design Approach

### 📱 Mobile-First Philosophy

- The layout is designed with **mobile users in mind first**, then scales gracefully to tablets and desktops.
- A **tap-to-reveal** pattern is used on mobile so users can easily view skip details without hovering (which isn’t available on touch devices).
- Conditional rendering is used to show instructions for mobile users only.

### 🖼️ Card-Based Layout

- Each skip size is rendered as a **card** with a background image that either matches the skip ID or falls back to a default image.
- On **desktop**, skip details (size, hire period, price) appear with a **smooth left-slide overlay** when hovered.
- On **mobile**, the overlay toggles on **tap**, mimicking hover interaction without interfering with usability.

### 🧠 State & Storage Strategy

- The component uses `useState` and `useEffect` to fetch and store data.
- Skip data is cached in `localStorage` to improve **performance and resilience** (e.g. in case the page is accidentally closed or refreshed).
- A state variable `toggledCardId` is used to track which card is currently expanded on mobile.

---

## 🚀 Features

- 🔄 **Live API Fetch**: Retrieves skip size data from the WeWantWaste API.
- 💾 **Local Storage Caching**: Caches API response in localStorage to avoid repeated fetches and preserve data if the page is reloaded or closed accidentally.
- 🖼️ **Image Backgrounds**: Each card shows a skip size with an image background, conditionally loaded based on item ID.
- 🎨 **Hover Animation**: On larger screens, detailed information slides in from the left with a dark overlay when the user hovers on a card.
- 📱 **Mobile Responsive**:
  - Adjusts layout for mobile, tablet, and desktop views.
  - Adds a paragraph of instruction text visible only on mobile devices.
  - On mobile, tapping a card reveals details instead of using hover.S

---

## 🛠️ Technologies Used

- **React** (functional components & hooks)
- **Tailwind CSS** for styling and responsive design
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **REST API** (via `fetch`)
- **LocalStorage API**

---

### Prerequisites

- Node.js >= 14
- npm or yarn

## 📌 Future Enhancements

- Add click-through links to detailed skip pages
- Include filtering or sorting options
- Lazy-load images for performance optimization
- Add loading skeletons or error states

---

## 💡 Why This Design?

I chose this design for a few key reasons:

1. **Visual Clarity**: Images help users quickly associate skip sizes with their physical footprint.
2. **User Experience**: Sliding overlays with clear details create an interactive, engaging experience.
3. **Accessibility**: The design accounts for both desktop and touch interactions.
4. **Performance**: Storing API results in localStorage avoids redundant network requests.

---

## 📝 License

This project is open source and free to use for educational or commercial purposes.

## Author

Developed Mishael Matende
