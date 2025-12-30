# LeetCode Clone

A full-stack LeetCode-inspired coding interview preparation platform built with modern web technologies. Practice coding problems, track your progress, manage playlists, and compete with the global community.

**Live Demo:** https://leetcode-nextjs-clone.vercel.app/

## 🌟 Features

### Core Features

- **Interactive Coding Environment**: Practice with real-world coding challenges with instant feedback
- **Multi-Language Support**: Write code in Python, JavaScript, Java, C++, and Go
- **Real-Time Code Execution**: Execute and test your code against multiple test cases using Judge0 API
- **Problem Difficulty Levels**: Easy, Medium, and Hard problems to challenge yourself
- **Problem Tracking**: Track solved problems and view submission history

### User Features

- **User Authentication**: Secure authentication with Clerk
- **User Profiles**: Personalized user profiles with profile pictures and statistics
- **Problem Management**: Create, view, and delete coding problems (Admin feature)
- **Playlists**: Organize problems into custom playlists for structured learning
- **Progress Analytics**: Monitor your improvement with detailed submission history
- **Global Community**: Connect with developers worldwide

### Code Editor

- **Monaco Editor Integration**: Professional code editing experience with syntax highlighting
- **Code Snippets**: Pre-filled code snippets for each problem and language
- **Multiple Language Support**: Toggle between different programming languages

### Admin Features

- **Problem Creation**: Create new coding problems with custom test cases
- **Problem Management**: Edit and delete problems
- **Problem Editorial**: Add solution explanations and hints
- **Test Case Management**: Define multiple test cases and expected outputs

## 🛠️ Tech Stack

### Frontend

- **Next.js 16**: React-based framework for production-grade applications
- **React 19**: UI library for building interactive components
- **TypeScript/JavaScript**: Programming language support
- **TailwindCSS**: Utility-first CSS framework for styling
- **Shadcn/ui**: High-quality React component library
- **Monaco Editor**: Professional code editor
- **Recharts**: Data visualization library for analytics

### Backend

- **Next.js API Routes**: Serverless backend functions
- **Prisma**: Type-safe ORM for database management
- **PostgreSQL**: Relational database
- **Judge0 API**: Code execution and compilation service
- **Clerk**: Authentication and user management

### State Management & Forms

- **React Hook Form**: Efficient form handling
- **Zod**: TypeScript-first schema validation
- **Radix UI**: Headless component primitives

### Utilities

- **Axios**: HTTP client for API requests
- **Sonner**: Toast notifications
- **date-fns**: Date utilities
- **Lucide React**: Icon library

## 📁 Project Structure

```
├── app/
│   ├── (auth)/                  # Authentication pages (Sign In, Sign Up)
│   ├── (root)/                  # Main application pages
│   │   ├── problems/            # Problems listing page
│   │   ├── profile/             # User profile page
│   │   └── page.jsx             # Home page
│   ├── api/                     # API routes
│   │   ├── create-problem/      # Create problem endpoint
│   │   └── playlists/           # Playlist management endpoints
│   ├── problem/[id]/            # Problem detail page
│   └── create-problem/          # Create problem form page
│
├── components/
│   ├── providers/               # App providers (Theme, etc.)
│   └── ui/                      # Reusable UI components
│       ├── button/              # Button component
│       ├── dialog/              # Modal dialog
│       ├── form/                # Form components
│       └── ...                  # Other UI components
│
├── modules/                     # Feature modules
│   ├── auth/
│   │   ├── actions/             # Authentication server actions
│   │   └── hooks/               # Auth hooks
│   ├── problems/
│   │   ├── actions/             # Problem management actions
│   │   └── components/          # Problem components
│   ├── profile/
│   │   ├── actions/             # Profile actions
│   │   └── components/          # Profile components
│   └── home/
│       └── components/          # Home page components
│
├── lib/
│   ├── db.js                    # Prisma client
│   ├── judge0.js                # Judge0 API integration
│   └── utils.js                 # Utility functions
│
├── hooks/
│   └── use-mobile.js            # Mobile detection hook
│
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
│
└── public/                      # Static assets
```

## 🗄️ Database Schema

### User Model

- Manage user accounts and authentication
- Store user roles (ADMIN, USER)
- Track user profile information

### Problem Model

- Store coding problems with descriptions
- Support multiple difficulty levels (EASY, MEDIUM, HARD)
- Store problem examples, constraints, and hints
- Include test cases and reference solutions
- Support code snippets in multiple languages

### Submission Model

- Track all code submissions
- Store source code, language, and test inputs
- Record execution results (stdout, stderr, status)

### TestCaseResult Model

- Detailed test case execution results
- Track passed/failed status for each test case
- Store memory and time metrics

### ProblemSolved Model

- Track which problems have been solved by each user
- Maintain unique constraint to prevent duplicates

### Playlist Model

- Allow users to organize problems into collections
- Store playlist metadata

### ProblemInPlaylist Model

- Map problems to playlists
- Enable flexible problem organization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Judge0 API access (free tier available)
- Clerk account for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd leetcodeclone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://..."

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="..."
   CLERK_SECRET_KEY="..."
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"

   # Judge0 API
   JUDGE0_API_URL="https://api.judge0.com"
   JUDGE0_API_KEY="..."
   ```

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Key Features Explained

### Code Execution Flow

1. User writes code in the Monaco Editor
2. Selects a programming language
3. Submits code against test cases
4. Judge0 API compiles and executes the code
5. System displays results with pass/fail status
6. Submission is saved to database with results

### Playlist Management

- Users can create custom playlists to organize problems
- Add/remove problems from playlists
- Track progress within each playlist
- Share study plans with others

### Admin Features

- Create new problems with custom test cases
- Define problem difficulty and tags
- Add editorial solutions and hints
- Manage all user submissions
- Delete problematic problems

### User Progress Tracking

- View all solved problems
- Check submission history
- Analyze execution metrics (time, memory)
- Track progress over time

## 🔐 Authentication

This project uses **Clerk** for secure authentication:

- Sign up and login with email
- OAuth support (Google, GitHub, etc.)
- User profile management
- Automatic user onboarding

## 🔌 API Integration

### Judge0 API

- Batch code submission and execution
- Support for 90+ programming languages
- Real-time result polling
- Memory and time limit tracking

### Prisma ORM

- Type-safe database operations
- Automatic migrations
- Built-in validation

## 🎨 UI Components

The project uses Shadcn/UI component library with Radix UI primitives:

- Buttons, Forms, Dialogs
- Tabs, Accordion, Collapsible
- Tooltips, Popovers, Dropdowns
- Tables, Pagination
- Toast notifications with Sonner
- Dark/Light theme support

## 📊 Performance & Best Practices

- Server-side rendering with Next.js
- Optimized database queries with Prisma
- Efficient code splitting
- Image optimization
- Responsive design for all devices
- Accessibility standards compliance

## 🐛 Testing

The project includes test case management:

- Multiple test cases per problem
- Expected output validation
- Execution result tracking
- Error and compilation output logging

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interface
- Adaptive navigation

## 🌐 Deployment

The application is deployed on **Vercel** and can be accessed at:
https://leetcode-nextjs-clone.vercel.app/

### Deployment Steps

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Clerk Documentation](https://clerk.com/docs)
- [Judge0 API Documentation](https://judge0.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For support, questions, or suggestions, please open an issue in the repository.

---

**Built with ❤️ using Next.js, React, and modern web technologies**
