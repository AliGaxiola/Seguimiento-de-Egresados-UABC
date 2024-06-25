import React from "react";
import FAQ from "../FAQ/FAQ";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Container } from "@mui/material";

function SectionFAQ() {
  return (
    <>
      <SectionTitle text={"Preguntas Frecuentes"} />

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 5,
          width: "100%",
          px: { xs: 2, md: 4 },
        }}
      >
        <FAQ
          title="Extravié el certificado de preparatoria."
          content="Solicitar una copia en tu preparatoria."
        />
        <FAQ
          title="No puedo descargar la pre-solicitud"
          content="Tienes que esperar el correo de escolares solicitando la pre-solicitud para descargarla en la plataforma siii.uabc.mx."
        />
        <FAQ
          title="Después de que tenga en físico mi certificado de pasante, ¿qué hago?"
          content="Continúa con el paso 2 de titulación (verificación de documentos- enlace del paso 2)."
        />
        <FAQ
          title="En donde descargo la constancia del servicio social profesional"
          content="En la plataforma del serviciosocial.uabc.mx."
        />
        <FAQ
          title="En donde entrego los documentos del paso 3 de titulación"
          content="En el cubículo 2 de la FTYM, dejarlos en el buzón (enlace del paso 3) horario de lunes a viernes de 7:00 am a 9:00 pm."
        />
        <FAQ
          title="Tengo dudas del proceso de titulación deseo agendar cita"
          content="Para agendar cita al correo titulacion.ftmtij@uabc.edu.mx."
        />
        <FAQ
          title="Quiero una cartera de boletos para apoyar a mi facultad"
          content="Agendar cita titulacion.ftmtij@uabc.edu.mx para recoger los boletos en el cubículo 2."
        />
        <FAQ
          title="En donde realizó el pago de los boletos de sorteos"
          content="En sorteos."
        />
        <FAQ
          title="En donde realizo el pago de responsabilidad social universitaria"
          content="Se paga en caja (edificio de vicerrectoría- tesorería, 2do piso)."
        />
        <FAQ
          title="En donde pago la mención honorífica"
          content="Se paga en caja (edificio de vicerrectoría- tesorería, 2do piso)."
        />
        <FAQ
          title="No tengo liberado el inglés, ¿en donde presento el examen de inglés?"
          content="Revisar las fechas de examen de inglés para egreso en la página de idiomas https://idiomas.uabc.mx/."
        />
        <FAQ
          title="Qué necesito para poder participar en un acto académico?"
          content="El paso 1 de titulación (Certificado de pasante enlace a paso 1)."
        />
        <FAQ
          title="Qué necesito para poder asistir en la ceremonia de potenciales a egresar?"
          content="Estar en 8vo semestre."
        />
      </Container>
    </>
  );
}

export default SectionFAQ;
