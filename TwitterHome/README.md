# Twitter Home UI Clone

This project is a clone of the Twitter home page UI built using React and styled components, powered by **Vite** for fast development and optimized builds.

## Features

- **Timeline**: Display tweets in a scrollable timeline.
- **Tweet Box**: Compose new tweets (simulated, no backend).
- **Sidebar**: Navigation with profile summary and links.
- **Responsive Design**: Works on desktop and mobile screens.

## Demo

Here’s a preview of the Twitter home UI clone:

![Twitter Home UI Screenshot](src/assets/screenshots/Screenshot%202024-09-25%20231356.png)

**Responsive Design**
![Twitter Home UI Screenshot](src/assets/screenshots/Screenshot%202024-09-25%20231648.png)

> _Screenshot of the main Twitter home UI clone._

## Technologies Used

- **Vite**: Fast development server and build tool.
- **React**: Frontend library for building UI components.
- **Styled Components**: For writing Tailwind CSS.
- **React Icons**: Icons for sidebar and UI elements.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Guru924/Dev-UI/tree/main/TwitterHome.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd TwitterHome
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser to view the app.

## Build for Production

To create an optimized production build, run:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment.

## Folder Structure

```plaintext
twitter-home-ui-clone/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## How to Use

1. **Tweet Box**: Type a tweet and simulate posting it (no backend functionality).
2. **Sidebar**: Use the navigation links to explore different sections (non-functional).
3. **Timeline**: Scroll through a list of mock tweets.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
