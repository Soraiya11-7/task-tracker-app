import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import TaskModal from "./components/TaskModal";
import TaskList from "./components/TaskList";
import Swal from "sweetalert2";


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
    const updatedTasks = tasks.map((task) => 
        task.id === id ? { ...task, completed: true } : task);
    setTasks(updatedTasks);
  };


  //delete task.....
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This task will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove task from the list in localStorage.........
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);

        Swal.fire('Deleted!', 'The task has been deleted.', 'success');
      }
    });
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
