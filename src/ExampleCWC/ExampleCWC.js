// cspell:words grafana

import React, { useState } from 'react';

// ----------------------------------------------------
// This is an ExampleC4P showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import CDSDropdown from '@carbon/web-components/es/components-react/dropdown/dropdown.js';
import CDSDropdownItem from '@carbon/web-components/es/components-react/dropdown/dropdown-item.js';
import CDSOrderedList from '@carbon/web-components/es/components-react/list/ordered-list';
import CDSListItem from '@carbon/web-components/es/components-react/list/list-item.js';

import CDSButton from '@carbon/web-components/es/components-react/button/button.js';
import CDSCheckbox from '@carbon/web-components/es/components-react/checkbox/checkbox.js';
import CDSFileUploader from '@carbon/web-components/es/components-react/file-uploader/file-uploader.js';
import CDSFileUploaderButton from '@carbon/web-components/es/components-react/file-uploader/file-uploader-button.js';
import CDSFormGroup from '@carbon/web-components/es/components-react/form-group/form-group.js';
import CDSNumberInput from '@carbon/web-components/es/components-react/number-input/number-input.js';
import CDSRadioButton from '@carbon/web-components/es/components-react/radio-button/radio-button.js';
import CDSRadioButtonGroup from '@carbon/web-components/es/components-react/radio-button/radio-button-group.js';
import CDSSearch from '@carbon/web-components/es/components-react/search/search.js';
import CDSSelect from '@carbon/web-components/es/components-react/select/select.js';
import CDSSelectItem from '@carbon/web-components/es/components-react/select/select-item.js';
import CDSTextInput from '@carbon/web-components/es/components-react/text-input/text-input.js';
import CDSToggle from '@carbon/web-components/es/components-react/toggle/toggle.js';
import CDSTextArea from '@carbon/web-components/es/components-react/textarea/textarea.js';
import CDSStack from '@carbon/web-components/es/components-react/stack/stack.js';

import './_example-cwc.scss';

