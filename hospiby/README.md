# Hospiby

This project is a web application that allows users to find nearby hospitals using the MERN stack. The app uses the Google Maps API to display a map with the user's current location and nearby hospitals.

## Table of Contents
Installation
Usage
Technologies Used
Contributing
License
## Installation
Clone the repository:
bash
Copy code
git clone https://github.com/Tejas20-03/Envisage/hospiby.git
Install dependencies in the server directory:
bash
Copy code
cd server
npm install
Install dependencies in the client directory:
bash
Copy code
cd ../client
npm install
Create a .env file in the server directory and add your Google Maps API key:
makefile
Copy code
GOOGLE_MAPS_API_KEY=your-api-key
Start the development server:
bash
Copy code
cd ../server
npm run dev
## Usage
Open your web browser and navigate to http://localhost:3000.

The app will ask for permission to access your current location. Click "Allow" to proceed.

The map will display your current location as a blue marker and nearby hospitals as red markers.

Click on a red marker to see the name and address of the hospital.

## Technologies Used
MongoDB
Express.js
React
Node.js
Google Maps API
Bootstrap
## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.