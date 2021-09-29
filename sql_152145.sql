-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         PostgreSQL 13.4, compiled by Visual C++ build 1914, 64-bit
-- SO del servidor:              
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla public.actonmovs
CREATE TABLE IF NOT EXISTS "actonmovs" (
	"id_act" INTEGER NOT NULL,
	"id_mov" INTEGER NOT NULL,
	"createdAt" TIMESTAMP NULL DEFAULT NULL,
	"updatedAt" TIMESTAMP NULL DEFAULT NULL,
	"name_act" VARCHAR NULL DEFAULT NULL,
	"title_mov" VARCHAR NULL DEFAULT NULL,
	UNIQUE INDEX "only_am" ("id_act", "id_mov"),
	PRIMARY KEY ("id_mov", "id_act")
);

-- Volcando datos para la tabla public.actonmovs: 4 rows
/*!40000 ALTER TABLE "actonmovs" DISABLE KEYS */;
INSERT IGNORE INTO "actonmovs" ("id_act", "id_mov", "createdAt", "updatedAt", "name_act", "title_mov") VALUES
	(1, 1, '2021-09-26 22:28:40', '2021-09-26 22:28:43', 'Wilky Abreu', 'Viernes 13'),
	(2, 1, '2021-09-26 22:29:03', '2021-09-26 22:29:00', 'Dina Abreu', 'Viernes 13'),
	(2, 2, '2021-09-26 22:29:44', '2021-09-26 22:29:46', 'Dina Abreu', 'Jason'),
	(1, 2, '2021-09-26 22:30:01', '2021-09-26 22:30:00', 'Wilky Abreu', 'Jason');
/*!40000 ALTER TABLE "actonmovs" ENABLE KEYS */;

-- Volcando estructura para tabla public.actors
CREATE TABLE IF NOT EXISTS "actors" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''actors_id_seq''::regclass)',
	"fullname" VARCHAR NULL DEFAULT NULL,
	"birthdate" DATE NULL DEFAULT NULL,
	"sex" VARCHAR NULL DEFAULT NULL,
	"photo" VARCHAR NULL DEFAULT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	"updatedAt" TIMESTAMP NOT NULL,
	PRIMARY KEY ("id"),
	UNIQUE INDEX "unique_actor" ("fullname")
);

-- Volcando datos para la tabla public.actors: 2 rows
/*!40000 ALTER TABLE "actors" DISABLE KEYS */;
INSERT IGNORE INTO "actors" ("id", "fullname", "birthdate", "sex", "photo", "createdAt", "updatedAt") VALUES
	(1, 'Wilky Abreu', '1991-08-27', 'MALE', 'sdafdsf0df2df1', '2021-09-26 22:11:48', '2021-09-26 22:11:50'),
	(2, 'Dina Abreu', '2000-09-27', 'FEMALE', '5d1f5d41f', '2021-09-27 03:13:23', '2021-09-27 03:13:25');
/*!40000 ALTER TABLE "actors" ENABLE KEYS */;

-- Volcando estructura para tabla public.movies
CREATE TABLE IF NOT EXISTS "movies" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''movies_id_seq''::regclass)',
	"title" VARCHAR NOT NULL,
	"relase" DATE NOT NULL,
	"gender" VARCHAR NOT NULL,
	"photo" VARCHAR NULL DEFAULT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	"updatedAt" TIMESTAMP NOT NULL,
	PRIMARY KEY ("id"),
	UNIQUE INDEX "unique_title" ("title")
);

-- Volcando datos para la tabla public.movies: 2 rows
/*!40000 ALTER TABLE "movies" DISABLE KEYS */;
INSERT IGNORE INTO "movies" ("id", "title", "relase", "gender", "photo", "createdAt", "updatedAt") VALUES
	(1, 'Viernes 13', '1999-08-26', 'HORROR', 'd123sd1', '2021-09-26 22:27:35', '2021-09-26 22:27:37'),
	(2, 'Jason', '1989-09-27', 'HORROR', 'sfdfdf', '2021-09-27 03:14:05', '2021-09-27 03:14:06');
/*!40000 ALTER TABLE "movies" ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
