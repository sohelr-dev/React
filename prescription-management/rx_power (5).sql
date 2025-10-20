-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2025 at 09:22 AM
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
-- Database: `rx_power`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `appointment_date` datetime DEFAULT NULL,
  `status` enum('pending','confirmed','completed','cancelled') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `doctor_id`, `patient_id`, `appointment_date`, `status`) VALUES
(1, 1, 1, '2025-10-01 10:00:00', 'confirmed'),
(2, 1, 2, '2025-10-01 11:00:00', 'pending'),
(3, 2, 1, '2025-10-02 09:00:00', 'completed'),
(4, 3, 3, '2025-10-03 14:30:00', 'confirmed'),
(6, 3, 2, '2025-10-11 00:57:00', 'confirmed'),
(8, 2, 2, '2025-10-19 15:00:00', 'confirmed'),
(9, 2, 0, '2025-10-20 12:27:00', 'confirmed'),
(10, 2, 2, '2025-10-20 12:28:00', 'confirmed');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  `chamber_name` varchar(100) DEFAULT NULL,
  `chamber_address` text DEFAULT NULL,
  `bmdc_reg_no` varchar(50) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `user_id`, `specialization`, `chamber_name`, `chamber_address`, `bmdc_reg_no`, `photo`) VALUES
(1, 2, 'Cardiology', 'Heart Care', 'Banani, Dhaka', 'BMDC12345', NULL),
(2, 3, 'General Medicine', 'Health Point', 'Uttara, Dhaka', 'BMDC23456', NULL),
(3, 6, 'Dermatology', 'Skin Plus', 'Mirpur, Dhaka', 'BMDC34567', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dosages`
--

CREATE TABLE `dosages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dosages`
--

INSERT INTO `dosages` (`id`, `name`) VALUES
(1, '1 + 1 + 1'),
(2, '1 + 0 + 1'),
(3, '0 + 1 + 0'),
(4, '1 + 0 + 0'),
(5, '0 + 0 + 1'),
(6, '1 + 1 + 0'),
(7, '0 + 1 + 1'),
(8, '2 times daily'),
(9, '3 times daily'),
(10, 'As directed by doctor');

-- --------------------------------------------------------

--
-- Table structure for table `durations`
--

CREATE TABLE `durations` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `durations`
--

INSERT INTO `durations` (`id`, `name`) VALUES
(1, '3 days'),
(2, '5 days'),
(3, '7 days'),
(4, '10 days'),
(5, '14 days'),
(6, '21 days'),
(7, '1 month'),
(8, '2 months'),
(9, '3 months'),
(10, 'As long as advised');

-- --------------------------------------------------------

--
-- Table structure for table `instructions`
--

CREATE TABLE `instructions` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instructions`
--

INSERT INTO `instructions` (`id`, `text`) VALUES
(1, 'After meal'),
(2, 'Before meal'),
(3, 'Empty stomach'),
(4, 'With plenty of water'),
(5, 'At bedtime'),
(6, 'After breakfast'),
(7, 'After lunch'),
(8, 'After dinner'),
(9, 'Avoid dairy products'),
(10, 'Do not drive or operate heavy machinery'),
(11, 'Take with milk'),
(12, 'Take after food'),
(13, 'Consult doctor if symptoms persist'),
(14, 'Store in a cool, dry place'),
(15, 'Take with a full glass of water');

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `generic_name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `medicine_type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id`, `name`, `generic_name`, `description`, `medicine_type_id`) VALUES
(1, 'Napa', 'Paracetamol', 'Pain reliever and fever reducer', NULL),
(2, 'Seclo', 'Omeprazole', 'Reduces stomach acid', NULL),
(3, 'Amdocal', 'Amlodipine', 'Used to treat high blood pressure', NULL),
(4, 'Monas', 'Montelukast', 'For asthma and allergies', NULL),
(5, 'Maxpro', 'Esomeprazole', 'Gastric issues', NULL),
(6, 'Ace', 'Paracetamol', 'Mild pain reliever', NULL),
(7, 'Norflox', 'Norfloxacin', 'Antibiotic', NULL),
(8, 'Lorix-Plus 70ml', 'Etoris', 'pain killer', 1),
(9, 'Lorix-Plus 70ml', 'Etoris', 'Axima revier', 2),
(10, 'Napa Extented 500mg', 'Paracitamole', 'pain killer', 2),
(11, 'Tuska', 'Paracitamole', 'Axima revier', 3);

-- --------------------------------------------------------

--
-- Table structure for table `medicine_types`
--

CREATE TABLE `medicine_types` (
  `id` int(11) NOT NULL,
  `type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicine_types`
--

INSERT INTO `medicine_types` (`id`, `type_name`) VALUES
(1, 'Tablet'),
(2, 'Capsule'),
(3, 'Syrup'),
(4, 'Injection'),
(5, 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `user_id`, `age`, `gender`, `address`, `phone`) VALUES
(1, 4, 30, 'male', 'Dhaka', '01710000001'),
(2, 5, 25, 'female', 'Chittagong', '01710000002'),
(3, 7, 45, 'male', 'Sylhet', '01710000003');

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `id` int(11) NOT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `advice` text DEFAULT NULL,
  `tests` text DEFAULT NULL,
  `follow_up_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`id`, `appointment_id`, `doctor_id`, `patient_id`, `diagnosis`, `notes`, `advice`, `tests`, `follow_up_date`, `created_at`) VALUES
