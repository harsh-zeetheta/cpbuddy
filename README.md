# CPBuddy - Competitive Programming Dashboard

A modern, professional dashboard for tracking competitive programming progress across multiple platforms.

## Features

- 🎯 **Multi-Platform Tracking** - LeetCode, CodeForces, CodeChef, AtCoder
- 📊 **Beautiful Charts** - DSA breakdown, contest participation, rating progress
- 🔥 **Activity Heatmap** - GitHub-style contribution tracking
- 🏆 **Achievements System** - Unlock badges and track milestones
- 🌙 **Dark Mode** - Professional dark/light theme support
- 📱 **Responsive Design** - Works perfectly on all devices

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Recharts** for data visualization
- **Lucide React** for icons

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd cpbuddy-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

## Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Sidebar.tsx     # User profile sidebar
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Charts.tsx      # Chart components
│   └── ...
├── lib/                # Utilities and data
│   ├── utils.ts        # Helper functions
│   └── mock-data.ts    # Sample data
├── App.tsx             # Main app component
└── main.tsx           # App entry point
\`\`\`

## Customization

- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Data**: Replace mock data in `src/lib/mock-data.ts` with real API calls
- **Components**: All components are modular and easily customizable

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own competitive programming tracking needs!
