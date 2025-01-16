# Next.js Product Viewer with Shopping Cart

## Overview
This Next.js-based product viewer application now includes a shopping cart feature alongside its dynamic product viewing capabilities. The project demonstrates modern web development practices, emphasizing responsive design, efficient API integration, and user-friendly interfaces, with additional functionality for managing and displaying a shopping cart.

## Features
- **Dynamic Product Details**: Displays detailed product data, including title, description, price, category, and images, sourced from the "Product" API.
- **Shopping Cart**: Allows users to add items to the cart, view their selections, and see the total amount dynamically.
  - Modal integration to add items to the cart directly from the product page.
  - Cart page to manage and display selected items with a total cost summary.
- **Home Page**: Features the organization’s logo, product images, and an introduction/mission statement.
- **About Page**: Provides details about the organization and its product offerings.
- **Responsive Design**: Ensures a seamless experience across devices of various sizes.

## Tools and Technologies
- **React**: For building dynamic and reusable UI components.
- **Next.js**: For server-side rendering, routing, and performance optimization.
- **Fetch API**: For efficient and seamless API communication.
- **CSS**: For responsive and visually appealing styling.

## Getting Started
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-product-viewer
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
#### Development Mode
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

#### Production Mode
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

## Application Structure
- **`pages/index.js`**: Implements the Home page.
- **`pages/about.js`**: Implements the About page.
- **`pages/product/[id].js`**: Implements the dynamic route for individual product details.
- **`pages/cart.js`**: Implements the shopping cart page, displaying selected items and their total cost.
- **`components/ProductDetails.js`**: Component for rendering product details dynamically.
- **`components/Cart.js`**: Component for managing and displaying cart items.
- **`styles/`**: Contains CSS files for styling the application.

## Screenshots
Showcase the application with visuals (replace placeholders with actual screenshots):

![Screenshot (129)](https://github.com/user-attachments/assets/0795817f-ac37-43f1-b893-f49560cda540)
*Caption: Home page featuring the logo and introduction.*

![Screenshot (130)](https://github.com/user-attachments/assets/b7ccf0df-ddb5-4f43-add7-3d2379e2e1ef)
*Caption: About Page*

![Screenshot (125)](https://github.com/user-attachments/assets/47c6bc79-fd40-4021-89ec-63ab51ee28e7)
*Caption: All Products page*

![Screenshot (126)](https://github.com/user-attachments/assets/3da39e0e-22c7-4462-90f8-9e6331f462d9)
*Caption: Detailed product view with all key information.*

![Screenshot (128)](https://github.com/user-attachments/assets/ff207b7f-8ad6-4d04-89f0-a8e09807004c)
*Caption: Shopping cart page displaying selected items and total cost.*

## Highlights
This enhanced version of the application demonstrates:
- Modular, maintainable components using React for both product details and cart management.
- Efficient server-side rendering and routing with Next.js for optimized performance.
- Real-time API data integration to dynamically display product and cart information.
- A responsive and visually appealing interface that provides an intuitive shopping experience.

---

**Developed by Adnan Mohammed**
