# Angular Front-End for Arithmetic Calculator

## Description

This project is the front-end application for the Arithmetic Calculator REST API, developed using Angular. It provides a user interface to interact with the REST API for performing arithmetic operations.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (preferably the latest LTS version).
- **Angular CLI**: Install the Angular CLI globally using npm.

   ```bash
   npm install -g @angular/cli
   ```

## Running the Project Locally

Follow these steps to run the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-angular-repository.git
   cd your-angular-repository
   ```

2. **Install Dependencies**

   Use npm to install the project's dependencies.

   ```bash
   npm install
   ```

3. **Run the Application**

   Use Angular CLI to serve the application locally. This will start a development server and open the application in your default web browser.

   ```bash
   ng serve
   ```

   By default, the application will be available at `http://localhost:4200`.

4. **Access the Application**

   Once the application is running, you can access it at:

   ```
   http://localhost:4200
   ```

   The application will connect to the API endpoints configured in `src/environments/environment.ts`.

## Configuration

The application is configured using Angular environment files. The API URL and other environment-specific settings are managed in `src/environments/environment.ts` for development and `src/environments/environment.prod.ts` for production.

Example configuration in `environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api/v1'
};
```

For production deployment, update `environment.prod.ts` with the production API URL.

## Deployment

The front-end is deployed to an S3 bucket and served as a static website.

- **S3 Bucket URL**: `http://arithmetic-calculator-app-bucket.s3-website.eu-north-1.amazonaws.com`

```

## Building for Production

To build the application for production, use Angular CLI to create a production build. This will optimize and minify the application for deployment.

```bash
ng build --prod
```

The build artifacts will be placed in the `dist/` directory. You can upload these files to your S3 bucket for deployment.

## Acknowledgements

- [Angular](https://angular.io/)
- [Node.js](https://nodejs.org/)
- [AWS S3](https://aws.amazon.com/s3/)

---

Replace `path/to/your/system-design.png` with the actual path to your PNG file. Adjust the URLs, environment configurations, and other specifics as needed for your project. If you have additional sections or details, feel free to let me know!
