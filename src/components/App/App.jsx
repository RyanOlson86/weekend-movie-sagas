import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import DetailsPage from '../DetailsPage/DetailsPage';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <DetailsPage />
        </Route>

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
