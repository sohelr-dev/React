-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2025 at 12:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prescription-management`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `appointment_date` datetime DEFAULT NULL,
  `status` enum('pending','completed','cancelled') DEFAULT 'pending',
  `notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patient_id`, `doctor_id`, `appointment_date`, `status`, `notes`) VALUES
(1, 1, 1, '2025-09-28 10:00:00', 'pending', 'General checkup'),
(2, 2, 2, '2025-09-29 11:30:00', 'completed', 'Follow-up visit'),
(3, 3, 1, '2025-09-30 15:00:00', 'pending', 'Chest pain'),
(4, 4, 5, '2025-10-01 09:30:00', 'cancelled', 'Patient not available'),
(5, 5, 2, '2025-10-02 14:00:00', 'pending', 'High blood pressure'),
(6, 6, 1, '2025-10-03 12:00:00', 'pending', 'Diabetes check');

-- --------------------------------------------------------

--
-- Table structure for table `chambers`
--

CREATE TABLE `chambers` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `address` text DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chambers`
--

INSERT INTO `chambers` (`id`, `name`, `address`, `logo`, `phone`) VALUES
(1, 'City Health Clinic', '123 Main Street, Dhaka', 'city.png', '01711001122'),
(2, 'Green Life Chamber', '45 Green Road, Dhaka', 'green.png', '01722002233'),
(3, 'Medicare Clinic', '77 North Road, Dhaka', 'medicare.png', '01733003344'),
(4, 'Apollo Chamber', 'Banani, Dhaka', 'apollo.png', '01744004455'),
(5, 'Square Clinic', 'Dhanmondi, Dhaka', 'square.png', '01755005566');

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `generic_name` varchar(150) DEFAULT NULL,
  `type` enum('tablet','capsule','syrup','injection','others') DEFAULT NULL,
  `strength` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id`, `name`, `generic_name`, `type`, `strength`, `company`) VALUES
(1, 'Paracetamol', 'Acetaminophen', 'tablet', '500mg', 'Square'),
(2, 'Omeprazole', 'Omeprazole', 'capsule', '20mg', 'Beximco'),
(3, 'Cough Syrup', 'Dextromethorphan', 'syrup', '100ml', 'ACI'),
(4, 'Insulin', 'Human Insulin', 'injection', '10ml', 'Incepta'),
(5, 'Antihistamine', 'Cetirizine', 'tablet', '10mg', 'Square'),
(6, 'Vitamin C', 'Ascorbic Acid', 'tablet', '500mg', 'Eskayef');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `blood_group` varchar(10) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `gender`, `age`, `phone`, `address`, `blood_group`, `created_at`) VALUES
(1, 'Hasan Ali', 'male', 32, '01911001122', 'Uttara, Dhaka', 'A+', '2025-09-26 22:08:25'),
(2, 'Mitu Akter', 'female', 27, '01922002233', 'Mirpur, Dhaka', 'B+', '2025-09-26 22:08:25'),
(3, 'Shamim Hossain', 'male', 40, '01933003344', 'Banani, Dhaka', 'O+', '2025-09-26 22:08:25'),
(4, 'Rima Khatun', 'female', 19, '01944004455', 'Gulshan, Dhaka', 'AB+', '2025-09-26 22:08:25'),
(5, 'Jamil Khan', 'male', 55, '01955005566', 'Dhanmondi, Dhaka', 'A-', '2025-09-26 22:08:25'),
(6, 'Mona Begum', 'female', 45, '01966006677', 'Mohakhali, Dhaka', 'B-', '2025-09-26 22:08:25');

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `diagnosis` text DEFAULT NULL,
  `advice` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`id`, `patient_id`, `doctor_id`, `diagnosis`, `advice`, `created_at`) VALUES
(1, 1, 1, 'Fever and cough', 'Take rest and drink fluids', '2025-09-26 22:08:25'),
(2, 2, 2, 'Gastric problem', 'Avoid spicy food', '2025-09-26 22:08:25'),
(3, 3, 1, 'High blood pressure', 'Take medicine regularly', '2025-09-26 22:08:25'),
(4, 4, 5, 'Skin allergy', 'Apply ointment twice daily', '2025-09-26 22:08:25'),
(5, 5, 2, 'Diabetes', 'Regular checkup and control diet', '2025-09-26 22:08:25'),
(6, 6, 1, 'Back pain', 'Physiotherapy suggested', '2025-09-26 22:08:25');

-- --------------------------------------------------------

--
-- Table structure for table `prescription_history`
--

CREATE TABLE `prescription_history` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `prescription_id` int(11) NOT NULL,
  `visit_summary` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescription_history`
