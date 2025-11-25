-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2025 at 03:24 AM
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
  `status` enum('pending','confirmed','completed','cancelled','offline') DEFAULT 'pending'
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
(10, 2, 2, '2025-10-20 12:28:00', 'confirmed'),
(11, 3, 0, '2025-10-21 09:34:00', 'confirmed'),
(12, 2, 0, '2025-10-21 09:34:00', 'confirmed'),
(13, 2, 4, '2025-10-14 09:51:00', 'confirmed'),
(14, 2, 4, '2025-10-14 09:51:00', 'confirmed'),
(15, 0, 0, '2025-10-21 10:07:00', 'pending'),
(16, 2, 4, '2025-10-21 10:07:00', 'pending'),
(17, 3, 2, '2025-10-21 10:18:00', 'confirmed'),
(18, 1, 0, '2025-10-21 10:23:00', 'confirmed'),
(19, 1, 1, '2025-10-21 10:23:00', 'confirmed'),
(20, 3, 0, '2025-10-21 11:37:00', 'confirmed'),
(21, 3, 0, '2025-10-21 11:38:00', 'confirmed'),
(22, 3, 6, '2025-10-21 11:39:00', 'confirmed'),
(23, 0, 7, '2025-10-21 11:43:00', 'confirmed'),
(24, 0, 0, '2025-10-21 11:44:00', 'confirmed'),
(25, 3, 0, '2025-10-21 11:44:00', 'confirmed'),
(26, 3, 0, '2025-10-21 11:44:00', 'confirmed'),
(27, 1, 7, '2025-10-22 11:54:00', 'confirmed'),
(28, 1, 8, '2025-10-21 11:58:00', 'confirmed'),
(29, 3, 9, '2025-10-21 12:03:00', 'confirmed'),
(30, 0, 10, '0000-00-00 00:00:00', ''),
(31, 0, 11, '0000-00-00 00:00:00', ''),
(32, 2, 12, '0000-00-00 00:00:00', ''),
(33, 2, 13, '0000-00-00 00:00:00', ''),
(34, 2, 14, '0000-00-00 00:00:00', 'offline'),
(35, 0, 15, '0000-00-00 00:00:00', ''),
(36, 0, 16, '0000-00-00 00:00:00', ''),
(37, 0, 17, '0000-00-00 00:00:00', ''),
(38, 1, 18, '2025-11-22 00:46:00', 'offline'),
(39, 2, 19, '2025-11-22 00:27:00', 'confirmed'),
(40, 3, 20, '2025-11-22 00:40:00', 'confirmed'),
(41, 3, 21, '2025-11-22 01:17:00', 'confirmed'),
(42, 3, 22, '2025-11-22 20:13:00', 'offline');

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
(1, 'Paracetamol 500mg', 'Paracetamol', 'Pain and fever relief', 1),
(2, 'Napa 500mg', 'Paracetamol', 'Pain and fever relief', 1),
(3, 'Ace 500mg', 'Paracetamol', 'Reduces fever and mild pain', 1),
(4, 'Seclo 20mg', 'Omeprazole', 'Reduces stomach acid', 1),
(5, 'Losectil 20mg', 'Omeprazole', 'Gastric ulcer treatment', 1),
(6, 'Amoxicillin 500mg', 'Amoxicillin', 'Antibiotic', 1),
(7, 'Cef-3 200mg', 'Cefixime', 'Broad-spectrum antibiotic', 1),
(8, 'Cefrad 500mg', 'Cefradine', 'Antibiotic for infections', 1),
(9, 'Azith 500mg', 'Azithromycin', 'Antibiotic for throat and lung infections', 1),
(10, 'Levoflox 500mg', 'Levofloxacin', 'Antibiotic for respiratory infections', 1),
(11, 'Omep 20mg Capsule', 'Omeprazole', 'Proton pump inhibitor', 2),
(12, 'Esoral 20mg Capsule', 'Esomeprazole', 'Gastric acid reducer', 2),
(13, 'Maxpro 20mg Capsule', 'Esomeprazole', 'Acidity treatment', 2),
(14, 'Ciproxin 500mg', 'Ciprofloxacin', 'Antibiotic', 2),
(15, 'Fluclox 500mg', 'Flucloxacillin', 'Antibiotic for skin infections', 2),
(16, 'Roxiclav 625mg', 'Amoxicillin + Clavulanic Acid', 'Broad-spectrum antibiotic', 2),
(17, 'Myospaz', 'Chlorzoxazone + Paracetamol', 'Muscle relaxant', 2),
(18, 'Neuro B', 'Vitamin B complex', 'Vitamin supplement', 2),
(19, 'Gabapentin 300mg', 'Gabapentin', 'Neuropathic pain relief', 2),
(20, 'Vitamin E 400IU', 'Tocopherol', 'Antioxidant supplement', 2),
(21, 'Napa Syrup', 'Paracetamol', 'Pain and fever relief for children', 3),
(22, 'Ace Syrup', 'Paracetamol', 'Pediatric fever reducer', 3),
(23, 'Histacin Syrup', 'Chlorpheniramine', 'Antihistamine for allergy', 3),
(24, 'Alatrol Syrup', 'Cetirizine', 'Antihistamine for children', 3),
(25, 'Ventolin Syrup', 'Salbutamol', 'Cough and asthma relief', 3),
(26, 'Mucolyt Syrup', 'Ambroxol', 'Cough expectorant', 3),
(27, 'Azith Syrup', 'Azithromycin', 'Antibiotic syrup for children', 3),
(28, 'Augmentin Syrup', 'Amoxicillin + Clavulanic Acid', 'Antibiotic suspension', 3),
(29, 'Norflox Syrup', 'Norfloxacin', 'Antibiotic for UTI', 3),
(30, 'Dom syrup', 'Domperidone', 'Antiemetic', 3),
(31, 'Ceftriaxone Injection', 'Ceftriaxone', 'Antibiotic injection', 5),
(32, 'Ranitidine Injection', 'Ranitidine', 'Reduces gastric acid', 5),
(33, 'Pantop Injection', 'Pantoprazole', 'Acid suppression', 5),
(34, 'Insulin Injection', 'Insulin', 'Blood sugar control', 5),
(35, 'Gentamicin Injection', 'Gentamicin', 'Antibiotic', 5),
(36, 'Hydrocort Injection', 'Hydrocortisone', 'Anti-inflammatory', 5),
(37, 'Diclo Injection', 'Diclofenac Sodium', 'Pain relief injection', 5),
(38, 'Ondem Injection', 'Ondansetron', 'Antiemetic', 5),
(39, 'Vitamin B Complex Injection', 'B1+B6+B12', 'Vitamin supplement', 5),
(40, 'Cefotax Injection', 'Cefotaxime', 'Broad-spectrum antibiotic', 5),
(41, 'Eye Drop Xyl', 'Xylometazoline', 'Nasal congestion relief', 6),
(42, 'Optilone Eye Drops', 'Fluorometholone', 'Eye inflammation relief', 6),
(43, 'Timolol Eye Drops', 'Timolol Maleate', 'Glaucoma treatment', 6),
(44, 'Refresh Tears', 'Carboxymethylcellulose', 'Dry eye treatment', 6),
(45, 'Tobrex Eye Drops', 'Tobramycin', 'Antibiotic eye drop', 6),
(46, 'Nasonex Nasal Spray', 'Mometasone', 'Nasal allergy relief', 6),
(47, 'Otrivin Nasal Drops', 'Xylometazoline', 'Nasal decongestant', 6),
(48, 'Auralgan Ear Drops', 'Benzocaine + Glycerin', 'Ear pain relief', 6),
(49, 'Betnesol Eye Drops', 'Betamethasone', 'Anti-inflammatory eye drops', 6),
(50, 'Ciplox Eye Drops', 'Ciprofloxacin', 'Eye infection antibiotic', 6),
(51, 'Betnovate Ointment', 'Betamethasone', 'Skin inflammation relief', 7),
(52, 'Fucidin Ointment', 'Fusidic Acid', 'Topical antibiotic', 7),
(53, 'Neobac Ointment', 'Neomycin + Bacitracin', 'Topical antibiotic', 7),
(54, 'Clobetasol Ointment', 'Clobetasol Propionate', 'Steroid cream', 7),
(55, 'Zinc Oxide Ointment', 'Zinc Oxide', 'Skin protection', 7),
(56, 'Burnol Ointment', 'Chlorhexidine + Cetrimide', 'Burn treatment', 7),
(57, 'Ketoconazole Ointment', 'Ketoconazole', 'Antifungal cream', 7),
(58, 'Mupirocin Ointment', 'Mupirocin', 'Topical antibiotic', 7),
(59, 'Hydrocortisone Ointment', 'Hydrocortisone', 'Mild steroid', 7),
(60, 'Acyclovir Ointment', 'Acyclovir', 'Antiviral cream', 7),
(61, 'Betnovate Cream', 'Betamethasone', 'Anti-inflammatory cream', 8),
(62, 'Fucidin Cream', 'Fusidic Acid', 'Antibiotic cream', 8),
(63, 'Eumosone Cream', 'Clobetasone Butyrate', 'Steroid cream', 8),
(64, 'Canesten Cream', 'Clotrimazole', 'Antifungal cream', 8),
(65, 'Hydrocortisone Cream', 'Hydrocortisone', 'Mild steroid', 8),
(66, 'Dermovate Cream', 'Clobetasol Propionate', 'Potent steroid', 8),
(67, 'Metrogyl Cream', 'Metronidazole', 'For rosacea treatment', 8),
(68, 'Acne Aid Cream', 'Benzoyl Peroxide', 'Anti-acne', 8),
(69, 'Ketoconazole Cream', 'Ketoconazole', 'Antifungal', 8),
(70, 'Neosporin Cream', 'Neomycin + Bacitracin', 'Antibacterial cream', 8),
(71, 'Benzac Gel', 'Benzoyl Peroxide', 'Acne treatment', 13),
(72, 'Clindagel', 'Clindamycin', 'Topical antibiotic', 13),
(73, 'Volini Gel', 'Diclofenac', 'Pain relief gel', 13),
(74, 'Fastum Gel', 'Ketoprofen', 'Muscle pain relief', 13),
(75, 'Moov Gel', 'Diclofenac Diethylamine', 'Muscle relaxant', 13),
(76, 'Diclomax Gel', 'Diclofenac Sodium', 'Topical pain relief', 13),
(77, 'Himalaya Pain Balm', 'Herbal', 'Pain relief', 13),
(78, 'Deep Heat Gel', 'Menthol + Methyl salicylate', 'Pain relief', 13),
(79, 'Iodex Ultra Gel', 'Diclofenac', 'Pain relief', 13),
(80, 'Dermagel', 'Aloe Vera', 'Skin soothing gel', 13),
(81, 'Ventolin Inhaler', 'Salbutamol', 'Asthma relief inhaler', 10),
(82, 'Seretide Inhaler', 'Salmeterol + Fluticasone', 'Asthma/COPD control', 10),
(83, 'Symbicort Inhaler', 'Budesonide + Formoterol', 'Asthma prevention', 10),
(84, 'Duolin Inhaler', 'Ipratropium + Salbutamol', 'Bronchodilator', 10),
(85, 'Flixonase Nasal Spray', 'Fluticasone', 'Allergic rhinitis', 10),
(86, 'Aerocort Inhaler', 'Beclomethasone + Salbutamol', 'Asthma treatment', 10),
(87, 'Foracort Inhaler', 'Formoterol + Budesonide', 'Asthma/COPD', 10),
(88, 'ProAir Inhaler', 'Albuterol', 'Asthma reliever', 10),
(89, 'Pulmicort Inhaler', 'Budesonide', 'Asthma controller', 10),
(90, 'Ipravent Inhaler', 'Ipratropium', 'Bronchodilator', 10),
(91, 'Pantop 20mg', 'Pantoprazole', 'Reduces gastric acid and reflux', 1),
(92, 'Esoral 20mg', 'Esomeprazole', 'Gastric ulcer treatment', 1),
(93, 'Losectil 40mg', 'Omeprazole', 'Gastric ulcer and reflux relief', 1),
(94, 'Dexpoten Syrup', 'Dextromethorphan', 'Cough suppressant syrup', 3),
(95, 'Napa Extend 665mg', 'Paracetamol Extended Release', 'Long-lasting fever relief', 1),
(96, 'Zithrox 500mg', 'Azithromycin', 'Broad spectrum antibiotic', 1),
(97, 'Ciprocin 500mg', 'Ciprofloxacin', 'Urinary and respiratory infection', 1),
(98, 'Augmentin 625mg', 'Amoxicillin + Clavulanic Acid', 'Resistant bacterial infections', 2),
(99, 'Fluclox 500mg', 'Flucloxacillin', 'Skin and soft tissue infection', 1),
(100, 'Metronidazole 400mg', 'Metronidazole', 'Anaerobic infection treatment', 1),
(101, 'Norflox 400mg', 'Norfloxacin', 'Urinary tract infection', 1),
(102, 'Flagyl Suspension', 'Metronidazole', 'Child infection treatment', 3),
(103, 'Telfast 120mg', 'Fexofenadine', 'Allergy treatment', 1),
(104, 'Neotack Syrup', 'Salbutamol + Guaiphenesin', 'Cough syrup for cold and bronchitis', 3),
(105, 'Montair 10mg', 'Montelukast', 'Asthma and allergy controller', 1),
(106, 'Fluticasone Nasal Spray', 'Fluticasone Propionate', 'Allergic rhinitis relief', 11),
(107, 'Toptan 500mg', 'Tranexamic Acid', 'Bleeding control medicine', 1),
(108, 'Drotin 40mg', 'Drotaverine Hydrochloride', 'Abdominal pain and cramps', 1),
(109, 'Lantus Injection', 'Insulin Glargine', 'Long-acting insulin for diabetes', 5),
(110, 'Gluconorm 500mg', 'Metformin Hydrochloride', 'Blood sugar control', 1),
(111, 'Cefurox 500mg', 'Cefuroxime', 'Respiratory and urinary infection', 1),
(112, 'Tetran 250mg', 'Tetracycline', 'Bacterial infection control', 1),
(113, 'Thyronorm 50mcg', 'Thyroxine Sodium', 'Thyroid hormone replacement', 1),
(114, 'Ecosprin 75mg', 'Aspirin', 'Blood thinner for heart health', 1),
(115, 'Amlosafe 5mg', 'Amlodipine', 'Blood pressure control', 1),
(116, 'Telma 40mg', 'Telmisartan', 'Hypertension treatment', 1),
(117, 'Minimet 500mg', 'Metformin + Glimepiride', 'Diabetes dual control', 1),
(118, 'Vitrum Tablet', 'Multivitamin + Mineral', 'Daily vitamin supplement', 1),
(119, 'Dexorange Syrup', 'Iron + Folic acid + B12', 'Anemia supplement', 3),
(120, 'Bextram Gold', 'Multivitamin', 'Energy and immunity booster', 1);

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
(4, 'Suspension'),
(5, 'Injection'),
(6, 'Drops'),
(7, 'Ointment'),
(8, 'Cream'),
(9, 'Lotion'),
(10, 'Inhaler'),
(11, 'Spray'),
(12, 'Powder'),
(13, 'Gel'),
(14, 'Suppository'),
(15, 'Patch'),
(16, 'Solution'),
(17, 'Granules'),
(18, 'Mouthwash'),
(19, 'Drops (Eye/Nose/Ear)'),
(20, 'Other');

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
(3, 7, 45, 'male', 'Sylhet', '01710000003'),
(4, 18, 25, 'male', 'Narayangong', '1547854755'),
(5, 16, 25, 'female', 'Rangpur', '175754252'),
(6, 19, 26, 'male', 'karanigonj,Dhaka', '1745754252'),
(7, 20, 25, 'male', 'Khulna', '1785485455'),
(8, 21, 27, 'female', 'Mirpur ,Dhaka', '18754254252'),
(9, 22, 25, 'male', 'Gulshan,Dhaka', '197854524'),
(10, 23, 0, '', '', ''),
(11, 24, 0, '', '', ''),
(12, 25, 25, 'male', 'Dhaka', '0154875485'),
(13, 26, 25, 'male', 'Dhaka', '0154875485'),
(14, 27, 25, 'male', 'Dhaka', '0154875485'),
(15, 28, 0, '', '', ''),
(16, 29, 0, '', '', ''),
(17, 30, 0, '', '', ''),
(18, 31, 25, '', 'Rangpur', '14758950555'),
(19, 32, 25, '', 'Rangpur,Domar', '0158950555'),
(20, 33, 25, '', 'Dhaka', '0158755454'),
(21, 34, 30, 'female', 'Dhaka', '01547554658'),
(22, 35, 25, 'male', 'Dhaka', '015489544');

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
(18, 10, 2, 2, 'erete', 'rtertert', 'reter', NULL, '2025-10-25', '2025-10-20 07:20:13'),
(19, 0, 0, 0, '', '', '', NULL, '0000-00-00', '2025-10-21 03:28:20'),
(20, 16, 2, 4, '7 Day Fever', 'BP -70/120', 'keeps Rest ', NULL, '2025-10-30', '2025-10-21 04:11:09'),
(21, 41, 3, 21, 'fever', 'na', 'na', NULL, '2025-11-27', '2025-11-21 19:19:14');

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
(23, 18, 9, 8, 2, 1),
(24, 20, 11, 7, 2, 1),
(25, 20, 10, 1, 7, 1),
(26, 20, 9, 5, 3, 5),
(27, 21, 109, 1, 9, 8),
(28, 21, 107, 2, 9, 7);

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
(12, 18, 2),
(13, 20, 1),
(14, 20, 2),
(15, 20, 3),
(16, 20, 4),
(17, 20, 5),
(18, 21, 9),
(19, 21, 9);

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
(7, 'Urine R/M/E', 'Routine urine test'),
(8, 'HbA1c', 'Average blood glucose level over 3 months'),
(9, 'Lipid Profile', 'Cholesterol and triglycerides test'),
(10, 'TSH', 'Thyroid Stimulating Hormone'),
(11, 'FT3', 'Free Triiodothyronine'),
(12, 'FT4', 'Free Thyroxine'),
(13, 'Vitamin D', 'Vitamin D level test'),
(14, 'Vitamin B12', 'Vitamin B12 level test'),
(15, 'Iron Studies', 'Iron, TIBC, Ferritin test'),
(16, 'Serum Calcium', 'Calcium level in blood'),
(17, 'Serum Sodium', 'Sodium electrolyte test'),
(18, 'Serum Potassium', 'Potassium electrolyte test'),
(19, 'Serum Chloride', 'Chloride electrolyte test'),
(20, 'Serum Magnesium', 'Magnesium level test'),
(21, 'Urine Culture', 'Test for bacterial infection in urine'),
(22, 'Stool R/E', 'Routine stool examination'),
(23, 'CRP', 'C-reactive protein for inflammation'),
(24, 'ESR', 'Erythrocyte Sedimentation Rate'),
(25, 'PT', 'Prothrombin Time'),
(26, 'INR', 'International Normalized Ratio'),
(27, 'aPTT', 'Activated Partial Thromboplastin Time'),
(28, 'Serum Bilirubin', 'Bilirubin level for liver function'),
(29, 'Serum Albumin', 'Albumin protein level in blood'),
(30, 'Serum Globulin', 'Globulin protein level in blood'),
(31, 'Blood Urea', 'Kidney function test'),
(32, 'Serum Amylase', 'Pancreatic enzyme test'),
(33, 'Serum Lipase', 'Pancreatic enzyme test'),
(34, 'Hepatitis B', 'Hepatitis B virus test'),
(35, 'Hepatitis C', 'Hepatitis C virus test'),
(36, 'HIV', 'Human Immunodeficiency Virus test'),
(37, 'Malaria', 'Blood test for malaria parasite'),
(38, 'Dengue NS1', 'Early dengue detection'),
(39, 'Dengue IgM/IgG', 'Dengue antibody detection'),
(40, 'Typhoid (Widal)', 'Typhoid antibody test'),
(41, 'COVID-19 PCR', 'SARS-CoV-2 detection by PCR'),
(42, 'COVID-19 Antigen', 'Rapid COVID-19 antigen test'),
(43, 'Chest CT Scan', 'Detailed chest imaging'),
(44, 'Abdominal Ultrasound', 'Ultrasound imaging of abdomen'),
(45, 'Echocardiogram', 'Heart ultrasound'),
(46, 'Bone Density Test', 'Osteoporosis detection'),
(47, 'Pap Smear', 'Cervical cancer screening'),
(48, 'Mammography', 'Breast imaging'),
(49, 'Eye Examination', 'Vision & eye health check'),
(50, 'Hearing Test', 'Hearing function test');

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
(4, ' Ali hussen', 'ali@rx.com', '', 3, '2025-09-28 19:37:48', '', '044879855'),
(5, 'Jannat ', 'jannat@rx.com', '', 3, '2025-09-28 19:37:48', '', '0145754252'),
(6, 'Dr. Azad', 'azad@rx.com', '', 2, '2025-09-28 19:37:48', 'uploads/users/20251018-052430.jpg', '01580947'),
(7, 'Patient Rafi', 'rafi@rx.com', '123456', 3, '2025-09-28 19:37:48', NULL, NULL),
(11, 'Sohel Rana', 'sdds@gmail.com', '', 3, '2025-10-06 15:04:54', 'uploads/users/20251006-170454.png', '25455554'),
(13, 'Sohel Rana', 'ssssds@gmail.com', '', 3, '2025-10-06 15:22:21', '', '25455554'),
(15, 'Sohel Rana', 'sss2ds@gmail.com', '', 3, '2025-10-06 15:27:02', 'uploads/users/20251006-172702.png', '25455554'),
(16, 'Mina', 'mina3@gmail.com', '', 3, '2025-10-06 16:48:54', 'uploads/users/20251006-184854.jpg', '015875548554'),
(17, 'Mina2', 'min1a@gmail.com', '', 3, '2025-10-06 17:08:00', 'uploads/users/20251006-190800.png', '015875548554'),
(18, 'Rayhen Islam', 'rayhen@gmail.com', '', 3, '2025-10-21 03:30:24', 'uploads/users/20251021-053024.jpg', '015875845875'),
(19, 'Rahat Islam', 'ra@gmail.com', '', 3, '2025-10-21 05:37:32', 'uploads/users/20251021-073732.jpeg', '015584854854'),
(20, 'Safiqur Rahman', 'sa@gmail.com', '', 3, '2025-10-21 05:42:12', 'uploads/users/20251021-074212.jpeg', '012548725545'),
(21, 'Farhana ', 'fa@gmail.com', '', 3, '2025-10-21 05:57:18', 'uploads/users/20251021-075718.jpeg', '0185454545'),
(22, 'Sha Alam', 'saal@gmail.com', '', 3, '2025-10-21 06:02:03', 'uploads/users/20251021-080203.jpeg', '0169855646'),
(23, '', '', '', 0, '2025-11-21 15:12:56', '', ''),
(24, '', '', '', 0, '2025-11-21 15:17:41', '', ''),
(25, 'sohel Rana', '', '', 0, '2025-11-21 15:18:42', '', '0154875485'),
(26, 'sohel Rana', NULL, NULL, 3, '2025-11-21 15:47:58', NULL, '0154875485'),
(27, 'sohel Rana', NULL, NULL, 3, '2025-11-21 15:48:55', NULL, '0154875485'),
(28, '', NULL, NULL, 0, '2025-11-21 18:42:52', NULL, ''),
(29, '', NULL, NULL, 0, '2025-11-21 18:46:20', NULL, ''),
(30, '', NULL, NULL, 0, '2025-11-21 18:47:05', NULL, ''),
(31, 'Sonny s54', NULL, NULL, 3, '2025-11-21 18:48:30', NULL, '14758950555'),
(32, 'Sakib', NULL, NULL, 3, '2025-11-21 18:50:08', NULL, '0158950555'),
(33, 'akash', NULL, NULL, 3, '2025-11-21 18:55:37', NULL, '0158755454'),
(34, 'Nihat', NULL, NULL, 3, '2025-11-21 19:17:54', NULL, '01547554658'),
(35, 'Ali', NULL, NULL, 3, '2025-11-22 14:13:34', NULL, '015489544');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `medicine_types`
--
ALTER TABLE `medicine_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `prescription_tests`
--
ALTER TABLE `prescription_tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
