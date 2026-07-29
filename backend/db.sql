-- user Table query


CREATE TABLE
  Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50),
    Email VARCHAR(100) NOT NULL UNIQUE,
    Phone VARCHAR(20) UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    Role ENUM('Admin', 'Manager', 'Receptionist', 'Customer') NOT NULL DEFAULT 'Customer',
    Gender ENUM('Male', 'Female', 'Other'),
    DateOfBirth DATE,
    Address TEXT,
    ProfileImage VARCHAR(255),
    IsActive BOOLEAN DEFAULT TRUE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );


-- //hotels tables query

CREATE TABLE hotels (
    hotel_id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_name VARCHAR(150) NOT NULL,
    owner_name VARCHAR(100) NOT NULL,
    location VARCHAR(200) NOT NULL,
    status ENUM('Active', 'Inactive', 'Pending') DEFAULT 'Pending'
);

-- time slots

CREATE TABLE timeslots (
    slot_id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    availability ENUM('Available', 'Booked') DEFAULT 'Available',

    CONSTRAINT fk_timeslot_hotel
        FOREIGN KEY (hotel_id)
        REFERENCES hotels(hotel_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


--table booking 

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    hotel_id INT NOT NULL,
    slot_id INT NOT NULL,
    status ENUM('Pending', 'Confirmed', 'Cancelled', 'Completed')
        DEFAULT 'Pending',

    CONSTRAINT fk_booking_customer
        FOREIGN KEY (customer_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_booking_hotel
        FOREIGN KEY (hotel_id)
        REFERENCES hotels(hotel_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_booking_slot
        FOREIGN KEY (slot_id)
        REFERENCES timeslots(slot_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


-- orders tble query

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    food_items TEXT,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('Pending', 'Preparing', 'Delivered', 'Cancelled')
        DEFAULT 'Pending',

    CONSTRAINT fk_order_booking
        FOREIGN KEY (booking_id)
        REFERENCES bookings(booking_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);