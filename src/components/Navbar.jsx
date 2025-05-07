import { MdOutlineAddTask } from "react-icons/md";

const Navbar = ({ openModal }) => {

  return (
    <nav className="bg-[#050c2a] w-full shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="w-[90%] mx-auto container text-white py-4 flex flex-row items-center justify-between">

        {/* Left side ........................(Logo + Title) */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">

          <div className="text-xl md:text-2xl font-bold"><MdOutlineAddTask /></div>
          <span className="text-lg md:text-2xl font-bold">TaskTracker</span>
        </div>

        {/* Right side..........................(Add Task Button) */}
        <div>
          <button
            onClick={openModal}
            className="bg-white text-[#3263ba] text-sm md:text-base hover:bg-[#F9DEC9] px-2 py-1 md:px-4 md:py-2 rounded shadow transition"
          >
            + Add New Task
          </button>
        </div>

      </div>


    </nav>
  );
};

export default Navbar;
