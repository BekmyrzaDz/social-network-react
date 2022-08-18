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

const dialogs = [
  { name: "Dimych", id: 1 },
  { name: "Valera", id: 2 },
  { name: "Andrey", id: 3 },
  { name: "Vika", id: 4 },
  { name: "Nastya", id: 5 },
  { name: "Sasha", id: 6 },
];

const messages = [
  { message: "Hi", id: 1 },
  { message: "How are you?", id: 2 },
  { message: "Yo", id: 3 },
  { message: "Yo", id: 4 },
  { message: "Yo", id: 5 },
  { message: "Yo", id: 6 },
];

const dialogsElements = dialogs.map((d) => (
  <DialogItem name={d.name} id={d.id} />
));

const messagesElements = messages.map((m) => <Message message={m.message} />);

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
