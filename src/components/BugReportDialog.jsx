import React, { useState } from "react";
import {
  TextField,
  Dialog,
  Button,
  Typography,
  DialogTitle,
  Snackbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={12} variant="filled" {...props} />;
}


export default function BugReportDialog(props) {
  const { open, onClose, theme } = props;

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = event => {
    setText(event.target.value);
  };

  const textColor = theme === "light" ? "black" : "whitesmoke";
  const bgColor = theme === "light" ? "white" : "#2b2b2b";

  const handleOnClose = () => onClose(false);

  // send to bug report
  const handleSubmit = () => {
    onClose(false);
    setSubmitted(true);
    setText('');
  }

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSubmitted(false);
  };

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
    <div>
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
        autoFocus={open}
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
          onClick={handleSubmit}
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
    <Snackbar open={submitted} autoHideDuration={3000} onClose={handleAlertClose}>
      <Alert onClose={handleAlertClose} severity="success">
        Bug Report Sent, Thanks
      </Alert>
    </Snackbar>
    </div>
  );
}
