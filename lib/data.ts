import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import musicPalace from "@/public/MusicPalace.png";
import python from "@/public/python.png";
import immersite from "@/public/immersite.png";
import qrcodeapp from "@/public/qrcodeapp.png";
import surfgood from "@/public/surfgood.png";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Alternance développeur web full-stack",
    location: "NOBATEK/INEF4, Anglet",
    description:
      "Depuis la deuxième année de BUT, je suis en alternance en tant que développeur web full-stack. Je travaille sur des projets internes et externes à l'entreprise.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "BUT Informatique",
    location: "IUT de Bayonne et du Pays Basque",
    description:
      "Je suis actuellement en troisième année de BUT Informatique. J'apprends le développement web, les bases de données, la programmation orientée objet et les systèmes d'exploitation.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "DUT Informatique",
    location: "IUT de Bayonne et du Pays Basque",
    description:
      "J'ai fait la première année de DUT Informatique. J'ai appris les bases de la programmation, de la conception de logiciels et des réseaux.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Baccalauréat",
    location: "Lycée Sud des Landes, Saint-Vincent-de-Tyrosse",
    description:
      "Diplômé d'un baccalauréat scientifique (option Physique-Chimie).",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

/*
export const projectsData = [
  {
    title: "QRCodeApp (2024)",
    description: "Application mobile permettant aux employés d'une entreprise de peinture de pouvoir pointer leurs heures en scannant des QRCode, elle rempli automatiquement des feuilles de temps.",
    tags: ["React Native", "TypeScript", "Javascript", "Odoo"],
    imageUrl: qrcodeapp,
  },
  {
    title: "API python (2024)",
    description: "API REST en Python pour récupérer des données depuis une API externe, les traiter et faire des requêtes SPARQL sur une base de données RDF.",
    tags: ["Python", "SPARQL", "Flask"],
    imageUrl: python,
  },
  {
    title: "BIM Unity (2023-2024)",
    description: "Affichage d'informations BIM sur des jumeaux numériques dans Unity. Les données sont proviennent de fichiers de base de données SQLite et sont lues dynamiquement.",
    tags: ["Unity", "C#", "USS", "SQLite"],
    imageUrl: immersite,
  },
  {
    title: "MusicPalace (2022)",
    description: "Site web fictif d'une plateforme de vente de CD. https://cnaudi.alwaysdata.net/",
    tags: ["PHP", "MySQL", "Javascript", "HTML", "CSS"],
    imageUrl: musicPalace,
  },
  {
    title: "Surfgood (2021)",
    description: "Maquette d'une application de prévision de surf",
    tags: ["Figma", "Design", "Maquette"],
    imageUrl: surfgood,
  },
] as const;
*/

export const projectsData = [
  {
    title: "QRCodeApp (2024)",
    description: "Application mobile permettant à une enteprise de peinture de remplir les feuilles de temps. Les employés peuvent pointer leurs heures en scannant des QRCode.",
    tags: ["React Native", "TypeScript", "Javascript", "Odoo"],
    imageUrl: qrcodeapp,
  },
  {
    title: "BIM Unity (2023-2024)",
    description: "Affichage d'informations BIM sur des jumeaux numériques dans Unity. Les données proviennent de fichiers de base de données SQLite et sont lues dynamiquement.",
    tags: ["Unity", "C#", "USS", "SQLite"],
    imageUrl: immersite,
  },
  {
    title: "MusicPalace (2022)",
    description: "Site web fictif d'une plateforme de vente de CD. https://cnaudi.alwaysdata.net/",
    tags: ["PHP", "MySQL", "Javascript", "HTML", "CSS"],
    imageUrl: musicPalace,
  },
  {
    title: "Surfgood (2021)",
    description: "Maquette d'une application de prévision de surf",
    tags: ["Figma", "Design", "Maquette"],
    imageUrl: surfgood,
  },
] as const;

export const langagesData = {
  "Développement Web": ["HTML", "CSS", "SASS", "TailwindCSS", "Bootstrap", "JavaScript", "TypeScript", "React", "Node.js", "PHP", "MySQL", "SQLite", "MongoDB", "PostgreSQL"],
  "Développement mobile": ["React Native"],
  "Développement logiciel": ["Python", "Swift", "Java", "C#", "C", "Assembly"],
  "Outils de développement": ["Git", "Trello", "Docker", "Postman", "VSCode", "Xcode", "IntelliJ", "Rider"],
  "Conception graphique": ["Figma", "Photoshop", "Illustrator", "Premiere Pro"],
  "Autres": ["PowerBI", "Odoo", "Unity", "SCRUM"]
} as const;