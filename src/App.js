import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import MainRoutes from './Routes/MainRoutes';
import { Config, DivBody } from './style/Styled';

function App() {
  return (
      <Config>

      <Header/>
      <MainRoutes/>
      <Footer/>
      </Config>
 
      
  );
}

export default App;