--

INSERT INTO `prescription_history` (`id`, `patient_id`, `prescription_id`, `visit_summary`, `created_at`) VALUES
(1, 1, 1, 'Fever treatment, recovered', '2025-09-26 22:08:25'),
(2, 2, 2, 'Gastric issue controlled', '2025-09-26 22:08:25'),
(3, 3, 3, 'Blood pressure stable now', '2025-09-26 22:08:25'),
(4, 4, 4, 'Allergy under observation', '2025-09-26 22:08:25'),
(5, 5, 5, 'Diabetes medicine started', '2025-09-26 22:08:25'),
(6, 6, 6, 'Physiotherapy suggested', '2025-09-26 22:08:25');

-- --------------------------------------------------------

--
-- Table structure for table `prescription_medicines`
--

CREATE TABLE `prescription_medicines` (
  `id` int(11) NOT NULL,
  `prescription_id` int(11) NOT NULL,
  `medicine_id` int(11) NOT NULL,
  `dosage` varchar(50) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `instruction` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescription_medicines`
--

INSERT INTO `prescription_medicines` (`id`, `prescription_id`, `medicine_id`, `dosage`, `duration`, `instruction`) VALUES
(1, 1, 1, '1+1+1', '5 days', 'After meal'),
(2, 2, 2, '0+0+1', '7 days', 'Before dinner'),
(3, 3, 5, '1+0+1', '10 days', 'After meal'),
(4, 4, 3, '2 spoon', '7 days', 'Twice daily'),
(5, 5, 4, '10 units', '30 days', 'Morning'),
(6, 6, 6, '1+0+0', '15 days', 'After breakfast');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `prescription_id` int(11) NOT NULL,
  `test_name` varchar(150) DEFAULT NULL,
  `notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `prescription_id`, `test_name`, `notes`) VALUES
(1, 1, 'Blood Test', 'Check CBC'),
(2, 2, 'Ultrasound', 'Abdomen area'),
(3, 3, 'ECG', 'Heart check'),
(4, 4, 'Skin Biopsy', 'Allergy test'),
(5, 5, 'Blood Sugar', 'Fasting required'),
(6, 6, 'X-Ray', 'Lower back pain');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('doctor','staff','admin') DEFAULT 'doctor',
  `bmdc_no` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `chamber_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `bmdc_no`, `phone`, `chamber_id`, `created_at`) VALUES
(1, 'Dr. Rahim', 'rahim@example.com', '123456', 'doctor', 'BMDC1234', '01811001122', 1, '2025-09-26 22:08:24'),
(2, 'Dr. Karim', 'karim@example.com', '123456', 'doctor', 'BMDC2345', '01822002233', 2, '2025-09-26 22:08:24'),
(3, 'Nurse Asha', 'asha@example.com', '123456', 'staff', NULL, '01833003344', 1, '2025-09-26 22:08:24'),
(4, 'Admin User', 'admin@example.com', '123456', 'admin', NULL, '01844004455', 3, '2025-09-26 22:08:24'),
(5, 'Dr. Rumi', 'rumi@example.com', '123456', 'doctor', 'BMDC3456', '01855005566', 4, '2025-09-26 22:08:24'),
(6, 'Receptionist Liza', 'liza@example.com', '123456', 'staff', NULL, '01866006677', 5, '2025-09-26 22:08:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `chambers`
--
ALTER TABLE `chambers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `prescription_history`
--
ALTER TABLE `prescription_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `prescription_id` (`prescription_id`);

--
-- Indexes for table `prescription_medicines`
--
ALTER TABLE `prescription_medicines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prescription_id` (`prescription_id`),
  ADD KEY `medicine_id` (`medicine_id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prescription_id` (`prescription_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `chamber_id` (`chamber_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `chambers`
--
ALTER TABLE `chambers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prescription_history`
--
ALTER TABLE `prescription_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prescription_medicines`
--
ALTER TABLE `prescription_medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD CONSTRAINT `prescriptions_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  ADD CONSTRAINT `prescriptions_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `prescription_history`
--
ALTER TABLE `prescription_history`
  ADD CONSTRAINT `prescription_history_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  ADD CONSTRAINT `prescription_history_ibfk_2` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`);

--
-- Constraints for table `prescription_medicines`
--
ALTER TABLE `prescription_medicines`
  ADD CONSTRAINT `prescription_medicines_ibfk_1` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`),
  ADD CONSTRAINT `prescription_medicines_ibfk_2` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`);

--
-- Constraints for table `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`chamber_id`) REFERENCES `chambers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
