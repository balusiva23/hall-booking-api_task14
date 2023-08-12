Certainly! Here's a sample README file that provides an overview of the API routes along with example responses:

---

# Hall Booking API
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This API allows you to manage room bookings for an event hall.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/balusiva23/hall-booking-api_task14.git
   ```

2. Install dependencies:

   ```bash
   cd hall-booking-api
   npm install
   ```

3. Set up your MongoDB connection by creating a `.env` file in the project root:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   node server.js
   ```
## API Documentation

Detailed documentation for using the Hall Booking API can be found [here](https://documenter.getpostman.com/view/24014367/2s9Xy5L9s7). This documentation provides information about available endpoints, request and response formats, and usage examples.


## API Endpoints

### Create a Room

- **Endpoint**: `POST /api/rooms`
- **Description**: Create a new room with details such as the number of seats, amenities, and price per hour.

**Request Body:**

```json
{
  "name": "Hall A",
  "seats": 100,
  "amenities": ["Projector", "Sound System"],
  "pricePerHour": 150
}
```

**Response (201 Created):**

```json
{
  "_id": "room_id",
  "name": "Hall A",
  "seats": 100,
  "amenities": ["Projector", "Sound System"],
  "pricePerHour": 150,
  "isBooked": false
}
```

### Book a Room

- **Endpoint**: `POST /api/bookings`
- **Description**: Book a room for a specific customer and time slot.

**Request Body:**

```json
{
  "customerName": "John Doe",
  "date": "2023-08-15",
  "startTime": "10:00 AM",
  "endTime": "12:00 PM",
  "roomId": "room_id"
}
```

**Response (201 Created):**

```json
{
  "_id": "booking_id",
  "customerName": "John Doe",
  "date": "2023-08-15",
  "startTime": "10:00 AM",
  "endTime": "12:00 PM",
  "roomId": "room_id"
}
```

### List All Rooms

- **Endpoint**: `GET /api/rooms`
- **Description**: Retrieve a list of all available rooms.

**Response (200 OK):**

```json
[
  {
    "_id": "room_id",
    "name": "Hall A",
    "seats": 100,
    "amenities": ["Projector", "Sound System"],
    "pricePerHour": 150,
    "isBooked": true
  },
  // ... other rooms
]
```

### List All Customers with Booked Data

- **Endpoint**: `GET /api/customers`
- **Description**: Retrieve a list of all customers with their booked room details.

**Response (200 OK):**

```json
[
  {
    "_id": "booking_id",
    "customerName": "John Doe",
    "date": "2023-08-15",
    "startTime": "10:00 AM",
    "endTime": "12:00 PM",
    "roomId": {
      "_id": "room_id",
      "name": "Hall A"
    }
  },
  // ... other customers
]
```

## Error Handling

- If a booking request conflicts with an existing booking, you will receive a `400 Bad Request` response with an error message.
- For other errors, you will receive a `500 Internal Server Error` response with an error message.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README to include additional information or details specific to your project.
