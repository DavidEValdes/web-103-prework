import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import Header from './components/Header';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

// Define routes using useRoutes
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/add", element: <AddCreator /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;