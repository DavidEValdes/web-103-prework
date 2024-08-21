import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ShowCreators />} />
            <Route path="/view/:id" element={<ViewCreator />} />
            <Route path="/edit/:id" element={<EditCreator />} />
            <Route path="/add" element={<AddCreator />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;