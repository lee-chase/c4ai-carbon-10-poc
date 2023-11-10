// cspell:words grafana

import React, { useState } from 'react';

// ----------------------------------------------------
// This is an ExampleC4P showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import {
  CDSDropdown,
  CDSDropdown2,
  CDSDropdown3,
  CDSDropdownItem,
} from './CWCLitReact';
import { createComponent } from '@lit/react';

import './_example-cwc-lit-react.scss';

export const ExampleCWCLitReact = () => {
  const [ddValue, setDdValue] = useState('none');
  const [ddValue2, setDdValue2] = useState('cwc-litreact2-none');
  const [ddValue3, setDdValue3] = useState('cwc-litreact3-none');

  const handleDDChange = (event) => {
    setDdValue(event.target.value);
  };
  const handleDDChange2 = (event) => {
    setDdValue2(event.target.value);
  };
  const handleDDChange3 = (event) => {
    setDdValue3(event.target.value);
  };
  return (
    <div>
      <h2>Carbon Web Components V2 @lit/react</h2>

      <div>
        <form>
          <CDSDropdown value={ddValue} onChange={handleDDChange}>
            <div slot='title-text'>This is a slotted title: {ddValue}</div>
            <div slot='helper-text'>This is a slotted helper text *1</div>
            <CDSDropdownItem value='none' disabled={true}>
              Make a selection
            </CDSDropdownItem>
            <CDSDropdownItem value='all'>Option 1</CDSDropdownItem>
            <CDSDropdownItem value='cloudFoundry'>Option 2</CDSDropdownItem>
            <CDSDropdownItem value='staging'>Option 3</CDSDropdownItem>
            <CDSDropdownItem value='dea'>Option 4</CDSDropdownItem>
            <CDSDropdownItem value='router'>Option 5</CDSDropdownItem>
          </CDSDropdown>

          <p>NOTE: This looks a lot like a @carbon/react component usage.</p>
          <CDSDropdown2
            onChange={handleDDChange2}
            value={ddValue2}
            titleText={`Looks more like React"${ddValue2}"`}
            helperText='This is helper text'
            items={[
              { id: 'cwc-litreact2-none', text: 'Make a selection' },
              { id: 'cwc-litreact2-all', text: 'Option 1' },
              { id: 'cwc-litreact2-cloudFoundry', text: 'Option 2' },
              { id: 'cwc-litreact2-staging', text: 'Option 3' },
              { id: 'cwc-litreact2-data', text: 'Option 4' },
              { id: 'cwc-litreact2-router', text: 'Option 5' },
            ]}
          />

          <p>
            NOTE: This looks a lot like a @carbon/react component, but is made
            using a custom function `createComponentPlus`.
          </p>
          <CDSDropdown3
            onChange={handleDDChange3}
            value={ddValue3}
            titleText={`Looks more like React uses custom "createComponent": "${ddValue3}"`}
            helperText='This is helper text'
            items={[
              { id: 'cwc-litreact3-none', text: 'Make a selection' },
              { id: 'cwc-litreact3-all', text: 'Option 1' },
              { id: 'cwc-litreact3-cloudFoundry', text: 'Option 2' },
              { id: 'cwc-litreact3-staging', text: 'Option 3' },
              { id: 'cwc-litreact3-data', text: 'Option 4' },
              { id: 'cwc-litreact3-router', text: 'Option 5' },
            ]}
          />
        </form>
      </div>
    </div>
  );
};
