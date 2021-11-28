import React from "react";
import { makeStyles } from "@mui/styles";

import { Typography, Button } from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    overflow: "hidden",
    position: "relative"
  },
  blueSideBigIcon: {
      position: "absolute",
      left:"50%",
      top: "53%",
      transform: "translate(-50%, -50%)",
      width: "350% !important",
      height: "350% !important",
  },
  blueSideListInfo: {
      position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "#FFF",
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 40
    },
  },
  blueSideListInfoIcon: {
      fontSize: 44
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    overflow: "hidden",
  },
  loginSideWrapper: {
    width: 380,
  },
}));

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
      <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li>
            <Typography  variant="h6">
              <SearchIcon  sx={{fontSize: 32, marginRight: "10px"}} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleIcon sx={{fontSize: 32, marginRight: "10px"}} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon sx={{fontSize: 32, marginRight: "10px"}} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" sx={{ fontSize: 45 }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 32,
              marginBottom: "45px",
              marginTop: "20px",
            }}
            variant="h4"
          >
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
          </Typography>
          <br />
          <Button sx={{ marginBottom: 2 }} variant="contained" fullWidth>
            Зарегестрироваться
          </Button>
          <Button variant="outlined" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
