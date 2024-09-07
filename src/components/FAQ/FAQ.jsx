import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";

// Componente para renderizar enlaces internos y externos
const LinkRenderer = ({ linkText, linkUrl }) => {
  const isExternal = linkUrl.startsWith("http");

  return isExternal ? (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "blue", textDecoration: "underline" }}
    >
      {linkText}
    </a>
  ) : (
    <RouterLink
      to={linkUrl}
      style={{ color: "blue", textDecoration: "underline" }}
    >
      {linkText}
    </RouterLink>
  );
};

const FAQ = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderContentWithLinks = (content) => {
    // Usamos una expresión regular para buscar enlaces en formato [texto](url)
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;

    // Reemplazamos los enlaces encontrados en el texto
    content.replace(linkRegex, (match, linkText, linkUrl, index) => {
      // Añadimos la parte del texto antes del enlace
      if (index > lastIndex) {
        parts.push(content.substring(lastIndex, index));
      }
      lastIndex = index + match.length;

      // Renderizamos el enlace usando LinkRenderer
      parts.push(
        <LinkRenderer key={index} linkText={linkText} linkUrl={linkUrl} />
      );
    });

    // Añadimos cualquier texto restante después del último enlace
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts;
  };

  return (
    <Box width="100%">
      <Accordion
        style={{
          border: "1px solid black",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          width: "100%",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: "#00673D",
            color: "white",
            minHeight: 60,
            margin: 0,
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "white", color: "black" }}>
          <Typography component="div">
            {renderContentWithLinks(content)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
