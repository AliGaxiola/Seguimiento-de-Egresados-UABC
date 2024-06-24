import React from "react";
import NewsBox from "../NewsBox/NewsBox";
import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

function AvisosSection() {
  return (
    <>
      <SectionTitle text={"Avisos"} />

      <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: 14 }}>
        <NewsBox
          title={"AVISO 1"}
          notice={"Los actos académicos se realizan a finales de cada semestre"}
          date="Junio y Diciembre"
        />
        <NewsBox
          title={"AVISO 2"}
          notice={
            "La Ceremonia de Potenciales a Egresar se realizan a finales de cada semestre"
          }
          date="Junio y Diciembre"
        />
        <NewsBox
          title={"AVISO 3"}
          notice={"La toma de protesta se realizan 2 veces cada semestre"}
          date="Marzo, Junio, Septiembre, Diciembre"
        />
      </Box>
    </>
  );
}

export default AvisosSection;
