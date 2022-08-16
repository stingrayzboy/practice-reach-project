import React from "react";
import ReactDOM  from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.reset}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.reset}>OK</Button>
      </footer>
    </Card>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop reset={props.reset} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          reset={props.reset}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
