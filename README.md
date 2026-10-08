# Portfolio Web

A modern personal portfolio website built with **React Router 7 (Framework Mode)** and **Strapi**. The site showcases personal projects, technical experience, blog posts, and provides a way for visitors to get in touch.

## 🚀 Features

- **Home** — Personal introduction and overview
- **Projects** — Showcase of personal and professional projects
- **Project Details** — Detailed information about individual projects, including technologies and descriptions
- **Blog** — Technical articles and personal insights
- **Contact** — Contact form for visitors and potential clients/employers
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Dynamic Content** — Projects and blog content managed through Strapi
- **SEO-Friendly Routing** — Structured routes and metadata using React Router 7

## 🛠️ Tech Stack

### Frontend

- React
- React Router 7 (Framework Mode)
- TypeScript
- Vite
- SCSS

### Backend / CMS

- Strapi
- REST API
- PostgreSQL / compatible database

### Development Tools

- Git
- npm
- ESLint
- Prettier

## 📁 Project Structure

```text
portfolio/
├── app/
│   ├── components/
│   ├── routes/
│   ├── layouts/
│   ├── services/
│   ├── styles/
│   └── root.tsx
├── public/
├── package.json
├── react-router.config.ts
├── tsconfig.json
└── vite.config.ts
```

The Strapi backend is maintained separately from the React application.

```text
portfolio-cms/
├── src/
│   ├── api/
│   ├── components/
│   └── extensions/
├── config/
├── public/
└── package.json
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- A database supported by Strapi

### Frontend

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd portfolio
npm install
```

Create an environment file:

```env
VITE_API_URL=http://localhost:1337/api
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Strapi Backend

Clone and install the Strapi project separately:

```bash
git clone <strapi-repository-url>
cd portfolio-cms
npm install
```

Configure the required environment variables and database connection, then start Strapi:

```bash
npm run develop
```

The Strapi API will typically be available at:

```text
http://localhost:1337
```

## 🔌 Content Management

Strapi is used as the headless CMS for managing dynamic portfolio content.

Typical content types include:

### Projects

- Title
- Slug
- Description
- Technologies
- Images
- Repository URL
- Live Demo URL
- Featured status

### Blog Posts

- Title
- Slug
- Content
- Cover image
- Tags
- Publication date

The React application consumes this content through the Strapi API.

## 🧭 Routes

```text
/
├── /projects
│   └── /projects/:slug
├── /blog
│   └── /blog/:slug
└── /contact
```

## 🔄 Application Architecture

```text
                   ┌─────────────────┐
                   │     Visitor     │
                   └────────┬────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │ React Router 7  │
                   │    Frontend     │
                   └────────┬────────┘
                            │
                         REST API
                            │
                            ▼
                   ┌─────────────────┐
                   │     Strapi      │
                   │   Headless CMS  │
                   └────────┬────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │    Database     │
                   └─────────────────┘
```

React Router handles the application's routing and frontend experience, while Strapi provides the API and content management layer.

## 📦 Available Scripts

### Frontend

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Start production server
npm run typecheck # Run TypeScript checks
npm run lint      # Run ESLint
```

### Strapi

```bash
npm run develop   # Start Strapi in development mode
npm run build     # Build Strapi admin panel
npm run start     # Start Strapi in production mode
```

## 🎯 Purpose

This project serves as a personal developer website and portfolio, providing a central place to showcase projects, publish technical content, and make professional contact information available.

It also serves as a practical demonstration of building a modern React application with a **headless CMS architecture**.

## 📄 License

This project is for personal portfolio purposes. Unless otherwise stated, the content and design are owned by the author.
