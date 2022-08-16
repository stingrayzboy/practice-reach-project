import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './Modal.module.css'

const Modal = props => {
    return <div>
        <div className={classes.backdrop}></div>
        <Card className={classes.modal}>
        <div className={classes.header}>
        <h2>
            {props.title}
        </h2>
        </div>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.reset}>OK</Button>
        </footer>
    </Card>
    </div>
}
export default Modal