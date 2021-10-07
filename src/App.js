import './App.css';

//recoil
import { RecoilRoot } from 'recoil';

//components
import { MainPage } from './MainPage';

function App() {
  return (
    <RecoilRoot>
      <h1>Recoil</h1>
      <MainPage />
    </RecoilRoot>
  );
}

export default App;
