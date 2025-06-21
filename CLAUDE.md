# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build and Development

- `bun run start` - Start development server
- `bun run build` - Build for production
- `bun run watch` - Build in watch mode for development

### Testing

- `bun run test` - Run tests with Vitest
- Tests are configured to run in browser mode with Playwright/Chromium
- Test files: `src/**/*.spec.ts`
- Coverage includes all TypeScript files except `src/main.ts`

### Code Quality

- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting

## Architecture

This is an Angular 19 portfolio application built with:

### Core Stack

- **Angular 19** with standalone components
- **AnalogJS** - Full-stack Angular meta-framework with Vite
- **Vite** as build tool with SWC compilation
- **TailwindCSS 4** for styling
- **Vitest** for testing with browser mode

### Project Structure

- `/src/app/` - Main application code
  - `features/profile/` - Profile feature module containing:
    - `profile.component.ts` - Main profile component
    - `links/` - Social links component
    - `timeline/` - Timeline component
    - `state.ts` - State management
    - `usecase.ts` - Business logic
    - `types.ts` - TypeScript interfaces
    - `article-cache.service.ts` - Article caching service
- `/src/server/routes/api/` - API routes (AnalogJS server functions)
  - `zenn/articles.ts` - Zenn article fetching endpoint

### Key Configuration

- **Vite Config**: Uses AnalogJS with Vercel preset, SWC for compilation
- **Testing**: Browser-based testing with Playwright, Istanbul coverage
- **Build Target**: ES2020
- **Deployment**: Configured for Vercel

### Development Notes

- Uses standalone Angular components (no NgModules)
- State management via custom state service in `features/profile/state.ts`
- External content integration via Zenn API
- SSR disabled, static generation disabled
- HTTP client configured with fetch API
