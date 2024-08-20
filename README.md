# Car Dealer App
Welcome to the Car Dealer App! This application allows users to explore and compare car makes, models, and years. It provides a user-friendly interface for browsing different vehicles based on their make and model year.

## Features
- View a list of car makes and models.
- Filter vehicles by make and year.
- Fetch and display vehicle data from a reliable API.
- Responsive design for seamless use on various devices.

## Getting Started
To get started with the Car Dealer App, follow these steps:

### Prerequisites
Ensure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
 
1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/car-dealer-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd car-dealer-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Setting Up Environment Variables

The application requires environment variables for configuration.

1. Create a `.env.local` file in the root of the project.

2. Copy the example environment variables from `.env.example` to your `.env.local` file:

   ```bash
   cp .env.example .env.local
   ```

3. Edit the `.env.local` file to include your configuration settings.

### Running the Development Server
To start the development server, use the following command:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the application in action.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

After building, you can start the production server with:

```bash
npm start
```