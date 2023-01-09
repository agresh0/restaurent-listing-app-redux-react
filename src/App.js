import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurentList from './components/RestaurentList';
import RestaurentDetails from './components/RestaurentDetails';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

<Routes>
        {/* {path for RestaurentList} */}
        <Route path='/' element={<RestaurentList/>}/>
        {/* {path for restaurentDetails} */}
        <Route path='/restaurentDetails/:id' element={<RestaurentDetails/>}/>

</Routes>       
      <Footer/>

    </div>
  );
}

export default App;
