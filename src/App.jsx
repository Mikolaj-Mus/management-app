import NoProjects from "./components/NoProjects";
import YourProjects from "./components/YourProjects";

function App() {
  return (
    <main className="w-screen h-screen flex justify-between">
      <YourProjects />
      <NoProjects />
    </main>
  );
}

export default App;
