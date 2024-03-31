-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema CodeBuddy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema CodeBuddy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CodeBuddy` DEFAULT CHARACTER SET utf8 ;
USE `CodeBuddy` ;

-- -----------------------------------------------------
-- Table `CodeBuddy`.`admin_cate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`admin_cate` (
  `cate_no` INT NOT NULL AUTO_INCREMENT,
  `cate_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cate_no`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`admin_sub_cate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`admin_sub_cate` (
  `sub_cate_no` INT NOT NULL AUTO_INCREMENT,
  `sub_cate_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`sub_cate_no`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`admin_report_cate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`admin_report_cate` (
  `re_no` INT NOT NULL AUTO_INCREMENT,
  `re_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`re_no`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`user` (
  `uid` VARCHAR(20) NOT NULL,
  `pass` VARCHAR(255) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `gender` TINYINT NOT NULL,
  `hp` CHAR(13) NOT NULL,
  `email` VARCHAR(0) NOT NULL,
  `point` INT NOT NULL DEFAULT 0,
  `level` TINYINT NULL,
  `rdate` DATETIME NOT NULL,
  `wdate` DATETIME NULL,
  PRIMARY KEY (`uid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`admin_112`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`admin_112` (
  `re_no` INT NOT NULL AUTO_INCREMENT,
  `re_id` VARCHAR(50) NOT NULL,
  `re_nick` VARCHAR(50) NOT NULL,
  `re_reported_count` INT NULL,
  `re_reporter_id` VARCHAR(20) NOT NULL,
  `re_content` TEXT NOT NULL,
  `re_cate` VARCHAR(30) NOT NULL,
  `re_status` INT NOT NULL DEFAULT 0,
  `re_article_no` INT NOT NULL,
  PRIMARY KEY (`re_no`),
  INDEX `fk_admin_112_user1_idx` (`re_reporter_id` ASC) VISIBLE,
  CONSTRAINT `fk_admin_112_user1`
    FOREIGN KEY (`re_reporter_id`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`admin_notice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`admin_notice` (
  `notice_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `author` VARCHAR(50) NOT NULL,
  `cate` VARCHAR(50) NULL,
  `sub_cate` VARCHAR(50) NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`notice_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`admin_mm`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`admin_mm` (
  `user_no` INT NOT NULL AUTO_INCREMENT,
  `user_uid` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`user_no`),
  INDEX `fk_admin_mm_user_idx` (`user_uid` ASC) VISIBLE,
  CONSTRAINT `fk_admin_mm_user`
    FOREIGN KEY (`user_uid`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`calendar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`calendar` (
  `uid` VARCHAR(20) NOT NULL,
  `startDate` DATETIME NOT NULL,
  `lastDate` DATETIME NOT NULL,
  `content` TEXT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `annual` INT NULL,
  PRIMARY KEY (`uid`),
  INDEX `fk_calendar_user1_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `fk_calendar_user1`
    FOREIGN KEY (`uid`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`user_point`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`user_point` (
  `uid` VARCHAR(20) NOT NULL,
  `point` INT NULL,
  `pointDate` DATETIME NULL,
  PRIMARY KEY (`uid`),
  CONSTRAINT `fk_user_point_user1`
    FOREIGN KEY (`uid`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`chatting_room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`chatting_room` (
  `chat_roomId` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(55) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`chat_roomId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`chatting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`chatting` (
  `chatId` INT NOT NULL AUTO_INCREMENT,
  `uid` VARCHAR(20) NOT NULL,
  `chat_roomId` INT NOT NULL,
  `text` VARCHAR(555) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `check` TINYINT NOT NULL DEFAULT 1 COMMENT '1 OR 0',
  PRIMARY KEY (`chatId`),
  INDEX `fk_chatting_user1_idx` (`uid` ASC) VISIBLE,
  INDEX `fk_chatting_chatting_room1_idx` (`chat_roomId` ASC) VISIBLE,
  CONSTRAINT `fk_chatting_user1`
    FOREIGN KEY (`uid`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_chatting_chatting_room1`
    FOREIGN KEY (`chat_roomId`)
    REFERENCES `CodeBuddy`.`chatting_room` (`chat_roomId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`user_chatting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`user_chatting` (
  `chatId` INT NOT NULL,
  `chat_roomId` INT NOT NULL,
  INDEX `fk_user_chatting_chatting_room1_idx` (`chat_roomId` ASC) VISIBLE,
  INDEX `fk_user_chatting_chatting1_idx` (`chatId` ASC) VISIBLE,
  CONSTRAINT `fk_user_chatting_chatting_room1`
    FOREIGN KEY (`chat_roomId`)
    REFERENCES `CodeBuddy`.`chatting_room` (`chat_roomId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_chatting_chatting1`
    FOREIGN KEY (`chatId`)
    REFERENCES `CodeBuddy`.`chatting` (`chatId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`board_freeboard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`board_freeboard` (
  `freeNo` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `writer` VARCHAR(20) NOT NULL,
  `hit` VARCHAR(45) NOT NULL DEFAULT 0,
  `regip` VARCHAR(100) NOT NULL,
  `rdate` DATETIME NOT NULL,
  PRIMARY KEY (`freeNo`),
  INDEX `fk_board_freeboard_user1_idx` (`writer` ASC) VISIBLE,
  CONSTRAINT `fk_board_freeboard_user1`
    FOREIGN KEY (`writer`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`board_carrot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`board_carrot` (
  `carrotNo` INT NOT NULL AUTO_INCREMENT,
  `cate1` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `writer` VARCHAR(20) NOT NULL,
  `hit` INT NULL DEFAULT 0,
  `regip` VARCHAR(100) NOT NULL,
  `rdate` DATETIME NOT NULL,
  PRIMARY KEY (`carrotNo`),
  INDEX `fk_board_carrot_user1_idx` (`writer` ASC) VISIBLE,
  CONSTRAINT `fk_board_carrot_user1`
    FOREIGN KEY (`writer`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`board_hunting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`board_hunting` (
  `huntingNo` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `writer` VARCHAR(20) NOT NULL,
  `hit` INT NOT NULL DEFAULT 0,
  `regip` VARCHAR(255) NOT NULL,
  `rdate` DATETIME NOT NULL,
  PRIMARY KEY (`huntingNo`),
  INDEX `fk_board_hunting_user1_idx` (`writer` ASC) VISIBLE,
  CONSTRAINT `fk_board_hunting_user1`
    FOREIGN KEY (`writer`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`study`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`study` (
  `studyNo` INT NOT NULL AUTO_INCREMENT,
  `studyName` VARCHAR(50) NOT NULL,
  `content` TEXT NOT NULL,
  `regDate` DATETIME NOT NULL,
  `endDate` DATETIME NULL,
  PRIMARY KEY (`studyNo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CodeBuddy`.`study_Member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CodeBuddy`.`study_Member` (
  `studyMem` VARCHAR(20) NOT NULL,
  `studyNo` INT NOT NULL,
  `studyLeader` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`studyMem`),
  INDEX `fk_study_Member_user1_idx` (`studyMem` ASC) VISIBLE,
  INDEX `fk_study_Member_study1_idx` (`studyNo` ASC) VISIBLE,
  CONSTRAINT `fk_study_Member_user1`
    FOREIGN KEY (`studyMem`)
    REFERENCES `CodeBuddy`.`user` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_study_Member_study1`
    FOREIGN KEY (`studyNo`)
    REFERENCES `CodeBuddy`.`study` (`studyNo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
