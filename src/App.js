import './App.css';

//recoil
import { RecoilRoot } from 'recoil';

//components
import { TodoList } from './TodoList';

function App() {
  return (
    <RecoilRoot>
      <h1>Recoil</h1>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
