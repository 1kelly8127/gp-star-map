# Kindness Galaxy ✨

A cosmic star map web app where every act of kindness, love, faith, and hope becomes a star in the universe.

## What It Does

The Kindness Galaxy is a simple, beautiful web app designed to celebrate and preserve acts of kindness. Users can submit stories of kindness, love, faith, or hope, and watch them become stars in a persistent galaxy.

**Current Features:**
- 📝 Simple form to submit acts with a category, optional name, and description
- ✨ Beautiful cosmic UI with glowing star cards and gradient backgrounds
- 💾 **Persistent storage—stars are saved and survive page refreshes**
- 🎨 Four category types (Kindness 💚, Love 💗, Faith ✨, Hope 🌟)
- 🌌 **Live "Saved Stars" section displaying all submitted stars below the form**
- ⏰ **Automatic timestamps (shows "Today", "Yesterday", or full date)**
- 👤 Optional name or anonymous submission
- 📱 Responsive design for mobile and desktop
- 🔒 Privacy-friendly—data stored locally in your browser
- 🎯 Beginner-friendly, no external dependencies

## How to Run It

### Option 1: GitHub Pages (Recommended) ⭐
This repository is already set up for GitHub Pages hosting.

1. **Access the Live App:**
   - Visit: `https://1kelly8127.github.io/gp-star-map`
   - Start adding stars immediately—no setup needed!

### Option 2: Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/1kelly8127/gp-star-map.git
   cd gp-star-map
   ```

2. Open `index.html` in your browser:
   - Simply double-click `index.html` or
   - Use a live server (e.g., VS Code Live Server extension)

3. Start submitting stars!

## How Data Is Stored

### Current: localStorage (Static-Site Friendly ✅)

All star data is saved in your browser's **localStorage** under the key `kindnessGalaxyStars`:

**Storage Format:**
```javascript
[
  {
    category: "kindness",
    name: "Kelly",
    description: "Helped an elderly neighbor with groceries",
    timestamp: "2026-04-10T15:20:00.000Z"
  },
  ...
]
```

**Pros:**
- ✅ No server needed
- ✅ Works offline
- ✅ Instant persistence
- ✅ Privacy—data never leaves your device
- ✅ Perfect for GitHub Pages static hosting

**Cons:**
- ❌ Data is device-specific (stored only in this browser)
- ❌ Data is deleted if browser cache is cleared
- ❌ Not shared across devices
- ❌ Cannot scale to multiple users

## End-to-End Flow (How It Works)

1. **User submits form** → Form submission is captured with `preventDefault()`
2. **Validation** → Ensures description is not empty
3. **Data collection** → Gathers category, name, description
4. **Timestamp** → Adds automatic ISO timestamp
5. **Save to localStorage** → Stores as JSON array under `kindnessGalaxyStars`
6. **Success alert** → Shows "Star saved!" confirmation
7. **Form reset** → Clears all input fields
8. **Display update** → Re-renders the Saved Stars section with new star
9. **Persistence** → Data remains even after browser refresh

## Key Files

- **`index.html`** — Form inputs with stable IDs (category, name, description, submitBtn, savedStars)
- **`app.js`** — All JavaScript logic: form handling, localStorage management, star display
- **`styles.css`** — Cosmic theme styling with responsive design
- **`README.md`** — This file

## Technical Stack

- **Frontend:** Pure HTML, CSS, and JavaScript (no frameworks)
- **Storage:** localStorage (easily upgradeable to Firebase Firestore)
- **Hosting:** GitHub Pages (free, instant deployment)
- **Design:** Cosmic/spiritual theme with accessibility
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

## Future Upgrade Path: Firebase Firestore ☁️

When ready to scale this app to a cloud database for shared, collaborative kindness tracking:

### Why Firebase?
- Real-time synchronization across devices
- Cloud backup of all stars
- Multi-user shared galleries
- User authentication (optional)
- Scalable to thousands of submissions

### Migration Strategy:

1. **Keep the same HTML structure** - IDs match: category, name, description, submitBtn, savedStars
2. **Replace storage functions:**
   ```javascript
   // OLD (localStorage):
   localStorage.setItem(STORAGE_KEY, JSON.stringify(stars))
   
   // NEW (Firebase):
   collection(db, 'stars').add(star)
   ```
3. **Add real-time listeners:**
   ```javascript
   onSnapshot(query(collection(db, 'stars')), (snapshot) => {
     const stars = snapshot.docs.map(doc => doc.data());
     displayStars(stars);
   });
   ```
4. **Enable anonymous authentication** (optional)

**Estimated effort:** 1-2 hours for a developer familiar with Firebase

## Browser Compatibility

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Requires JavaScript enabled
- ✅ No external dependencies
- ✅ Works on mobile devices
- ✅ Works offline (with localStorage)

## Security & Privacy

- ✅ No user tracking
- ✅ No cookies
- ✅ No external API calls (localStorage only)
- ✅ Data stays on user's device
- ✅ Simple, readable code

## Contributing

Want to help grow the Kindness Galaxy? You can:
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/your-idea`)
3. Test your changes locally
4. Submit a pull request

## License

Open source and free to use. Share the light! ✨

---

**Remember:** Every star in this galaxy represents a real act of kindness. Thank you for being part of something beautiful.

*Last updated: 2026-04-10*