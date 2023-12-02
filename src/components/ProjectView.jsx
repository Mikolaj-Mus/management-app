export default function ProjectView() {
  return (
    <section className="w-5/12 my-auto ml-20">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-stone-700 font-bold text-2xl tracking-normal">
          Learning React
        </h1>
        <button className="text-stone-700 hover:text-red-700 mt-2">
          Delete
        </button>
      </div>
      <p className="text-stone-400 mb-8">Dec 29, 2024</p>
      <p className="border-stone-400 border-b-2 pb-5 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea
        temporibus nobis minima fugiat rem ipsa accusamus minus.
      </p>
      <h2 className="text-stone-700 font-bold text-xl mb-3">Tasks</h2>
      <div className="flex items-center mb-8">
        <input type="text" className="bg-stone-200 mr-2 w-60 h-7" />
        <button className="px-4 py-2">Add Task</button>
      </div>
      <ul className="bg-stone-100">
        <li className="flex justify-between py-5 px-2">
          <p>Learn advanced concepts</p>
          <button className="hover:text-red-700">Clear</button>
        </li>
      </ul>
    </section>
  );
}
