import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { BookList } from './components/BookList';
import { Book } from './components/Book';
import { NewBook } from './components/NewBook';
// import { NotFound } from './components/NotFound';
// import { Movie } from './components/Movie';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav>
          <ul>
            {/* 
             refreshira koga se klika anchor linkot, a drugive so link to ne
            <li>
              <a href='/'>Home anchor</a>
            </li> */}
            <li>
              <Link to='/'>Home</Link>
              </li>
              {/* <li>
                <a href='/books'>Books anchor</a>
              </li> */}
            <li>
              <Link to='/books'>Books</Link>
              </li>
              <li>
                <Link to='/movies'>Movies</Link>
              </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books'>
            <Route index element={<BookList/>}/>
            <Route path=':id' element={<Book/>}/>
            <Route path='/books/new' element={<NewBook/>}/>
          </Route>
          {/* <Route path='/books' element={<BookList/>}/>
          <Route path='/books/:id' element={<Book/>}/>
          <Route path='/books/new' element={<NewBook/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/movies' element={<Movie/>}/> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
