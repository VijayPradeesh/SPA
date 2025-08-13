# Serenity Spa Website

## Overview

A luxury spa website featuring booking appointments and contact functionality. The application showcases services, galleries, testimonials, and provides online booking capabilities. Built with React frontend and Express backend, using PostgreSQL for data persistence. The site emphasizes wellness and tranquility through elegant design and smooth user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and better development experience
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom spa-themed color variables and Shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **UI Components**: Radix UI primitives wrapped in custom components for accessibility and consistency

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API
- **Storage Strategy**: Dual storage implementation - in-memory storage for development/testing and database integration ready
- **API Design**: RESTful endpoints for appointments and contact messages with proper HTTP status codes
- **Validation**: Server-side validation using Zod schemas shared between frontend and backend
- **Development Tools**: Vite integration for hot module replacement and development server

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Design**: Three main entities - users, appointments, and contact messages with proper relationships
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon Database serverless connection for cloud database hosting

### Styling and Design System
- **Design Theme**: Spa-focused color palette with custom CSS variables for brand consistency
- **Typography**: Multiple font families including serif fonts for elegance
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Component Library**: Comprehensive UI component system based on Radix UI primitives

### Development and Build
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking across frontend, backend, and shared schemas
- **Development Server**: Express server with Vite middleware for seamless full-stack development
- **Path Aliases**: Configured aliases for clean imports and better developer experience

## External Dependencies

### Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

### Frontend Libraries
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight React router
- **@hookform/resolvers**: React Hook Form integration with validation libraries
- **react-hook-form**: Form state management and validation
- **zod**: Schema validation for forms and API data

### UI Framework
- **@radix-ui/***: Comprehensive set of accessible UI primitives including dialogs, forms, navigation
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Conditional className utility

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds

### Additional Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component
- **lucide-react**: Icon library for consistent iconography