
# Online Course Sales System

## Description
This project is a backend system for an online course sales platform, developed using Node.js, Express.js, TypeScript, and MongoDB. The system allows users to register, log in, purchase courses, and apply discount coupons. The application is structured following the principles of SOLID and clean architecture.

## Features
- **User Authentication**: Users can register and log in to the system.
- **Course Management**: CRUD operations for managing courses, including the ability to add, edit, view, and delete courses.
- **Order Management**: Users can place orders for courses, with support for applying discount coupons.
- **Coupon Management**: CRUD operations for managing discount coupons.
- **Protected Routes**: Routes that require authentication to access certain resources.

## Technologies Used
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for building the RESTful API.
- **TypeScript**: Superset of JavaScript that adds static typing to the language.
- **MongoDB**: NoSQL database for storing user, course, order, and coupon data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **bcrypt**: For hashing passwords.

## Project Structure
The project follows a modular structure with the following main directories:

```
/project-root
│
├── /config
│   └── database.ts
│
├── /models
│   ├── User.ts
│   ├── Course.ts
│   ├── Order.ts
│   └── Coupon.ts
│
├── /repositories
│   ├── UserRepository.ts
│   ├── CourseRepository.ts
│   ├── OrderRepository.ts
│   └── CouponRepository.ts
│
├── /services
│   ├── AuthService.ts
│   ├── CourseService.ts
│   ├── OrderService.ts
│   └── CouponService.ts
│
├── /controllers
│   ├── AuthController.ts
│   ├── CourseController.ts
│   ├── OrderController.ts
│   └── CouponController.ts
│
├── /routes
│   ├── authRoutes.ts
│   ├── courseRoutes.ts
│   ├── orderRoutes.ts
│   └── couponRoutes.ts
│
├── /middlewares
│   └── authMiddleware.ts
│
├── /utils
│   └── cryptoUtils.ts
│   └── jwtUtils.ts
│
└── server.ts
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/online-course-sales-system.git
   cd online-course-sales-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root of the project with the following variables:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/mydatabase
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```

5. **API Endpoints**
   The following endpoints are available:
   - **Authentication**:
     - POST `/api/auth/register`
     - POST `/api/auth/login`
   - **Courses**:
     - POST `/api/courses`
     - GET `/api/courses/:id`
     - GET `/api/courses`
     - PUT `/api/courses/:id`
     - DELETE `/api/courses/:id`
   - **Orders**:
     - POST `/api/orders`
     - GET `/api/orders/:id`
     - GET `/api/orders`
     - PUT `/api/orders/:id`
     - DELETE `/api/orders/:id`
   - **Coupons**:
     - POST `/api/coupons`
     - GET `/api/coupons/:id`
     - GET `/api/coupons/code/:code`
     - GET `/api/coupons`
     - PUT `/api/coupons/:id`
     - DELETE `/api/coupons/:id`

## Endpoints

### Authentication

