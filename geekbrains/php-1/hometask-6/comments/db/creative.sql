SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `user_name` varchar(16) DEFAULT NULL,
  `text` text,
  `image_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `feedback` (`id`, `user_name`, `text`, `image_id`) VALUES
(1, 'Вася', 'Красивый закат', 1),
(2, 'Лена', 'Востихитительное Бали', 2),
(3, 'Иван', 'Чистый пляж', 1);



CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `views` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `images` (`id`, `name`, `path`, `views`) VALUES
(1, 'examples_001_1280.jpg', 'examples_001_1280.jpg', NULL),
(2, 'examples_011_1280.jpg', 'examples_011_1280.jpg', NULL);


ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
