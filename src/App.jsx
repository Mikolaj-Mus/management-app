import NoProjects from "./components/NoProjects";
import YourProjects from "./components/YourProjects";
import CreateProject from "./components/CreateProject";
import ProjectView from "./components/ProjectView";
import { useState } from "react";

function App() {
  const [site, setSite] = useState(
    <NoProjects onChange={handleCreateProject} />
  );

  function handleCreateProject() {
    setSite(<CreateProject onChange={handleProjectView} />);
  }

  function handleProjectView() {
    setSite(<ProjectView />);
  }

  return (
    <main className="w-screen h-screen flex">
      <YourProjects />
      {site}
    </main>
  );
}

export default App;
