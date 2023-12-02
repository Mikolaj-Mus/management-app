export default function YourProjects() {
  return (
    <section className="w-80 h-90vh mt-10 bg-black rounded-tr-2xl flex flex-col">
      <h1 className="text-stone-100 uppercase font-bold text-2xl p-6 mt-10">
        Your Projects
      </h1>
      <button className="text-stone-400 px-4 py-2 bg-stone-800 w-32 text-sm rounded-md ml-6 mb-6">
        + Add Project
      </button>
      <ul>
        <li className="bg-stone-800 p-1.5 ml-6 mr-10 mb-2">
          <button className="text-stone-100">Learning project</button>
        </li>
      </ul>
    </section>
  );
}
