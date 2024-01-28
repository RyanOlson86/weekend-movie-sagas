import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import DetailsPage from '../DetailsPage/DetailsPage';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details/:id" >
          <DetailsPage />
        </Route>

        <Route path="/add-movie" exact>
          <AddMovie />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
