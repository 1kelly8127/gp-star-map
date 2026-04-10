# Kindness Galaxy ✨

A cosmic star map web app where every act of kindness, love, faith, and hope becomes a star in the universe.

## What It Does

The Kindness Galaxy is a simple, beautiful web app designed to celebrate and preserve acts of kindness. Users can submit stories of kindness, love, faith, or hope, and watch them become stars that are displayed in a dynamic gallery.

**Current Features (v2):**
- 📝 Simple form to submit acts with a category, description, and optional name
- ✨ Beautiful cosmic UI with glowing star cards and gradient backgrounds
- 💾 Persistent storage—stars are saved and survive page refreshes
- 🎨 Four category types (Kindness, Love, Faith, Hope) with unique emojis
- 🌌 Live "Kindness Galaxy" section displaying all saved stars below the form
- ⏰ Automatic timestamps (shows "Today", "Yesterday", or full date)
- 👤 Optional anonymous submission or name-tagged contributions
- 📱 Responsive design for mobile and desktop
- 🔒 Privacy-friendly—data stored locally on your device
- 🎯 Beginner-friendly, no external dependencies

## How to Run It

### Option 1: GitHub Pages (Recommended) ⭐
This repository is already set up for GitHub Pages hosting.

1. **Access the Live App:**
   - Visit: `https://1kelly8127.github.io/gp-star-map`
   - Start adding stars immediately—no setup needed!

2. **Settings (already configured):**
   - The repo is public and has Pages enabled
   - Settings → Pages is set to deploy from `main` branch

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

All star data is saved in your browser's **localStorage**:

**Storage Format:**
```javascript
[
  {
    id: 1712756400000,
    name: "Kelly",
    category: "Kindness",
    description: "Helped an elderly neighbor with groceries",
    timestamp: "2026-04-10T15:20:00.000Z"
  },
  ...
]
```

**Stored as:** JSON array under the key `kindnessGalaxy_stars`

**Pros:**
- ✅ No server needed
- ✅ Works offline
- ✅ Instant persistence
- ✅ Privacy—data never leaves your device

**Cons:**
- ❌ Data is device-specific (stored only in browser)
- ❌ Data is deleted if browser cache is cleared
- ❌ Not shared across devices or users
- ❌ Cannot scale to multiple users

## Future Upgrade Path: Firebase Firestore ☁️

When you're ready to scale this app to a cloud database for shared, collaborative kindness tracking:

### Why Firebase?
- Real-time synchronization across devices
- Cloud backup of all stars
- Public or private galleries
- User authentication (optional)
- Scalable to thousands of submissions

### Migration Steps:

1. **Set Up Firebase Project:**
   - Go to [firebase.google.com](https://firebase.google.com)
   - Create a new project
   - Enable Firestore Database (Cloud Firestore)
   - Copy your project config

2. **Update `index.html`:**
   - Add Firebase SDK imports in `<head>`
   - Replace localStorage functions with Firestore calls
   - See code comments marked `TODO: Firebase` in index.html

3. **Replace Storage Functions:**
   ```javascript
   // OLD (localStorage):
   localStorage.setItem(STORAGE_KEY, JSON.stringify(stars))

   // NEW (Firebase):
   collection(db, 'stars').add(star)
   ```

4. **Add Real-Time Listeners:**
   ```javascript
   onSnapshot(query(collection(db, 'stars')), (snapshot) => {
     const stars = snapshot.docs.map(doc => doc.data());
     displayStars(stars);
   });
   ```

5. **Enable Anonymous Authentication** (optional but recommended):
   - Firebase Console → Authentication → Enable Anonymous
   - This allows public submissions without login

**Estimated effort:** 1-2 hours for a developer familiar with Firebase

## What to Change Next

### Phase 2: Engagement & Community (Current Focus)
- [x] Add saved stars display with timestamps
- [x] Display all submissions in a gallery
- [ ] Add star count statistics
- [ ] Add category filters
- [ ] Sort options (newest, oldest, random)
- [ ] Dark mode toggle

### Phase 3: Sharing & Impact
- [ ] Share individual stars via unique URLs
- [ ] Community gallery highlighting top stars
- [ ] Email digest of recent stars
- [ ] Social media integration (optional)
- [ ] Weekly or monthly kindness reports

### Phase 4: Firebase Migration
- [ ] Migrate to Firestore for cloud storage
- [ ] Add optional user accounts
- [ ] Enable real-time collaborative features
- [ ] Create public vs. private star galleries
- [ ] Mobile app version (React Native or Flutter)

### Phase 5: Analytics & Gamification
- [ ] Admin dashboard
- [ ] Heat map of kindness trends
- [ ] Achievement badges
- [ ] Leaderboards (opt-in)
- [ ] Daily kindness prompts

## Technical Stack

- **Frontend:** Pure HTML, CSS, and JavaScript (no frameworks)
- **Storage:** localStorage (easily upgradeable to Firebase Firestore)
- **Hosting:** GitHub Pages (free, instant deployment)
- **Design:** Cosmic/spiritual theme with accessibility
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

## Key Files

- `index.html` — Complete app (HTML + CSS + JavaScript, ~500 lines)
- `README.md` — Documentation (this file)

## Development Notes

### Code Organization
- **HTML Structure:** 
  - Header with title and subtitle
  - Form section for submissions
  - Stars container for displaying saved entries
  
- **CSS Styling:** 
  - Cosmic gradient backgrounds
  - Responsive grid layout for star cards
  - Smooth animations and hover effects
  - Mobile-first responsive design  
  
- **JavaScript:** 
  - Modular functions for storage operations
  - Real-time form validation
  - Dynamic star card generation
  - Intelligent date formatting (Today, Yesterday, etc.)
  - HTML escaping for security

### Storage Functions (Easy Migration Points)
Look for these functions when upgrading to Firebase:
- `saveStarToStorage()` → Replace with Firebase `.add()`
- `getAllStarsFromStorage()` → Replace with Firestore queries
- `loadAndDisplayStars()` → Set up real-time listeners

All functions are marked with TODO comments showing Firebase alternatives.

### Security & Privacy
- ✅ No user tracking
- ✅ No cookies
- ✅ No external API calls (except Firebase in future)
- ✅ HTML escaping prevents injection attacks
- ✅ Data stays on user's device (with localStorage)

### Browser Compatibility
- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Requires JavaScript enabled
- ✅ No external dependencies
- ✅ Works on mobile devices
- ✅ Works offline (with localStorage)

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

---

*Last updated: 2026-04-10*