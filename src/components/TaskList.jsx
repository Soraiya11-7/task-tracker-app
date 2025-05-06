import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { FaListAlt, FaCheckCircle } from 'react-icons/fa';

const TaskList = ({ tasks, onComplete, onDelete }) => {
    
    const totalTasks = tasks.length;
    const completedTasks = 0;

    return (
        <section className="py-6 w-[95%] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">All Tasks</h2>

            {/* Stats Cards................... */}
            <div className="flex justify-center gap-4 flex-wrap mb-8">

                {/* Total Task............... */}
                <div className="bg-[#f8e9de] border border-[#edcab3] p-4 rounded-lg text-center shadow min-w-[150px] flex-1 sm:flex-none sm:w-[45%] lg:w-[200px] transform transition duration-300 hover:scale-105">
                    <FaListAlt className="text-[#95592e] text-3xl mx-auto mb-2" />
                    <h3 className="text-lg font-medium text-[#95592e]">Total Tasks</h3>
                    <p className="text-2xl font-bold">{totalTasks}</p>
                </div>


                {/* Finished Task............... */}
                <div className="bg-green-100 border border-green-300 p-4 rounded-lg text-center shadow min-w-[150px] flex-1 sm:flex-none sm:w-[45%] lg:w-[200px] transform transition duration-300 hover:scale-y-105">
                    <FaCheckCircle className="text-green-600 text-3xl mx-auto mb-2" />
                    <h3 className="text-lg font-medium text-green-800">Completed</h3>
                    <p className="text-2xl font-bold">{completedTasks}</p>
                </div>
            </div>


            {/* Task List................................................. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tasks.map(task => (
                    <div
                        key={task.id}
                        className="bg-slate-100 p-5 rounded-lg transform transition duration-300 hover:scale-105 shadow-[3px_3px_0px_0px_#050c2a,6px_6px_0px_0px_#050c2a]"
                    >
                        {/* Title.............. */}
                        <h3 className={`text-lg md:text-xl font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                            {task.title}
                        </h3>
                        {/* Desc................... */}
                        <p className={`text-xs md:text-sm ${task.completed ? 'line-through text-gray-400' : ''}`}>
                            {task.description}
                        </p>

                        {/* Action btn.......................... */}
                        <div className="flex justify-between items-center mt-6 -mb-3">
                            <button
                                onClick={() => onComplete(task.id)}
                                disabled={task.completed}
                                className={`text-sm px-3 py-1.5 rounded transition font-semibold ${task.completed
                                        ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                                        : 'bg-[#111a42] hover:bg-green-600 text-white'
                                    }`}
                            >
                                {task.completed ? 'Completed' : 'Complete'}
                            </button>

                            <button
                                onClick={() => onDelete(task.id)}
                                className="text-red-500 hover:text-red-700 text-xl transition"
                                title="Delete Task"
                            >
                                <FiTrash2 />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TaskList;