(1, 1, 1, 1, 'Hypertension', 'BP 160/100', 'Reduce salt intake, daily walk', 'CBC, Creatinine', '2025-10-15', '2025-09-28 19:37:48'),
(2, 2, 1, 2, 'Fever', 'Temp: 101°F', 'Plenty of fluid, paracetamol', 'CBC', '2025-10-08', '2025-09-28 19:37:48'),
(3, 3, 2, 1, 'GERD', 'Acid reflux symptoms', 'Avoid spicy food', 'LFT', '2025-10-20', '2025-09-28 19:37:48'),
(4, 5465, 1, 1, 'fgh', 'dfg', 'gggggggg', NULL, '0000-00-00', '2025-10-20 05:56:02'),
(5, 0, 0, 0, '', '', '', NULL, '0000-00-00', '2025-10-20 05:57:03'),
(6, 9, 2, 2, 'sdf', 'dsfsd', 'dsfsd', NULL, '2025-10-23', '2025-10-20 05:58:15'),
(7, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 06:30:08'),
(8, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 06:53:34'),
(9, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 06:53:34'),
(10, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 06:54:13'),
(11, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 06:58:19'),
(12, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 06:59:02'),
(13, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 06:59:36'),
(14, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 07:00:25'),
(15, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 07:08:06'),
(16, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 07:18:05'),
(17, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 07:19:45'),
(18, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 07:20:13');

-- --------------------------------------------------------

--
-- Table structure for table `prescription_history`
--

CREATE TABLE `prescription_history` (
  `id` int(11) NOT NULL,
  `prescription_id` int(11) DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `advice` text DEFAULT NULL,
  `tests` text DEFAULT NULL,
  `follow_up_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescription_history`
--

INSERT INTO `prescription_history` (`id`, `prescription_id`, `doctor_id`, `patient_id`, `diagnosis`, `notes`, `advice`, `tests`, `follow_up_date`, `created_at`) VALUES
(1, 1, 1, 1, 'Hypertension', 'BP 160/100', 'Reduce salt intake, daily walk', 'CBC, Creatinine', '2025-10-15', '2025-09-28 19:38:36');

-- --------------------------------------------------------

--
-- Table structure for table `prescription_history_tests`
--

CREATE TABLE `prescription_history_tests` (
  `id` int(11) NOT NULL,
  `prescription_history_id` int(11) NOT NULL,
  `test_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescription_history_tests`
--

INSERT INTO `prescription_history_tests` (`id`, `prescription_history_id`, `test_id`) VALUES
(1, 1, 1),
(2, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `prescription_items`
--

CREATE TABLE `prescription_items` (
  `id` int(11) NOT NULL,
  `prescription_id` int(11) DEFAULT NULL,
  `medicine_id` int(11) DEFAULT NULL,
  `dosage_id` int(11) DEFAULT NULL,
  `duration_id` int(11) DEFAULT NULL,
  `instruction_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescription_items`
--

INSERT INTO `prescription_items` (`id`, `prescription_id`, `medicine_id`, `dosage_id`, `duration_id`, `instruction_id`) VALUES
(1, 1, 1, 1, 2, 1),
(2, 1, 2, 2, 3, 2),
(3, 2, 3, 8, 4, 4),
(4, 2, 4, 5, 5, 5),
(5, 3, 5, 10, 9, 13),
(6, 1, 1, 1, 1, 1),
(7, 0, 0, 0, 0, 0),
(8, 11, 0, 0, 0, 0),
(9, 11, 0, 0, 0, 0),
(10, 12, 11, 0, 0, 0),
(11, 12, 9, 0, 0, 0),
(12, 13, 11, 9, 1, 1),
(13, 13, 9, 8, 2, 1),
(14, 14, 11, 9, 1, 1),
(15, 14, 9, 8, 2, 1),
(16, 15, 11, 9, 1, 1),
(17, 15, 9, 8, 2, 1),
(18, 16, 11, 9, 1, 1),
(19, 16, 9, 8, 2, 1),
(20, 17, 11, 9, 1, 1),
(21, 17, 9, 8, 2, 1),
(22, 18, 11, 9, 1, 1),
(23, 18, 9, 8, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `prescription_tests`
--

CREATE TABLE `prescription_tests` (
  `id` int(11) NOT NULL,
  `prescription_id` int(11) NOT NULL,
  `test_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescription_tests`
--

INSERT INTO `prescription_tests` (`id`, `prescription_id`, `test_id`) VALUES
(1, 1, 1),
(2, 1, 5),
(3, 2, 1),
(4, 3, 6),
(5, 0, 0),
(6, 1, 0),
(7, 1, 1),
(8, 15, 2),
(9, 15, 3),
(10, 16, 2),
(11, 17, 2),
(12, 18, 2);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`) VALUES
(1, 'admin'),
(2, 'doctor'),
(3, 'patient');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `name`, `description`) VALUES
(1, 'CBC', 'Complete Blood Count'),
(2, 'X-Ray Chest', 'Chest imaging'),
(3, 'ECG', 'Electrocardiogram'),
(4, 'Blood Sugar', 'Fasting & Postprandial glucose levels'),
(5, 'Creatinine', 'Kidney function test'),
(6, 'LFT', 'Liver Function Test'),
(7, 'Urine R/M/E', 'Routine urine test');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `photo` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role_id`, `created_at`, `photo`, `phone`) VALUES
(1, 'Admin User', 'admin@rx.com', 'adminpass', 1, '2025-09-28 19:37:48', NULL, NULL),
(2, 'Dr. Arefin', 'arefin@rx.com', '', 2, '2025-09-28 19:37:48', 'uploads/users/20251018-052514.jpeg', '25455554'),
(3, 'Dr. Tania', 'tania@rx.com', '', 2, '2025-09-28 19:37:48', 'uploads/users/20251018-052457.jpg', '25445445'),
(4, 'Patient Ali', 'ali@rx.com', '123456', 3, '2025-09-28 19:37:48', NULL, NULL),
(5, 'Patient Jannat', 'jannat@rx.com', '123456', 3, '2025-09-28 19:37:48', NULL, NULL),
(6, 'Dr. Azad', 'azad@rx.com', '', 2, '2025-09-28 19:37:48', 'uploads/users/20251018-052430.jpg', '01580947'),
(7, 'Patient Rafi', 'rafi@rx.com', '123456', 3, '2025-09-28 19:37:48', NULL, NULL),
(11, 'Sohel Rana', 'sdds@gmail.com', '', 3, '2025-10-06 15:04:54', 'uploads/users/20251006-170454.png', '25455554'),
(13, 'Sohel Rana', 'ssssds@gmail.com', '', 3, '2025-10-06 15:22:21', '', '25455554'),
(15, 'Sohel Rana', 'sss2ds@gmail.com', '', 3, '2025-10-06 15:27:02', 'uploads/users/20251006-172702.png', '25455554'),
(16, 'Mina', 'mina3@gmail.com', '', 3, '2025-10-06 16:48:54', 'uploads/users/20251006-184854.jpg', '015875548554'),
(17, 'Mina2', 'min1a@gmail.com', '', 3, '2025-10-06 17:08:00', 'uploads/users/20251006-190800.png', '015875548554');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dosages`
--
ALTER TABLE `dosages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `durations`
--
ALTER TABLE `durations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instructions`
--
ALTER TABLE `instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicine_types`
--
ALTER TABLE `medicine_types`
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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prescription_history`
--
ALTER TABLE `prescription_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prescription_history_tests`
--
ALTER TABLE `prescription_history_tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prescription_items`
--
ALTER TABLE `prescription_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prescription_tests`
--
ALTER TABLE `prescription_tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `dosages`
--
ALTER TABLE `dosages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `durations`
--
ALTER TABLE `durations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `instructions`
--
ALTER TABLE `instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `medicine_types`
--
ALTER TABLE `medicine_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `prescription_history`
--
ALTER TABLE `prescription_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prescription_history_tests`
--
ALTER TABLE `prescription_history_tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `prescription_items`
--
ALTER TABLE `prescription_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `prescription_tests`
--
ALTER TABLE `prescription_tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
