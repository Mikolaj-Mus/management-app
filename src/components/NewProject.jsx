import Input from "./Input";

export default function NewProject({ onChange }) {
  return (
    <div className="">
      <menu className="">
        <button className="">Cancel</button>
        <button onClick={onChange} className="">
          Save
        </button>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
