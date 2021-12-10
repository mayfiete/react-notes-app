import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from './pages/NotePage';

import './App.css';


function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route component={NotesPage} path="/" exact />
          <Route component={NotePage} path="/note/:id" />
        </div>
      </div>
    </Router>
  );
}

export default App;
