import { BrowserRouter } from 'react-router';
import AppRouter from './components/AppRouter';
import "./App.styles.scss"
import BurgerMenu from './components/UI/BurgerMenu/BurgerMenu';

const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <BrowserRouter>
        <BurgerMenu/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
};

export default App;