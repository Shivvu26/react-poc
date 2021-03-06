import Task from "./Task";

const Tasks = ({ tasks, onDelete, setReminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          handleReminder={setReminder}
        />
      ))}
    </div>
  );
};

export default Tasks;