export const ExampleCWC = () => {
  const additionalProps = {
    class: 'some-class',
    onSubmit: (e) => {
      e.preventDefault();
      console.log('FormSubmitted');
    },
  };

  const checkboxEvents = {
    class: 'some-class',
    'label-text': 'Checkbox label',
  };

  const fieldsetCheckboxProps = {
    class: 'cds--fieldset',
    'legend-text': 'Checkbox heading',
    message: false,
    'message-text': '',
    invalid: false,
  };

  const numberInputProps = {
    class: 'some-class',
    id: 'cwc-number-input-1',
    label: 'Number Input',
    min: 0,
    max: 100,
    value: 50,
    step: 10,
  };

  const toggleProps = {
    class: 'some-class',
    'label-a': 'Off label a',
    'label-b': 'On label b',
  };

  const fieldsetToggleProps = {
    class: 'some-class',
    'legend-text': 'Toggle heading',
  };

  const fileUploaderEvents = {
    'label-text': 'Add files',
    class: 'some-class',
  };

  const fieldsetFileUploaderProps = {
    class: 'some-class',
    'legend-text': 'File Uploader',
  };

  const radioProps = {
    class: 'some-class',
  };

  const fieldsetRadioProps = {
    class: 'some-class',
    'legend-text': 'Radio Button heading',
  };

  const searchProps = {
    class: 'some-class',
  };

  const fieldsetSearchProps = {
    class: 'some-class',
    'legend-text': 'Search',
  };

  const selectProps = {
    class: 'some-class',
  };

  const TextInputProps = {
    // class: 'some-class',
    id: 'cwc-test2',
    label: 'Text Input label',
    placeholder: 'Placeholder text',
  };

  const PasswordProps = {
    class: 'some-class',
    id: 'cwc-test3',
    label: 'Password',
  };

  const InvalidPasswordProps = {
    class: 'some-class',
    id: 'cwc-test4',
    label: 'Password',
    invalid: true,
    'invalid-text':
      'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
  };

  const textareaProps = {
    label: 'Text Area label',
    class: 'some-class',
    placeholder: 'Placeholder text',
    id: 'cwc-test5',
    cols: 50,
    rows: 4,
  };

  const buttonEvents = {
    class: 'some-class',
  };

  const [ddValue, setDdValue] = useState('none');

  const handleDDChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h2>Carbon Web Components V2</h2>
      <div>
        <form>
          <CDSStack gap={7}>
            <CDSFormGroup {...fieldsetCheckboxProps}>
              <CDSCheckbox
                defaultChecked
                {...checkboxEvents}
                id='cwc-checkbox-0'
              />
              <CDSCheckbox {...checkboxEvents} id='cwc-checkbox-1' />
              <CDSCheckbox disabled {...checkboxEvents} id='cwc-checkbox-2' />
            </CDSFormGroup>

            <CDSNumberInput {...numberInputProps} />

            <CDSFormGroup {...fieldsetToggleProps}>
              <CDSToggle {...toggleProps} id='cwc-toggle-1' />
              <CDSToggle disabled {...toggleProps} id='cwc-toggle-2' />
            </CDSFormGroup>

            <CDSFormGroup {...fieldsetFileUploaderProps}>
              <CDSFileUploader
                id='cwc-file-1'
                label-description='Choose Files...'
              >
                <CDSFileUploaderButton class={fileUploaderEvents.class}>
                  {fileUploaderEvents['label-text']}
                </CDSFileUploaderButton>
              </CDSFileUploader>
            </CDSFormGroup>

            <CDSFormGroup {...fieldsetRadioProps}>
              <CDSRadioButtonGroup
                onChange={() => console.log('onChange')}
                name='radio-button-group'
                defaultSelected='default-selected'
              >
                <CDSRadioButton
                  value='standard'
                  id='cwc-radio-1'
                  label-text='Standard Radio Button'
                  {...radioProps}
                />
                <CDSRadioButton
                  value='default-selected'
                  label-text='Default Selected Radio Button'
                  id='cwc-radio-2'
                  {...radioProps}
                />
                <CDSRadioButton
                  value='blue'
                  label-text='Standard Radio Button'
                  id='cwc-radio-3'
                  {...radioProps}
                />
                <CDSRadioButton
                  value='disabled'
                  label-text='Disabled Radio Button'
                  id='cwc-radio-4'
                  disabled
                  {...radioProps}
                />
              </CDSRadioButtonGroup>
            </CDSFormGroup>

            <CDSFormGroup {...fieldsetSearchProps}>
              <CDSSearch
                {...searchProps}
                id='cwc-search-1'
                placeholder='Search'
              >
                <div slot='label-text'>Search asdf</div>
              </CDSSearch>
            </CDSFormGroup>

            <CDSSelect
              {...selectProps}
              id='cwc-select-1'
              value='placeholder-item'
            >
              <CDSSelectItem disabled hidden value='placeholder-item'>
                Choose an option
              </CDSSelectItem>
              <CDSSelectItem value='option-1'>Option 1</CDSSelectItem>
              <CDSSelectItem value='option-2'>Option 2</CDSSelectItem>
              <CDSSelectItem value='option-3'>Option 3</CDSSelectItem>
            </CDSSelect>

            <CDSTextInput {...TextInputProps} />

            <CDSTextInput
              type='password'
              required
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
              {...PasswordProps}
            />

            <CDSTextInput
              type='password'
              required
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
              {...InvalidPasswordProps}
            />

            <CDSTextArea {...textareaProps} />

            <CDSButton type='submit' class='some-class' {...buttonEvents}>
              Submit
            </CDSButton>

            <br />

            <CDSDropdown value={ddValue} onSelect={handleDDChange}>
              <div slot='title-text'>This is a slotted title *1</div>
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
          </CDSStack>
        </form>
      </div>
      <h3>Notes</h3>
      <CDSOrderedList>
        <CDSListItem class='error'>
          &gt;CDSOrdered list appears to have no numbering, some CSS is missing
        </CDSListItem>
        <CDSListItem class='warning'>
          &gt;body/root class needed for both 10 & 11 themes
        </CDSListItem>
        <CDSListItem class='warning'>
          &gt;Does not accept `className`
        </CDSListItem>
        <CDSListItem class='warning'>
          &gt;Named slots are not used in React normally. So NOT as simple as
          swapping Carbon/React for Carbon/WebComponent.
        </CDSListItem>
        <CDSListItem class='warning'>
          &gt;In some cases a slot is used instead of an property.
        </CDSListItem>
        <CDSListItem class='warning'>&gt;Hyphenated property names</CDSListItem>
        <CDSListItem class='warning'>
          &gt;Some props may have different defaults (label-a, label-b checkbox
          blank by default)
        </CDSListItem>
        <CDSListItem>&gt;There is no CDSForm</CDSListItem>
        <CDSListItem class='error'>&gt;CDSStack has not working</CDSListItem>
        <CDSListItem class='warning'>
          &gt;Use of CDN to import Carbon 11 styles
        </CDSListItem>
        <CDSListItem class='warning'>
          &gt;Some styling is off e.g. button (100% width)
        </CDSListItem>
        <CDSListItem class='warning'>&gt;Select missing a label</CDSListItem>
        <CDSListItem class='warning'>
          &gt;Chrome dev tools is complaining about duplicate IDs which appear
          to be in shadow-dom.
        </CDSListItem>
      </CDSOrderedList>
    </div>
  );
};
