import "./App.scss";
import "./styles/main.scss";
import { ContextMenu } from "./components/ContextMenu";
import { DropZone } from "./components/DropZone";
function App() {
  return (
    <div className="App" style={{ padding: "5rem" }}>
      <ContextMenu />
      <DropZone />
    </div>
  );
}

export default App;
