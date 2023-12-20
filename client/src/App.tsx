import React from 'react';
import NavBar from './components/navBar';
import SearchBar from './components/serachBar';
import BookForm from './components/bookForm';
import BookLibrary from './components/bookLibrary';


const App: React.FC = () =>  {
  
  return (
    <div className="App">
      <BookForm />
      {/* <BookLibrary/> */}
      {/* <SearchBar/> */}
    </div>
  );
}

export default App;

