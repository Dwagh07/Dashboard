import React, { useState } from "react";
import "./cards.css";
import pic from "../../Components/assests/resumelogo.png";
import image from "../../Components/assests/profile image.png";
import Cardcomponents from "./Cardcomponents";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 3,
  pt: 2,
  px: 4,
  pb: 3,
};

function Cards(props) {
  const [open1, setOpen1] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };



  return (
    <div className="Container_Main">
      <button onClick={handleOpen} className="resumediv">
        <div className="resumelogo">
          <img img src={pic} />
        </div>
        <p className="resumeh1">Resume</p>
      </button>
      <div className="card">
        <div className="img-div">
       
          <img className="cardpic" img src={image} />
          <h1 className="cardname">{props.NameOfDev}</h1>
        </div>
        <h1 className="language">{props.language}</h1>
        <div className="bottom-div">
          <div className="text_div">
            <h4 className="available">Available from</h4>
            <h1 className="experience">Experiance(year)</h1>
          </div>
          <div className="date-div">
            <h1 className="date">{props.Date}</h1>
            <h1 className="years">{props.ExperianceYears}</h1>{" "}
          </div>
        </div>
        <button onClick={handleOpen1} className="Available-Div">
        
          <h1>Available</h1>
        </button>
      </div>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 450, height: 180 }}>
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 7,
                  ml: 4,
                  fontSize: 21,
                  color: "#2D2D30",
                  fontFamily: "Open Sans",
                  letterSpacing: 1,
                }}
              >
                Opening resume in the browser ...
              </Typography>
              <Button sx={{ mt: 4, ml: 40 }} onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Modal>
          <div>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="Child-modal-title"
            aria-describedby="Child-modal-description"
          >
            <Box sx={{ ...style, width: 450, height: 180 }}>
              <Typography sx={{ ml: 20, mt: 4, fontSize: 20 }}>
                NOTE:
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{
                  ml: 5,
                  fontSize: 21,
                  color: "#2D2D30",
                  fontFamily: "Open Sans",
                  letterSpacing: 1,
                }}
              >
                Selected person is Available
              </Typography>
              <Typography sx={{ mt: 4, ml: 8, textDecoration: "underline" }}>
                Continue to view resume in browser
              </Typography>
            </Box>
          </Modal>
          </div>
    </div>

   
  );
}
export default Cards;
