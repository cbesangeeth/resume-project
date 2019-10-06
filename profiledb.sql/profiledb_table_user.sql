
-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL COMMENT 'auto increment user id',
  `name` varchar(255) NOT NULL COMMENT 'user name',
  `mobile` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `mobile`, `email`, `gender`, `address`, `created_at`, `updated_at`) VALUES
(1, 'asf', 'asdf', 'adsf@adsf', 'male', 'adfs', '2019-10-06 10:30:05', '2019-10-06 10:30:05');
