# FarmoPortal

FarmoPortal is a comprehensive platform designed specifically for farmers. It allows farmers to purchase farming equipment and supplies, view information about different crops for various seasons, and much more. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), FarmoPortal aims to empower farmers with the information and tools they need to succeed.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication:** Secure login and registration for farmers.
- **Product Purchase:** Browse and purchase farming equipment and supplies.
- **Crop Information:** View detailed information about crops suitable for different seasons.
- **User Dashboard:** Personalized dashboard for farmers to manage their purchases and crop information.
- **Responsive Design:** Mobile-friendly design to ensure accessibility on all devices.

## Technologies Used

- **MongoDB:** Database to store user data, product details, and crop information.
- **Express.js:** Backend framework to handle server-side logic and API requests.
- **React.js:** Frontend library to build the user interface.
- **Node.js:** Runtime environment to execute JavaScript on the server.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/farmoportal.git
   cd farmoportal
   ```

2. **Install server dependencies:**
   ```sh
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```sh
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

5. **Run the server and client:**
   - Start the server:
     ```sh
     cd server
     npm start
     ```
   - Start the client:
     ```sh
     cd ../client
     npm start
     ```

## Usage

Once the application is running, you can access it at `http://localhost:3000`. 

- **Register/Login:** Create a new account or login with your existing credentials.
- **Browse Products:** Explore and purchase various farming equipment and supplies.
- **View Crop Information:** Get details about which crops to plant in different seasons.
- **Dashboard:** Manage your profile, view your purchases, and access crop information.

## API Endpoints

### User Routes

- **POST /api/users/register**
  - Register a new user.
- **POST /api/users/login**
  - Authenticate a user and return a token.

### Product Routes

- **GET /api/products**
  - Get a list of all products.
- **GET /api/products/:id**
  - Get details of a specific product.

### Crop Routes

- **GET /api/crops**
  - Get a list of all crops.
- **GET /api/crops/:season**
  - Get crops suitable for a specific season.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
