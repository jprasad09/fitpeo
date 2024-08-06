import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home, Analytics, Activity, Wallet, Orders, ErrorPage } from './pages';

// Create the router configuration with error handling
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path='/' element={<Home />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/activity' element={<Activity />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/orders' element={<Orders />} />
    </Route>
  )
);

const App = () => {
  return (
    // Provide the router to the application
    <RouterProvider router={router} />
  );
};

export default App;