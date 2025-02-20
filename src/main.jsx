import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//       <App />


// );
