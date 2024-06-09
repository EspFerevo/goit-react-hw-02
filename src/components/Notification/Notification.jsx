import { BiMessageError } from "react-icons/bi";
import css from "./Notification.module.css";

const Notification = () => (
  <p>
    No feedback yet <BiMessageError className={css.icon}></BiMessageError>
  </p>
);

export default Notification;
