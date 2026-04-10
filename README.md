# Kindness Galaxy ✨

A cosmic star map web app where every act of kindness, love, faith, and hope becomes a star in the universe.

## What It Does

The Kindness Galaxy is a simple, beautiful web app designed to celebrate and preserve acts of kindness. Users can submit stories of kindness, love, faith, or hope, and watch them become permanent stars displayed on a dark cosmic canvas.

**Key Features:**
- 📝 Simple form to submit acts of kindness, love, faith, or hope
- ✨ Beautiful cosmic UI with glowing stars and gradient backgrounds
- 💾 Persistent storage—stars are saved and survive page refreshes
- 🎨 Four category types with unique color themes
- 📱 Responsive design for mobile and desktop
- 🔒 Privacy-friendly—data stored locally on your device

## How to Run It

### Option 1: GitHub Pages (Recommended)
This repository is already set up for GitHub Pages hosting.

1. **Repository Settings:**
   - The repo is public and has Pages enabled
   - Navigate to **Settings → Pages**
   - Ensure the branch is set to `main` and the source folder is `/root`

2. **Access the App:**
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

All star data is saved in your browser's **localStorage**:
- **Pros:** No server needed, works offline, instant persistence
- **Cons:** Data is device-specific and deleted if browser cache is cleared
- **Location:** Data is stored under the key `kindnessGalaxy_stars` as JSON

### To Upgrade to Firebase Firestore

When you're ready to scale this to a cloud database, follow these steps:

1. **Set Up Firebase Project:**
   - Go to [firebase.google.com](https://firebase.google.com)
   - Create a new project
   - Enable Firestore Database (Cloud Firestore)

2. **Update the HTML:**
   - Add Firebase SDK to `<head>`:
     ```html
     <script type="module">
       import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
       import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
       // ... Initialize with your config
     </script>
     ```

3. **Replace Storage Functions** in `index.html`:
   - `saveStarToStorage()` → `collection(db, 'stars').add(star)`
   - `getAllStarsFromStorage()` → `query(collection(db, 'stars'))`
   - `loadStarsFromStorage()` → `onSnapshot(q, (snapshot) => { ... })`

4. **Enable Anonymous Authentication** (optional but recommended for public submissions)

**Code comments in `index.html` show exactly where to make these changes.**

## What to Change Next

### Phase 2: Engagement & Community
- [ ] Add user authentication (optional login to track personal stars)
- [ ] Display star count and stats dashboard
- [ ] Add filters by category
- [ ] Sort options (newest, oldest, random)

### Phase 3: Sharing & Impact
- [ ] Share individual stars via unique URLs
- [ ] Community gallery with top stars
- [ ] Email digest of recent stars
- [ ] Social media integration (optional)

### Phase 4: Analytics & Growth
- [ ] Admin dashboard to monitor submissions
- [ ] Heat map of kindness trends
- [ ] Monthly/yearly reports
- [ ] Suggestions or daily prompts for acts of kindness

### Phase 5: Firebase Migration
- [ ] Move to Firestore for scalability
- [ ] Add user accounts and star collection
- [ ] Enable real-time collaborative features
- [ ] Mobile app version

## Technical Stack

- **Frontend:** Pure HTML, CSS, and JavaScript (no frameworks)
- **Storage:** localStorage (easily upgradeable to Firebase)
- **Hosting:** GitHub Pages (free, instant)
- **Design:** Cosmic/spiritual theme with accessibility in mind

## Key Files

- `index.html` — Full app (HTML + CSS + JavaScript)
- `README.md` — Documentation (this file)

## Development Notes

### Code Organization
- **HTML Structure:** Form section + stars display container
- **CSS Styling:** Organized by component (header, form, cards, animations)
- **JavaScript:** Modular functions for storage, display, and interactions

### Storage Migration Path
The JavaScript includes clear comments showing where localStorage calls occur. When upgrading to Firebase, simply replace:
- `saveStarToStorage()` with Firebase `.add()`
- `getAllStarsFromStorage()` with Firestore queries
- `loadStarsFromStorage()` with real-time listeners

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- No external dependencies

## Contributing

Want to help grow the Kindness Galaxy? You can:
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/your-idea`)
3. Make your changes
4. Submit a pull request

## License

Open source and free to use. Share the light!

---

**Remember:** Every star in this galaxy represents a real act of kindness. Thank you for being part of something beautiful. ✨

---

*Last updated: 2026-04-10 17:47:08*