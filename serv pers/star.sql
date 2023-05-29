-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 26 jan. 2023 à 12:42
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `star`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `idArticle` int(9) NOT NULL,
  `idLien` int(9) NOT NULL,
  `libArticle` varchar(999) NOT NULL,
  `lienImg` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`idArticle`, `idLien`, `libArticle`, `lienImg`) VALUES
(1, 23, '11111111111111111111111111111111111', 'w/1.webp');

-- --------------------------------------------------------

--
-- Structure de la table `lienstartag`
--

CREATE TABLE `lienstartag` (
  `idStar` int(9) NOT NULL,
  `idTag` int(9) NOT NULL,
  `idLien` int(9) NOT NULL,
  `ptTag` int(9) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `lienstartag`
--

INSERT INTO `lienstartag` (`idStar`, `idTag`, `idLien`, `ptTag`) VALUES
(1, 1, 1, 0),
(1, 3, 20, 0),
(3, 1, 21, 0),
(3, 4, 22, 0),
(4, 3, 23, 0),
(4, 5, 24, 0),
(5, 4, 25, 0),
(5, 6, 26, 0),
(6, 5, 27, 0),
(6, 7, 28, 0),
(7, 6, 29, 0),
(7, 8, 30, 0),
(8, 7, 31, 0),
(8, 9, 32, 0),
(9, 8, 33, 0);

-- --------------------------------------------------------

--
-- Structure de la table `star`
--

CREATE TABLE `star` (
  `idStar` int(9) NOT NULL,
  `libStar` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `star`
--

INSERT INTO `star` (`idStar`, `libStar`) VALUES
(1, 'gu om'),
(2, 'squeezie'),
(3, 'jiraya (rien)'),
(4, 'wankil (rien)'),
(5, 'vin diesel'),
(6, 'mr bean'),
(7, 'the rock'),
(8, 'locklear'),
(9, 'leon');

-- --------------------------------------------------------

--
-- Structure de la table `tag`
--

CREATE TABLE `tag` (
  `idTag` int(9) NOT NULL,
  `libTag` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `tag`
--

INSERT INTO `tag` (`idTag`, `libTag`) VALUES
(1, 'gentil'),
(3, 'admin'),
(4, 'chauve'),
(5, 'marrant'),
(6, 'costaud'),
(7, 'beeeete'),
(8, 'badass'),
(9, 'cringe');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`idArticle`);

--
-- Index pour la table `lienstartag`
--
ALTER TABLE `lienstartag`
  ADD PRIMARY KEY (`idLien`),
  ADD KEY `FK_idStar` (`idStar`),
  ADD KEY `idTag` (`idTag`);

--
-- Index pour la table `star`
--
ALTER TABLE `star`
  ADD PRIMARY KEY (`idStar`);

--
-- Index pour la table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`idTag`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `idArticle` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `lienstartag`
--
ALTER TABLE `lienstartag`
  MODIFY `idLien` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `star`
--
ALTER TABLE `star`
  MODIFY `idStar` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `tag`
--
ALTER TABLE `tag`
  MODIFY `idTag` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `lienstartag`
--
ALTER TABLE `lienstartag`
  ADD CONSTRAINT `FK_idStar` FOREIGN KEY (`idStar`) REFERENCES `star` (`idStar`),
  ADD CONSTRAINT `lienstartag_ibfk_1` FOREIGN KEY (`idTag`) REFERENCES `tag` (`idTag`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
