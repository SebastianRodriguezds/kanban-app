import './App.css';
import { Kanban } from './components/kanban/Kanban';

function App() {
  return (
    <div style={{padding: "5px"}}>
      <h1 style={{marginBottom:'20px'}}>
        Kanban UI
      </h1>
      <Kanban />
    </div>
  );
}

export default App;

//sets up the basic structure for a React application with a Kanban UI, where the main application component (App) renders a heading and the Kanban component. The detailed functionality of the Kanban UI is likely implemented in the "Kanban" component.
