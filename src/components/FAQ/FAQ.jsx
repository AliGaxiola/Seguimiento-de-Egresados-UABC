import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
            backgroundColor: "green",
            color: "white",
            minHeight: 60,
            margin: 0,
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "white", color: "black" }}>
          <Typography>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
