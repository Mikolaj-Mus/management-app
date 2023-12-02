import logo from "../assets/no-projects.png";

export default function NoProjects() {
  return (
    <section className="flex items-center justify-center flex-col m-auto mt-28">
      <img src={logo} alt="Book with a pen" className="h-20 w-20 mb-5" />
      <h1 className="text-stone-600 font-bold text-2xl mb-5 tracking-normal">
        No Project Selected
      </h1>
      <h2 className="text-stone-400 text-lg mb-8">
        Select a project or get started with a new one
      </h2>
      <button className="text-stone-400 px-5 py-2.5 bg-stone-800 rounded-lg">
        Create new project
      </button>
    </section>
  );
}
