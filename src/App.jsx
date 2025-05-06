import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import TaskModal from "./components/TaskModal";


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
  
  return (
    <>
    <Navbar openModal={() => setShowModal(true)}></Navbar>
      <div className="min-h-[calc(100vh-124px)] ">
      <h1 className='bg-sky-300 text-center'>Task Tracker</h1>
      </div>
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

export default App
