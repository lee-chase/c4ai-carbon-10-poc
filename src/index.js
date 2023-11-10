import React from 'react';
import { render } from 'react-dom';

// This ExampleC4P uses this CSS build to minimize CodeSandBox transpile times
import '@carbon/ibm-products/css/index-full-carbon.css';
import './_index.scss';

import { ExampleC4P } from './ExampleC4P/ExampleC4P';
import { ExampleCarbon } from './ExampleCarbon/ExampleCarbon';

import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import { ExampleCWC } from './ExampleCWC/ExampleCWC';
import { ExampleCWCLitReact } from './ExampleCWCLitReact/ExampleCWCLitReact';

render(
  <ThemeProvider>
    <div className='app'>
      <h1>Carbon for AI POC</h1>
      <div className='examples'>
        <ExampleC4P />
        <ExampleCarbon />
        <ExampleCWC />
        <ExampleCWCLitReact />
      </div>
      <ThemeDropdown />
    </div>
  </ThemeProvider>,
  document.getElementById('root'),
);
