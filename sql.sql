-- -----------------------------------------------------
-- Schema trabajofinal-lb4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trabajofinal-lb4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trabajofinal-lb4` DEFAULT CHARACTER SET utf8 ;
USE `trabajofinal-lb4` ;

-- -----------------------------------------------------
-- Table `trabajofinal-lb4`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabajofinal-lb4`.`categoria` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabajofinal-lb4`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabajofinal-lb4`.`producto` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `detalle` VARCHAR(45) NULL,
  `categoria_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_producto_categoria1_idx` (`categoria_id` ASC),
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `trabajofinal-lb4`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabajofinal-lb4`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabajofinal-lb4`.`item` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `precio` INT NOT NULL,
  `stock` INT NOT NULL,
  `producto_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_item_producto_idx` (`producto_id` ASC),
  CONSTRAINT `fk_item_producto`
    FOREIGN KEY (`producto_id`)
    REFERENCES `trabajofinal-lb4`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


