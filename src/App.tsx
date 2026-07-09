import { BrowserRouter } from 'react-router';
import AppRouter from './components/AppRouter';
import "./App.styles.scss"

const App = () => {
  return (
    <div style={{display: "flex"}}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
};

export default App;