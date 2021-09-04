import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, handleReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => handleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <h3>{task.day}</h3>
    </div>
  );
};

export default Task;
