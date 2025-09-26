import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import MainLayout from './components/layout/Layout';


function App() {
  return (
    <MainLayout>
      <h1 className="mt-4">Welcome to Dashboard</h1>
      <p>This is your main content area.</p>
    </MainLayout>
  );
}

export default App;
