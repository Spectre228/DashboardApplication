import { BrowserRouter } from 'react-router';
import AppRouter from './routers/AppRouter';
import "./styles/App.styles.scss";
import BurgerMenu from '../components/UI/BurgerMenu/BurgerMenu';

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