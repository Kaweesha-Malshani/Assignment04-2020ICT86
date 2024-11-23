

# 🐾 Animal Matching Game

This is a fun and interactive **React-based game** for children. The game enhances kids' object recognition and language skills. It displays a random animal name, and the player has to select the correct animal image from a grid. If correct, the result will show "Win," otherwise "Lose."

---

## 🌟 Features

- Displays random animal names dynamically.
- Includes a grid of animal images for selection.
- Provides instant feedback (Win/Lose) based on the player's choice.
- Easy to use and visually engaging UI.

---

## 🛠️ Technologies Used

- **React.js**: Framework for building the UI.
- **JavaScript**: Game logic and interactivity.
- **CSS**: Styling for the game layout.
- **HTML**: Basic structure.

---

## 📂 Project Structure

```
.
├── src
|
│   ├── components
│   │   └── AnimalTabel.js
│   ├── App.js
│   ├── index.js
│   ├── AnimalDb.js
│   └── styles.css
|   |__compo.css
├── public
│   └── index.html
|   |__images
|        ├── 1.png
│        ├── 2.png
│        ├── 3.png
│        └── ... (16 animal images)
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

### 2️⃣ Installation Steps

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/assignment4
   cd assignment4
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the application**  
   ```bash
   npm start
   ```

4. **View in browser**  
   Open [http://localhost:3000](http://localhost:3000) to see the app running.

---

## 📖 Usage

1. The app displays a **random animal name** in the "Animal Name" section.
2. Select the correct image of the animal from the grid.
3. The result ("Win" or "Lose") is displayed based on your choice.

---


## 🎨 Screenshots

![Screenshot (25)](https://github.com/user-attachments/assets/ee727fbe-81ac-4115-9472-e9c6e3a2aa97)

### Game UI  


---

## 🛠️ Development Workflow

### File Details

- **`AnimalDb.js`**: Contains an array of animal names and their corresponding image paths.
- **`AnimalTabel.js`**: Main game logic and UI component.
- **`compo.css`**: Handles the layout and design of the game.
- **Images**: Stored in the `public/images` folder as `1.png, 2.png,...`.

### Adding New Animals

1. Add the new animal's image in the `public/images` folder.
2. Update the `AnimalDb.js` file with the new animal's name and image path.

---

## 🤝 Contributing

1. **Fork the repository**.
2. Create a **new branch** for your feature:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Description of your feature"
   ```
4. Push your changes:  
   ```bash
   git push origin feature-name
   ```
5. Submit a **pull request** for review.

---



## 🙌 Acknowledgments

- Inspired by educational games for kids.
- Icons and images used are sourced from **licensed resources** or **free-to-use repositories**.

---


