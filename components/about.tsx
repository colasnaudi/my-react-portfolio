"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("A propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Je suis actuellement en troisième année de{" "}
        <span className="font-medium">BUT Informatique</span>. J'apprends le
        développement web, les bases de données, la programmation orientée objet,
        le développement logiciel, et bien plus encore. J'ai également appris à
        travailler en équipe et à gérer des projets.
        J'ai pu mettre en oeuvre mes compétences en développement web lors de
        plusieurs projets personnels, scolaires et professionnels.{" "}
        Les langages que j'utilise le plus sont{" "}
        <span className="font-medium">React, Python, C#, MySQL</span>
      </p>

      <p>
        Durant mon temps libre, j'aime pratiquer du sport tels que le <span className="underline">surf,
        la pelote basque ou la musculation</span>. J'aime également{" "}
        <span className="underline">voyager</span> et
        découvrir de nouvelles cultures.
      </p>
    </motion.section>
  );
}
