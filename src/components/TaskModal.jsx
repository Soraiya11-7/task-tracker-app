import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TaskModal = ({ closeModal, onAddTask }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const formatDate = (dateObj) => {
    return dateObj.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };


  const onSubmit = (data) => {
    const currentDate = formatDate(new Date());

    const task = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      date: currentDate,
      completed: false,
    };

    onAddTask(task);
    reset();
    closeModal();

    // Show success alert..........
    Swal.fire({
      icon: 'success',
      title: 'Task Added',
      text: 'Your task has been successfully added!',
      confirmButtonColor: '#3085d6',
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-50 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6">Add New Task</h2>

        {/* Title......................................... */}
        <div className="relative">
          <input
            type="text"
            {...register("title", { required: "Task title is required" })}
            className="w-full border border-gray-400 rounded-md px-3 pt-5 pb-2  focus:outline-none focus:border-blue-600"
            placeholder=" "
          />
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-[#050c2a]">
            Task Title
          </label>
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* description ............................. */}
        <div className="relative">
          <textarea
            {...register("description", { required: "Task description is required" })}

            className="w-full border border-gray-400 rounded-md px-3 pt-5 pb-2  focus:outline-none focus:border-blue-600"
            placeholder=" "
          ></textarea>
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-[#050c2a]">
            Task description
          </label>
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        {/* Action Buttons........................... */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={closeModal}
            className="px-3 py-1.5 md:px-5 md:py-2 bg-gray-300 text-sm md:text-base  text-gray-800 rounded hover:bg-gray-400 transition font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 md:px-5 md:py-2 bg-[#050c2a] text-white text-sm md:text-base rounded hover:bg-[#282849] transition font-semibold"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
