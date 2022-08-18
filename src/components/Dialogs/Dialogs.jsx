import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const dialogsData = [
  { name: "Dimych", id: 1 },
  { name: "Valera", id: 2 },
  { name: "Andrey", id: 3 },
  { name: "Vika", id: 4 },
  { name: "Nastya", id: 5 },
  { name: "Sasha", id: 6 },
];
const messagesData = [
  { message: "Hi", id: 1 },
  { message: "How are you?", id: 2 },
  { message: "Yo", id: 3 },
  { message: "Yo", id: 4 },
  { message: "Yo", id: 5 },
  { message: "Yo", id: 6 },
];

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
