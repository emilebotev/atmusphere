# Atmusphere

## Description

**Atmusphere** is an AI-powered playlist builder and player designed to enhance your music experience by tailoring playlists for various moods and occasions. With a step-by-step questionnaire, users can create playlists that resonate with their emotions and preferences. The app seamlessly integrates with Spotify, providing a personalized and immersive music atmosphere.

---

## Features

### Core Features

1. **AI-Powered Playlist Builder and Player**

   - Create playlists for specific occasions or moods with ease.
   - Includes a step-by-step questionnaire for precise recommendations.
   - Optionally utilizes Spotify profile data for enhanced personalization.

2. **Genre Customization**

   - Choose or exclude genres from a predefined list to refine playlists.

3. **Predefined Moods and Occasions**

   - Select from several predefined moods (e.g., Relaxed, Energetic, Happy).
   - Build playlists for predefined occasions (e.g., Study, Party, Chill).

### Features Planned for Future Development

4. **User Refinement Options**

   - Input custom preferences to fine-tune playlists.

5. **Dynamic Themes Based on Mood**

   - Automatically adapt the app’s theme to match the user’s mood.

6. **Dynamic Visuals with DALL·E**

   - Use AI to generate custom graphics or visuals that reflect the playlist’s vibe.

---

## Installation

### Prerequisites

- Node.js (latest version recommended)
- Spotify Developer Account (for API keys)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/emilebotev/atmusphere.git
   cd atmusphere
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add your Spotify API keys:
     ```env
     SPOTIFY_CLIENT_ID=your-client-id
     SPOTIFY_CLIENT_SECRET=your-client-secret
     SPOTIFY_REDIRECT_URI=http://localhost:3000/api/auth/callback
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Follow the on-screen steps to create your playlist:
   - Select a predefined mood or occasion.
   - Customize genre preferences.
3. Enjoy your personalized playlist powered by AI and Spotify!

---

## Technologies Used

- **Next.js**: Framework for server-side rendering and routing.
- **TypeScript**: Type-safe development.
- **Tailwind CSS**: Utility-first styling.
- **Redux Toolkit (RTK)**: State management and API handling.
- **Spotify API**: Music data and playlist integration.
- **Material-UI (MUI)**: Component styling and theming.
- **DALL·E API** (planned): AI-generated visuals.

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, feel free to contact:

- **Email**: [emilebotev@gmail.com](mailto\:emilebotev@gmail.com)
- **GitHub**: [emilebotev](https://github.com/emilebotev)

