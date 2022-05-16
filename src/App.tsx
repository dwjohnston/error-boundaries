import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SomeFlakeyComponent } from './components/SomeFlakeyComponent';
import { ErrorBoundary } from './components/SmallErrorBoundary';
import { SomeFlakeyComponent3 } from './components/SomeFlakeyComponent3';
import { SomeFlakeyComponent2 } from './components/SomeFlakeyComponent2';

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallbackComponent={<>THIS IS THE ROOT LEVEL FALLBACK</>}>
        <SomeFlakeyComponent shouldErrorOnClick={false} />
        <SomeFlakeyComponent shouldErrorOnClick={true} />


        <SomeFlakeyComponent2 shouldErrorOnClick={false} />
        <SomeFlakeyComponent2 shouldErrorOnClick={true} />



        <SomeFlakeyComponent3 shouldErrorOnClick={false} />
        <SomeFlakeyComponent3 shouldErrorOnClick={true} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