#### Register User
- **URL**: `/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **201 Created**: User successfully registered.
  - **400 Bad Request**: Error in registration.
  
#### Login User
- **URL**: `/auth/login`
- **Method**: `POST`
- **Description**: Logs in a user.
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **200 OK**: Returns the user data and JWT token.
  - **400 Bad Request**: Invalid credentials.

### Courses

#### Create Course
- **URL**: `/courses`
- **Method**: `POST`
- **Description**: Creates a new course.
- **Request Body**:
  ```json
  {
    "name": "Course Name",
    "description": "Course Description",
    "image": "image-url",
    "price": 100
  }
  ```
- **Response**:
  - **201 Created**: Course successfully created.
  - **400 Bad Request**: Error in creating the course.

#### Get Course by ID
- **URL**: `/courses/{id}`
- **Method**: `GET`
- **Description**: Retrieves a course by its ID.
- **Response**:
  - **200 OK**: Returns the course data.
  - **404 Not Found**: Course not found.

#### Get All Courses
- **URL**: `/courses`
- **Method**: `GET`
- **Description**: Retrieves all courses.
- **Response**:
  - **200 OK**: Returns an array of courses.

#### Update Course
- **URL**: `/courses/{id}`
- **Method**: `PUT`
- **Description**: Updates a course by its ID.
- **Request Body**:
  ```json
  {
    "name": "Updated Course Name",
    "description": "Updated Course Description",
    "image": "updated-image-url",
    "price": 150
  }
  ```
- **Response**:
  - **200 OK**: Course successfully updated.
  - **404 Not Found**: Course not found.

#### Delete Course
- **URL**: `/courses/{id}`
- **Method**: `DELETE`
- **Description**: Deletes a course by its ID.
- **Response**:
  - **200 OK**: Course successfully deleted.
  - **404 Not Found**: Course not found.

### Orders

#### Create Order
- **URL**: `/orders`
- **Method**: `POST`
- **Description**: Creates a new order.
- **Request Body**:
  ```json
  {
    "user": "user-id",
    "courses": ["course-id-1", "course-id-2"],
    "coupon": "coupon-id"
  }
  ```
- **Response**:
  - **201 Created**: Order successfully created.
  - **400 Bad Request**: Error in creating the order.

#### Get Order by ID
- **URL**: `/orders/{id}`
- **Method**: `GET`
- **Description**: Retrieves an order by its ID.
- **Response**:
  - **200 OK**: Returns the order data.
  - **404 Not Found**: Order not found.

#### Get All Orders
- **URL**: `/orders`
- **Method**: `GET`
- **Description**: Retrieves all orders.
- **Response**:
  - **200 OK**: Returns an array of orders.

#### Update Order
- **URL**: `/orders/{id}`
- **Method**: `PUT`
- **Description**: Updates an order by its ID.
- **Request Body**:
  ```json
  {
    "status": "paid"
  }
  ```
- **Response**:
  - **200 OK**: Order successfully updated.
  - **404 Not Found**: Order not found.

#### Delete Order
- **URL**: `/orders/{id}`
- **Method**: `DELETE`
- **Description**: Deletes an order by its ID.
- **Response**:
  - **200 OK**: Order successfully deleted.
  - **404 Not Found**: Order not found.

### Coupons

#### Create Coupon
- **URL**: `/coupons`
- **Method**: `POST`
- **Description**: Creates a new coupon.
- **Request Body**:
  ```json
  {
    "code": "DISCOUNT10",
    "discountPercentage": 10,
    "validFrom": "2024-01-01",
    "validTo": "2024-12-31"
  }
  ```
- **Response**:
  - **201 Created**: Coupon successfully created.
  - **400 Bad Request**: Error in creating the coupon.

#### Get Coupon by ID
- **URL**: `/coupons/{id}`
- **Method**: `GET`
- **Description**: Retrieves a coupon by its ID.
- **Response**:
  - **200 OK**: Returns the coupon data.
  - **404 Not Found**: Coupon not found.

#### Get Coupon by Code
- **URL**: `/coupons/code/{code}`
- **Method**: `GET`
- **Description**: Retrieves a coupon by its code.
- **Response**:
  - **200 OK**: Returns the coupon data.
  - **404 Not Found**: Coupon not found.

#### Get All Coupons
- **URL**: `/coupons`
- **Method**: `GET`
- **Description**: Retrieves all coupons.
- **Response**:
  - **200 OK**: Returns an array of coupons.

#### Update Coupon
- **URL**: `/coupons/{id}`
- **Method**: `PUT`
- **Description**: Updates a coupon by its ID.
- **Request Body**:
  ```json
  {
    "discountPercentage": 15
  }
  ```
- **Response**:
  - **200 OK**: Coupon successfully updated.
  - **404 Not Found**: Coupon not found.

#### Delete Coupon
- **URL**: `/coupons/{id}`
- **Method**: `DELETE`
- **Description**: Deletes a coupon by its ID.
- **Response**:
  - **200 OK**: Coupon successfully deleted.
  - **404 Not Found**: Coupon not found.

## Testing

To run the tests, use the following command:

```bash
npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

## Contact

For questions or suggestions, feel free to reach out:

- **Email**: jorge.holguin1105@gmail.com
- **GitHub**: [jorge-holguin](https://github.com/your-github-username)
