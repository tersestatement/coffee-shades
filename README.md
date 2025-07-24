# Coffee Shades ☕

**A satirical personality assessment tool that analyzes your antisocial tendencies based on coffee preferences**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://kaleidoscopic-heliotrope-73059c.netlify.app)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.13-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

## 🧪 About

Coffee Shades is an entertaining web application that playfully explores the correlation between coffee preferences and personality traits. Inspired by a 2016 research study on bitter taste preferences and antisocial personality traits, this app gamifies the findings with a clinical laboratory aesthetic.

**⚠️ Important Disclaimer:** This is a satirical entertainment tool and should NOT be used for actual psychological assessment or diagnosis.

## ✨ Features

- **Interactive Coffee Builder**: Customize your coffee with creamer and sugar sliders
- **Animated Binary Display**: Real-time glitchy binary animations that react to your choices
- **Clinical Laboratory Theme**: Professional, scientific-looking interface with monospace fonts
- **Personality Assessment**: Get scored on a 1-10 scale with humorous personality traits
- **Social Sharing**: Share your results on social media platforms
- **Reality Check Modal**: Learn about the actual scientific study behind the concept
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Live Demo

Try it out: [Coffee Shades on Netlify](https://kaleidoscopic-heliotrope-73059c.netlify.app)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/coffee-shades.git
   cd coffee-shades
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
coffee-shades/
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── BinaryDisplay.tsx   # Animated binary score display
│   │   ├── CoffeeBuilder.tsx   # Coffee customization interface
│   │   ├── Header.tsx          # Application header
│   │   ├── Results.tsx         # Results display component
│   │   ├── RealityCheckModal.tsx # Scientific background modal
│   │   └── ShareModal.tsx      # Social sharing modal
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── README.md                # Project documentation
└── package.json            # Dependencies and scripts
```

## 🎨 Key Components

### BinaryDisplay
- Animated binary patterns that change based on score
- Different animation speeds and glitch effects
- Reactive to slider adjustments

### CoffeeBuilder
- Interactive sliders for creamer and sugar
- Visual coffee cup that changes color
- Real-time score calculation

### Results
- Personality assessment display
- Humorous traits and behavioral corrections
- Social sharing functionality

## 🧬 The Science Behind It

This app is inspired by the 2016 study "Bitter taste preferences and antisocial personality traits" published in the journal *Appetite* by Christina Sagioglou and Tobias Greitemeyer. The study found a weak correlation between preference for bitter tastes and certain antisocial traits.

**Important Notes:**
- The correlation was weak and not causal
- This app exaggerates the findings for entertainment
- Results should not be taken seriously

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original research by Christina Sagioglou and Tobias Greitemeyer
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system

## 📞 Contact

If you have any questions or suggestions, feel free to reach out!

---

**Remember: This is for entertainment purposes only. Don't judge people by their coffee preferences! ☕😄**