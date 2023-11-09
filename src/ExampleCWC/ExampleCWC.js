// cspell:words grafana

import React from 'react';

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

import './_example-cwc.scss';

export const ExampleCWC = () => {
  const additionalProps = {
    className: 'some-class',
    onSubmit: (e) => {
      e.preventDefault();
      console.log('FormSubmitted');
    },
  };

  const checkboxEvents = {
    className: 'some-class',
    'label-text': 'Checkbox label',
  };

  const fieldsetCheckboxProps = () => ({
    class: 'some-class',
    'legend-text': 'Checkbox heading',
    message: false,
    'message-text': '',
    invalid: false,
  });

  const numberInputProps = {
    class: 'some-class',
    id: 'number-input-1',
    label: 'Number Input',
    min: 0,
    max: 100,
    value: 50,
    step: 10,
  };

  const toggleProps = {
    class: 'some-class',
  };

  const fieldsetToggleProps = {
    class: 'some-class',
    'legend-text': 'Toggle heading',
  };

  const fileUploaderEvents = {
    'button-label': 'Add files',
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
    class: 'some-class',
    id: 'test2',
    'label-text': 'Text Input label',
    placeholder: 'Placeholder text',
  };

  const PasswordProps = {
    class: 'some-class',
    id: 'test3',
    'label-text': 'Password',
  };

  const InvalidPasswordProps = {
    class: 'some-class',
    id: 'test4',
    'label-text': 'Password',
    invalid: true,
    invalidText:
      'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
  };

  const textareaProps = {
    'label-text': 'Text Area label',
    class: 'some-class',
    placeholder: 'Placeholder text',
    id: 'test5',
    cols: 50,
    rows: 4,
  };

  const buttonEvents = {
    className: 'some-class',
  };

  return (
    <div>
      <h2>This is Carbon Web Components V2</h2>
      <h3>Example</h3>
      <div>
        <form>
          <CDSFormGroup {...fieldsetCheckboxProps}>
            <CDSCheckbox defaultChecked {...checkboxEvents} id='checkbox-0' />
            <CDSCheckbox {...checkboxEvents} id='checkbox-1' />
            <CDSCheckbox disabled {...checkboxEvents} id='checkbox-2' />
          </CDSFormGroup>

          <CDSNumberInput {...numberInputProps} />

          <CDSFormGroup {...fieldsetToggleProps}>
            <CDSToggle {...toggleProps} id='toggle-1' />
            <CDSToggle disabled {...toggleProps} id='toggle-2' />
          </CDSFormGroup>

          <CDSFormGroup {...fieldsetFileUploaderProps}>
            <CDSFileUploader
              {...fileUploaderEvents}
              id='file-1'
              labelDescription='Choose Files...'
            />
          </CDSFormGroup>

          <CDSFormGroup {...fieldsetRadioProps}>
            <CDSRadioButtonGroup
              onChange={() => console.log('onChange')}
              name='radio-button-group'
              defaultSelected='default-selected'
            >
              <CDSRadioButton
                value='standard'
                id='radio-1'
                label-text='Standard Radio Button'
                {...radioProps}
              />
              <CDSRadioButton
                value='default-selected'
                label-text='Default Selected Radio Button'
                id='radio-2'
                {...radioProps}
              />
              <CDSRadioButton
                value='blue'
                label-text='Standard Radio Button'
                id='radio-3'
                {...radioProps}
              />
              <CDSRadioButton
                value='disabled'
                label-text='Disabled Radio Button'
                id='radio-4'
                disabled
                {...radioProps}
              />
            </CDSRadioButtonGroup>
          </CDSFormGroup>

          <CDSFormGroup {...fieldsetSearchProps}>
            <CDSSearch
              {...searchProps}
              id='search-1'
              label-text='Search'
              placeholder='Search'
            />
          </CDSFormGroup>

          <CDSSelect
            {...selectProps}
            id='select-1'
            defaultValue='placeholder-item'
          >
            <CDSSelectItem
              disabled
              hidden
              value='placeholder-item'
              text='Choose an option'
            />
            <CDSSelectItem value='option-1' text='Option 1' />
            <CDSSelectItem value='option-2' text='Option 2' />
            <CDSSelectItem value='option-3' text='Option 3' />
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

          <CDSButton type='submit' className='some-class' {...buttonEvents}>
            Submit
          </CDSButton>

          <CDSDropdown value='none'>
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
        </form>
      </div>
      <h3>Notes</h3>
      <CDSOrderedList>
        <CDSListItem class='warning'>
          &gt;CDSOrdered list appears to have no numbering, some CSS is missing
        </CDSListItem>
        <CDSListItem class='warning'>
          &gt;The dropdown has no background color
        </CDSListItem>
        <CDSListItem className='warning'>
          &gt;Does not accept `className`
        </CDSListItem>
        <CDSListItem class='warning'>
          &gt;Named slots are not used in React normally. So NOT as simple as
          swapping Carbon/React for Carbon/WebComponetn
        </CDSListItem>
        <CDSListItem class='warning'>&gt;Hyphenated property names</CDSListItem>
        <CDSListItem>&gt;There is no CDSForm</CDSListItem>
      </CDSOrderedList>
    </div>
  );
};
