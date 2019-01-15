-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 06, 2018 at 07:04 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projekat`
--

-- --------------------------------------------------------

--
-- Table structure for table `avioni`
--

DROP TABLE IF EXISTS `avioni`;
CREATE TABLE IF NOT EXISTS `avioni` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `brzina_letenja` varchar(255) DEFAULT NULL,
  `kolona` int(11) NOT NULL,
  `marka` varchar(255) DEFAULT NULL,
  `max_dolet` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `redova` int(11) NOT NULL,
  `sedistaukoloni` int(11) NOT NULL,
  `ukupno_sedista` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avioni`
--

INSERT INTO `avioni` (`id`, `brzina_letenja`, `kolona`, `marka`, `max_dolet`, `model`, `redova`, `sedistaukoloni`, `ukupno_sedista`) VALUES
(7, '860', 6, 'AirBus', '6000', 'A319', 30, 30, 180),
(5, '830', 6, 'AirBus', '5900', 'A320-200', 30, 30, 150);

-- --------------------------------------------------------

--
-- Table structure for table `checkin`
--

DROP TABLE IF EXISTS `checkin`;
CREATE TABLE IF NOT EXISTS `checkin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_leta` varchar(255) DEFAULT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `jmbg` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  `sediste` varchar(255) DEFAULT NULL,
  `gate` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `checkin`
--

INSERT INTO `checkin` (`id`, `id_leta`, `ime`, `jmbg`, `prezime`, `sediste`, `gate`, `email`) VALUES
(52, '1234', 'zika', '23242', 'zika', 'C1', 'A5', 'lexamatovic@gmail.com'),
(51, '9900', 'pera', '1232323', 'pera', 'B3', 'A5', 'lexamatovic@gmail.com'),
(50, '1502', 'pera', 'pera', 'pera', 'A0', 'f12', 'lexamatovic@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `kupovina`
--

DROP TABLE IF EXISTS `kupovina`;
CREATE TABLE IF NOT EXISTS `kupovina` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cena` int(11) NOT NULL,
  `datum_ivreme` varchar(255) DEFAULT NULL,
  `destinacija` varchar(255) DEFAULT NULL,
  `id_leta` int(11) NOT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  `gate` varchar(255) DEFAULT NULL,
  `otkazi_kartu` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kupovina`
--

INSERT INTO `kupovina` (`id`, `cena`, `datum_ivreme`, `destinacija`, `id_leta`, `ime`, `prezime`, `gate`, `otkazi_kartu`) VALUES
(45, 33000, '27/05/2018-19:20 || 27/05/2018-22:20', 'Beograd - Dubai', 8877, 'zika', 'zika', 'A5', b'1'),
(44, 23000, '13/01/2018-12:55 || 13/01/2018-14:55', 'Nis - Bukurest', 1234, 'zika', 'zika', 'A5', b'0'),
(41, 30000, '28.02.2018 - 10:00 || 28.02.2018 - 12:40', 'Beograd - Moskva', 1502, 'pera', 'pera', 'f12', b'0'),
(42, 33000, '27/05/2018-19:20 || 27/05/2018-22:20', 'Beograd - Dubai', 8877, 'pera', 'pera', 'A5', b'0'),
(43, 10000, '07/01/2018-09:40 || 07/01/2018-11:00', 'Zagreb - Beograd', 9900, 'pera', 'pera', 'A5', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `letovi`
--

DROP TABLE IF EXISTS `letovi`;
CREATE TABLE IF NOT EXISTS `letovi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cena` int(11) NOT NULL,
  `datum_ivreme_dolaska` varchar(255) DEFAULT NULL,
  `datum_ivreme_polaska` varchar(255) DEFAULT NULL,
  `gate` varchar(255) DEFAULT NULL,
  `odrediste` varchar(255) DEFAULT NULL,
  `polaziste` varchar(255) DEFAULT NULL,
  `razdaljina_destinacija` varchar(255) DEFAULT NULL,
  `ukupno_vreme_putovanja` varchar(255) DEFAULT NULL,
  `broj_sedista` int(11) NOT NULL,
  `zauzetih_sedista` int(11) NOT NULL,
  `tip_aviona` varchar(255) DEFAULT NULL,
  `id_aviona` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9901 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `letovi`
--

INSERT INTO `letovi` (`id`, `cena`, `datum_ivreme_dolaska`, `datum_ivreme_polaska`, `gate`, `odrediste`, `polaziste`, `razdaljina_destinacija`, `ukupno_vreme_putovanja`, `broj_sedista`, `zauzetih_sedista`, `tip_aviona`, `id_aviona`) VALUES
(1502, 30000, '28.02.2018 - 12:40', '28.02.2018 - 10:00', 'f12', 'Moskva', 'Beograd', '2040', '2:40', 150, 6, NULL, 0),
(1504, 25000, '27/04/2018-14:00', '27/04/2018-12:00', 'A5', 'Pariz', 'Budimpesta', '1500', '1:33', 150, 1, NULL, 0),
(8877, 33000, '27/05/2018-22:20', '27/05/2018-19:20', 'A5', 'Dubai', 'Beograd', '2500', '1:33', 150, 5, NULL, 0),
(9900, 10000, '07/01/2018-11:00', '07/01/2018-09:40', 'A5', 'Beograd', 'Zagreb', '500', '1:33', 150, 6, NULL, 0),
(1234, 23000, '13/01/2018-14:55', '13/01/2018-12:55', 'A5', 'Bukurest', 'Nis', '500', '1:33', 180, 4, 'AirBus A319', 7),
(5564, 25000, '07/01/2018-11:40', '07/01/2018-09:40', 'A5', 'Beograd', 'Bukurest', '800', '1:33', 150, 4, 'AirBus A320-200', 5);

-- --------------------------------------------------------

--
-- Table structure for table `studenti`
--

DROP TABLE IF EXISTS `studenti`;
CREATE TABLE IF NOT EXISTS `studenti` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `admin` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `operator` bit(1) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `changed` bit(1) NOT NULL,
  `korisnik` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `admin`, `email`, `first_name`, `last_name`, `operator`, `password`, `changed`, `korisnik`) VALUES
(2, b'0', 'operater', 'operater', 'Operatoric', b'1', 'operater', b'1', b'0'),
(19, b'0', 'lexamatovic@gmail.com', 'zika', 'zika', b'0', 'zika', b'0', b'1'),
(11, b'1', 'admin', 'admin', 'admin', b'0', 'admin', b'1', b'0'),
(16, b'0', 'lexamatovic@gmail.com', 'Aleksa', 'Matovic', b'0', 'aleksa', b'0', b'1'),
(18, b'0', 'lexamatovic@gmail.com', 'mika', 'mikic', b'0', 'mika', b'0', b'1'),
(17, b'0', 'lexamatovic@gmail.com', 'pera', 'pera', b'0', 'pera', b'0', b'1'),
(20, b'0', 'lexamatovic@gmail.com', 'peki', 'peki', b'0', 'peki', b'0', b'1'),
(27, b'0', 'lexamatovic@gmail.com', 'Luka', 'Lukic', b'0', 'luka', b'0', b'1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
