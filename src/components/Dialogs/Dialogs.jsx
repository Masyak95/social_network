import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Etienne Mandel Tristan'},
        {id: 2, name: 'John Barnes'},
        {id: 3, name: 'Jenelle Lacey Jasmyn'},
        {id: 4, name: 'Toya Avery Rahel'},
        {id: 5, name: 'Arnold Fraser'},
        {id: 6, name: 'Lillian Gilson'}
    ]

    let messagesData = [
        {id: 1, message: 'Keep Your Shirt On'},
        {id: 2, message: 'How is your it-study?'},
        {id: 3, message: 'Jaws of Death'},
        {id: 4, message: 'Hi!'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements =  dialogsData.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = messagesData.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;