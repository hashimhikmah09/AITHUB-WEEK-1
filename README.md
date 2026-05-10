# ☀️ Solar Marketplace Frontend

A modern, responsive frontend application for a Solar Marketplace platform where customers can explore solar companies, browse products, request installation quotes, and manage their accounts.

Built with:

- Next.js
- TypeScript
- Tailwind CSS
- React
- LocalStorage Authentication
- Responsive UI Components

---

# 🚀 Features

## 🔐 Authentication
- User Registration
- User Login
- Password Strength Indicator
- Confirm Password Match Validation
- Role Selection (Customer / Company)
- LocalStorage-based Authentication

## 🏢 Company Marketplace
- Browse solar companies
- Search companies by name or location
- Responsive company cards
- Loading skeletons & preloaders

## 📦 Products & Services
- View solar products
- Company listings
- Service exploration

## 🎨 UI/UX Features
- Responsive Design
- Modern Card Layouts
- Tailwind CSS Styling
- Loading States
- Empty States
- Reusable Components

## 🧪 Testing & Documentation
- Jest Unit Tests
- React Testing Library
- Design Tokens
- Component Documentation

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React Framework |
| TypeScript | Static Typing |
| Tailwind CSS | Styling |
| React | UI Library |
| Axios | API Requests |
| LocalStorage | Mock Authentication |
| Jest | Unit Testing |
| React Testing Library | Component Testing |

---

# 📁 Project Structure

```bash
frontend/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── explore/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── CompanyCard.tsx
│   │   ├── PasswordStrength.tsx
│   │   └── Loader.tsx
│   │
│   ├── services/
│   │   ├── authService.ts
│   │   ├── api.ts
│   │   └── mockData.ts
│   │
│   ├── styles/
│   │   └── design-tokens.ts
│   │
│  
│   │
│   ├── tests/
│   │   ├── CompanyCard.test.tsx
│   │   └── PasswordStrength.test.tsx
│   │
│   └── types/
│
├── .env.local
├── .gitignore
├── jest.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/solar-marketplace-frontend.git
```

---

## 2️⃣ Navigate Into Project

```bash
cd solar-marketplace-frontend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:3000
```

---

# 📦 Dependencies

## Main Dependencies

```bash
npm install next react react-dom axios lucide-react
```

---

## Styling

```bash
npm install tailwindcss postcss autoprefixer
```

---

## Development Dependencies

```bash
npm install -D typescript @types/react @types/node
```

---

# 🧪 Testing Dependencies

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

---

# 🔐 Environment Variables

Create a `.env.local` file in the root directory.

## `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

---

# 📄 `.env.example`

```env
NEXT_PUBLIC_API_URL=
```

---

# 📜 NPM Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest"
}
```

---

# 🔌 Frontend Pages

| Route | Description |
|---|---|
| / | Landing Page |
| /explore | Browse companies |
| /login | User login |
| /register | User registration |

---

# 🔐 Authentication Features

## Registration
- Full name validation
- Email validation
- Password validation
- Role selection
- Password strength checker
- Confirm password matching

## Login
- Email/password login
- Validation feedback
- LocalStorage authentication

---

# 🎨 Design System

The project includes reusable design tokens for:

- Colors
- Typography
- Spacing
- Shared UI consistency

## Example

```ts
export const colors = {
  primary: "#EAB308",
  secondary: "#111827",
};
```

---

# 🧩 Reusable Components

## Components Included

- Navbar
- CompanyCard
- PasswordStrength
- Loader
- Search Bar
- Filters

---

# 📚 Component Documentation

Components are documented using:

- Inline JSDoc comments
- Typed Props Interfaces

Example:

```tsx
/**
 * COMPANY CARD COMPONENT
 * Displays company information
 */
```

---

# 🧪 Unit Testing

Unit tests are implemented using:

- Jest
- React Testing Library

## Components Tested

- CompanyCard
- PasswordStrength

---

# 🧪 Run Tests

```bash
npm test
```

---

# 🔄 API Integration

Axios is configured inside:

```bash
src/lib/axios.ts
```

Example:

```ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;
```

---

# 📱 Responsive Design

The UI is fully responsive across:

- Mobile Devices
- Tablets
- Desktop Screens

Tailwind utility classes are used for responsiveness.

Example:

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

# ✨ Loading States

The project includes:

- Skeleton Loaders
- Animated preloaders
- Empty states
- Smooth transitions

---

# 🔒 Security Features

- Form Validation
- Password Matching
- Protected Client Routes
- Environment Variables
- Input Sanitization

---

# 🚀 Deployment

Frontend can be deployed on:

- Vercel
- Netlify
- Render

## Vercel Deployment

```bash
npm install -g vercel
vercel
```

---

# 👨‍💻 Author

Hikmah Hashim

Frontend & Backend Developer

---

# 📄 License

This project is licensed under the MIT License.