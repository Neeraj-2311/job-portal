```markdown
# Job Portal Interface

A responsive job portal application built with React, featuring a chatbot, user profiles, job listings, and job details with dark mode support.

## 🚀 How to Run the App

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd job-portal-interface

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173`

## ✨ Features Implemented

### 1. Chatbot ("Buddy Bot")
- ✅ Bottom-right panel (web) / Floating button (mobile/tablet)
- ✅ Send and receive messages
- ✅ Conversation history with localStorage persistence
- ✅ Simulated bot responses
- ✅ User and bot avatars
- ✅ Suggestion chips for quick interactions

### 2. User Profile Page
- ✅ Display user information (name, email, photo, skills, bio)
- ✅ Edit profile functionality with modal/inline editing
- ✅ Form validation for all inputs
- ✅ Clean, responsive form UI

### 3. Job Listing Page
- ✅ Job cards with title, company, location, description
- ✅ Responsive card layout
- ✅ Filter by experience, company, industry, etc.
- ✅ Search functionality
- ✅ Bookmark system with persistence
- ✅ Tab navigation (Recommended, Saved, Applied)

### 4. Job Details Page
- ✅ Detailed job view with full description
- ✅ Requirements, qualifications, and company info
- ✅ Tabbed interface (Overview, Company Details, Insights)
- ✅ Apply button functionality
- ✅ Responsive layout for all devices

### 5. Additional Features
- ✅ **Dark Mode Toggle**: Complete theme switching
- ✅ **Responsive Design**: Web, mobile, and tablet support
- ✅ **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- ✅ **Scroll to Top**: Smooth scroll functionality

## 🛠️ Technology Stack

- **React 18+** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Icons** for iconography
- **localStorage** for data persistence
- **Vite** for build tooling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (touch-optimized, collapsible sidebar)
- **Tablet**: 768px - 1024px (adaptive layouts)
- **Desktop**: > 1024px (fixed sidebar, multi-column layouts)

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Chatbot/       # Chat interface components
│   ├── Profile/       # Profile management
│   ├── JobListing/    # Job listing & filtering
│   ├── JobDetails/    # Job detail views
│   └── Layout/        # Navigation & layout
├── hooks/             # Custom React hooks
├── context/           # Theme context
├── types/             # TypeScript definitions
├── constants/         # Configuration data
├── utils/             # Helper functions
└── sample/            # Mock data
```

## 🎯 Key Technical Decisions

### Architecture
- **Modular Components**: Scalable, reusable component structure
- **Custom Hooks**: Separation of business logic from UI
- **TypeScript**: Full type safety throughout the application
- **Context API**: Theme management

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: CSS custom properties with context switching
- **Accessibility**: WCAG compliance with proper contrast ratios

### State Management
- **React Hooks**: useState, useEffect for local state
- **localStorage**: Persistence for chat history and preferences
- **Context**: Global theme state

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 📊 Mock Data

The application uses comprehensive mock data including:
- Job listings with filtering properties
- User profile information
- Company details
- Chat conversation history

## 🚀 Performance Optimizations

- Component modularity for efficient re-rendering
- Custom hooks for logic reuse
- Responsive image loading
- Smooth animations and transitions

## 💡 Assumptions Made

1. **Data Source**: Used static/mock data instead of API integration
2. **Job Applications**: Local state management for apply functionality
3. **Chatbot**: Simple response simulation vs. AI integration
4. **Storage**: localStorage for persistence (production would use backend)

## 🔮 Extra Features Added

- **Scroll to Top**: Smooth scroll functionality on job listings
- **Bookmark System**: Save/unsave jobs with persistence
- **Tab Navigation**: Organized job views (Recommended, Saved, Applied)
- **Advanced Filtering**: Multiple filter criteria with dropdown UI
- **Theme Persistence**: Remember user's dark/light mode preference
- **Responsive Chatbot**: Adaptive UI for different screen sizes

## 🧪 Code Quality

- **TypeScript**: Full type safety
- **Modular Architecture**: Reusable components and hooks
- **Consistent Styling**: Unified design system
- **Error Handling**: Graceful fallbacks and empty states
- **Performance**: Optimized re-renders and efficient state updates

## 📧 Contact

For questions, feedback, or collaboration opportunities:

- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- **GitHub**: [github.com/your-username](https://github.com/your-username)

---

**Note**: This implementation focuses on frontend functionality with mock data. In a production environment, it would integrate with backend APIs for data management and real-time features.