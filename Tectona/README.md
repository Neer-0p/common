# Angular Fresher Assignment

This is a mini Angular project demonstrating core fundamentals including Components, Routing, Forms, and Auth Guards.

## Features
- **Login Page**:
  - Validation for credentials (admin / admin123).
  - Error handling.
- **Home Page**:
  - Protected by `AuthGuard`.
  - CRUD operations for Student data (Name, Email, Age).
  - Data persistence using `localStorage`.
  - "No data available" state.
- **Bonus Features**:
  - Logout functionality.
  - Route Guards.
  - LocalStorage persistence.

## Technologies
- Angular 19+
- Bootstrap 5
- TypeScript

## Setup & Run
1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Application**:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`.

3. **Build**:
   ```bash
   ng build
   ```

## Login Credentials
- **Username**: `admin`
- **Password**: `admin123`
