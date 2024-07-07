import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function CardBox({ image, title, content }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              objectFit: "cover",
              height: 200,
            }}
          />
          <CardContent
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "green", textAlign: "center", flex: "0 0 auto" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flex: "1 0 auto" }}
            >
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img src={image} alt={title} style={{ width: "100%" }} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CardBox;
