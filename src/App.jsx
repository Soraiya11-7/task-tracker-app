import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import TaskModal from "./components/TaskModal";
import TaskList from "./components/TaskList";


function App() {

  const [tasks, setTasks] = useState(() => {
    const existingTasks = localStorage.getItem("tasks");  //get all tasks
    return existingTasks ? JSON.parse(existingTasks) : [];
  });

  // console.log(tasks)


  //add task on local storage...........
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const [showModal, setShowModal] = useState(false);

  //finished task.....
  const handleComplete = (id) => {
    console.log(id);
  };



  //delete task.....
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <>
      <Navbar openModal={() => setShowModal(true)}></Navbar>

      <main className="min-h-[calc(100vh-124px)] bg-slate-50 ">
        <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} />
      </main>

      <Footer></Footer>
      {/* Modal */}
      {showModal &&
        <TaskModal
          closeModal={() => setShowModal(false)}
          onAddTask={handleAddTask}
        />
      }

    </>

  )
}

export default App;
