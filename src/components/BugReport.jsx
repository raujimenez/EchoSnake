import React, { useState } from "react";
import {
  TextField,
  Dialog,
  Button,
  Typography,
  DialogTitle
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function BugReport(props) {
  const { open, onClose, theme } = props;

  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const textColor = theme === "light" ? "black" : "whitesmoke";
  const bgColor = theme === "light" ? "white" : "#2b2b2b";

  const handleOnClose = () => onClose(false);

  const useStyles = makeStyles(theme => ({
    paper: {
      backgroundColor: bgColor,
      color: textColor
    },
    input: {
      color: textColor
    }
  }));

  const classes = useStyles();

  return (
    <Dialog
      PaperProps={{ style: { backgroundColor: bgColor, color: textColor } }}
      style={{ textAlign: "center" }}
      onClose={handleOnClose}
      classes={classes.paper}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle>
        <Typography variant="h5">Describe the bug</Typography>
      </DialogTitle>
      <TextField
        InputProps={{ className: classes.input }}
        multiline
        rowsMax="5"
        style={{
          width: "25vw",
          padding: 10,
          marginLeft: "1vw",
          marginRight: "1vw"
        }}
        value={text}
        onChange={handleChange}
      />
      <span>
        <Button
          onClick={handleOnClose}
          variant="contained"
          color="secondary"
          style={{
            marginRight: "1vw",
            marginTop: "1vh",
            marginBottom: "1vh"
          }}
        >
          <Typography variant="h6">Cancel</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginLeft: "1vw",
            marginTop: "1vh",
            marginBottom: "1vh"
          }}
        >
          <Typography variant="h6">Submit</Typography>
        </Button>
      </span>
    </Dialog>
  );
}
