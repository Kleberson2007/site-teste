import './style.css'
import React, { useState } from 'react';

export default function App() {



  return (
    <header>
      <div className='menu'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>
      <div className='pesquisar'>
        <imput />
      </div>
      <div className='icons'>
        <div id='exemplo1'>1</div>
        <div id='exemplo2'>2</div>
        <div id='exemplo3'>3</div>
      </div>
    </header>
  );
}