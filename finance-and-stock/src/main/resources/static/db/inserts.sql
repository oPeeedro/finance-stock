INSERT INTO `users` (`name`, `email`, `mobile_number`, `document_number`, `password`, `role`)
VALUES ('Juliane Maran', 'julianemaran@gmail.com', '992199488', '06069043952', '123456', 'admin');

INSERT INTO `users` (`name`, `email`, `mobile_number`, `document_number`, `password`, `role`)
VALUES ('Suzi', 'suzi@email.com', '998765415', '88384366306', '123456', 'user');

INSERT INTO `authorities` (`user_id`, `name`)
VALUES (1, 'ROLE_USER');

INSERT INTO `authorities` (`user_id`, `name`)
VALUES (1, 'ROLE_ADMIN');

INSERT INTO `authorities` (`user_id`, `name`)
VALUES (2, 'ROLE_USER');