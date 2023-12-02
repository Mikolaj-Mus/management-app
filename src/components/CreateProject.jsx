export default function CreateProject({ onChange }) {
  const descStyle = "text-stone-500 uppercase font-bold mb-1 text-sm";
  const inputStyle =
    "bg-stone-200 text-stone-700 text-lg h-10 border-b-2 border-stone-600 mb-4";

  return (
    <section className="flex flex-col w-5/12 my-auto ml-20">
      <div className="mb-8 mr-0 ml-auto">
        <button className="px-5 py-1.5 bg-none rounded-md">Cancel</button>
        <button
          onClick={onChange}
          className="text-stone-100 px-5 py-1.5 bg-black rounded-md"
        >
          Save
        </button>
      </div>
      <p className={descStyle}>Title</p>
      <input type="text" className={inputStyle} />
      <p className={descStyle}>Description</p>
      <textarea
        type="text"
        className="bg-stone-200 text-stone-700 text-lg border-b-2 border-stone-600 mb-4 h-16"
      />
      <p className={descStyle}>Due Date</p>
      <input type="date" className={inputStyle} />
    </section>
  );
}
