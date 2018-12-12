-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 12 月 12 日 10:03
-- 服务器版本: 5.7.24
-- PHP 版本: 5.6.27

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(10) NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  `content` varchar(5000) CHARACTER SET utf8 NOT NULL,
  `type_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `type_id`) VALUES
(1, 'dsfsd', '更符合法规回复', 1);

-- --------------------------------------------------------

--
-- 表的结构 `article_sort`
--

CREATE TABLE IF NOT EXISTS `article_sort` (
  `id` int(10) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `content` varchar(355) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` int(10) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `course`
--

INSERT INTO `course` (`id`, `name`, `avatar`, `price`) VALUES
(1, 'sd', 'sddddd', 23),
(2, 'weq', 'qwe', 123);

-- --------------------------------------------------------

--
-- 表的结构 `course_commend`
--

CREATE TABLE IF NOT EXISTS `course_commend` (
  `id` int(10) NOT NULL,
  `course_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `course_title` varchar(100) NOT NULL,
  `course_author` varchar(40) NOT NULL,
  `course_avatar` varchar(40) NOT NULL,
  `course_content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  UNIQUE KEY `id` (`id`),
  KEY `course_id` (`course_id`),
  KEY `course_id_2` (`course_id`),
  KEY `course_id_3` (`course_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `course_commend`
--

INSERT INTO `course_commend` (`id`, `course_id`, `course_title`, `course_author`, `course_avatar`, `course_content`) VALUES
(1, 1, 'dsfdadf', 'ytu', 'http://asdad/png', 'sfsfdsfdsfsdfsdf'),
(3, 2, 'dsfdadf', 'ytu', 'http://asdad/png', 'sfsfdsfdsfsdfsdf');

-- --------------------------------------------------------

--
-- 表的结构 `course_info`
--

CREATE TABLE IF NOT EXISTS `course_info` (
  `id` int(10) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  `infoText` varchar(255) CHARACTER SET utf8 NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 NOT NULL,
  `videos` int(11) NOT NULL,
  `commends` int(11) NOT NULL,
  `createdTime` date NOT NULL,
  `userNumber` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `course_info`
--

INSERT INTO `course_info` (`id`, `name`, `title`, `infoText`, `avatar`, `videos`, `commends`, `createdTime`, `userNumber`, `price`) VALUES
(1, '123', '21321321', '12313sdsa', 'sddddd', 22, 2131, '2018-12-06', 11, 23);

-- --------------------------------------------------------

--
-- 表的结构 `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
  `id` int(10) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `courseId` int(10) NOT NULL,
  `createTime` datetime NOT NULL,
  `viewNum` int(10) NOT NULL,
  `info` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `videos`
--

INSERT INTO `videos` (`id`, `name`, `courseId`, `createTime`, `viewNum`, `info`) VALUES
(1, 'sad1111111', 1, '2018-12-29 00:00:00', 122, 'asdadasdasdsad33333'),
(2, 'sad1111111', 2, '2018-12-29 00:00:00', 121, 'ddsfsdfsdf'),
(3, 'sad1111111', 2, '2018-12-29 00:00:00', 121, 'ddsfsdfsdf'),
(4, 'sad1111111', 2, '2018-12-29 00:00:00', 121, 'ddsfsdfsdf');

-- --------------------------------------------------------

--
-- 表的结构 `video_commend`
--

CREATE TABLE IF NOT EXISTS `video_commend` (
  `id` int(10) NOT NULL,
  `video_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `video_title` varchar(100) NOT NULL,
  `video_author` varchar(40) NOT NULL,
  `video_avatar` varchar(40) NOT NULL,
  `video_content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`video_id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `video_commend`
--

INSERT INTO `video_commend` (`id`, `video_id`, `video_title`, `video_author`, `video_avatar`, `video_content`) VALUES
(1, 2, 'dsgfhj', 'yut', 'http://dfsdf.png', 'sdfdsfsd'),
(2, 3, 'dsgfhj', 'yut', 'http://dfsdf.png', 'sdfdsfsd'),
(4, 7, '发的广泛地', 'yut', 'http://dfsdf.png', 'sdfdsfsd');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
