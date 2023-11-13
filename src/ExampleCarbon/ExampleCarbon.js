// cspell:words grafana

import React from 'react';

// ----------------------------------------------------
// This is an ExampleC4P showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import {
  Button,
  Checkbox,
  FileUploader,
  Form,
  FormGroup,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  Search,
  Select,
  SelectItem,
  TextInput,
  Toggle,
  TextArea,
} from 'carbon-components-react';

import './_example-carbon.scss';

export const ExampleCarbon = () => {
  const additionalProps = {
    className: 'some-class',
    onSubmit: (e) => {
      e.preventDefault();
      console.log('FormSubmitted');
    },
  };

  const checkboxEvents = {
    className: 'some-class',
    labelText: 'Checkbox label',
  };

  const fieldsetCheckboxProps = () => ({
    className: 'some-class',
    legendText: 'Checkbox heading',
    message: false,
    messageText: '',
    invalid: false,
  });

  const numberInputProps = {
    className: 'some-class',
    id: 'carbon-number-input-1',
    label: 'Number Input',
    min: 0,
    max: 100,
    value: 50,
    step: 10,
  };

  const toggleProps = {
    className: 'some-class',
  };

  const fieldsetToggleProps = {
    className: 'some-class',
    legendText: 'Toggle heading',
  };

  const fileUploaderEvents = {
    buttonLabel: 'Add files',
    className: 'some-class',
  };

  const fieldsetFileUploaderProps = {
    className: 'some-class',
    legendText: 'File Uploader',
  };

  const radioProps = {
    className: 'some-class',
  };

  const fieldsetRadioProps = {
    className: 'some-class',
    legendText: 'Radio Button heading',
  };

  const searchProps = {
    className: 'some-class',
  };

  const fieldsetSearchProps = {
    className: 'some-class',
    legendText: 'Search',
  };

  const selectProps = {
    className: 'some-class',
  };

  const TextInputProps = {
    className: 'some-class',
    id: 'carbon-test2',
    labelText: 'Text Input label',
    placeholder: 'Placeholder text',
  };

  const PasswordProps = {
    className: 'some-class',
    id: 'carbon-test3',
    labelText: 'Password',
  };

  const InvalidPasswordProps = {
    className: 'some-class',
    id: 'carbon-test4',
    labelText: 'Password',
    invalid: true,
    invalidText:
      'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
  };

  const textareaProps = {
    labelText: 'Text Area label',
    className: 'some-class',
    placeholder: 'Placeholder text',
    id: 'carbon-test5',
    cols: 50,
    rows: 4,
  };

  const buttonEvents = {
    className: 'some-class',
  };

  return (
    <div>
      <h2>Carbon 10 (Carbon React 7)</h2>
      <div>
        <Form {...additionalProps}>
          <FormGroup {...fieldsetCheckboxProps()}>
            <Checkbox
              defaultChecked
              {...checkboxEvents}
              id='carbon-checkbox-0'
            />
            <Checkbox {...checkboxEvents} id='carbon-checkbox-1' />
            <Checkbox disabled {...checkboxEvents} id='carbon-checkbox-2' />
          </FormGroup>

          <NumberInput {...numberInputProps} />

          <FormGroup {...fieldsetToggleProps}>
            <Toggle {...toggleProps} id='carbon-toggle-1' />
            <Toggle disabled {...toggleProps} id='carbon-toggle-2' />
          </FormGroup>

          <FormGroup {...fieldsetFileUploaderProps}>
            <FileUploader
              {...fileUploaderEvents}
              id='carbon-file-1'
              labelDescription='Choose Files...'
            />
          </FormGroup>

          <FormGroup {...fieldsetRadioProps}>
            <RadioButtonGroup
              onChange={() => console.log('onChange')}
              name='radio-button-group'
              defaultSelected='default-selected'
            >
              <RadioButton
                value='standard'
                id='carbon-radio-1'
                labelText='Standard Radio Button'
                {...radioProps}
              />
              <RadioButton
                value='default-selected'
                labelText='Default Selected Radio Button'
                id='carbon-radio-2'
                {...radioProps}
              />
              <RadioButton
                value='blue'
                labelText='Standard Radio Button'
                id='carbon-radio-3'
                {...radioProps}
              />
              <RadioButton
                value='disabled'
                labelText='Disabled Radio Button'
                id='carbon-radio-4'
                disabled
                {...radioProps}
              />
            </RadioButtonGroup>
          </FormGroup>

          <FormGroup {...fieldsetSearchProps}>
            <Search
              {...searchProps}
              id='carbon-search-1'
              labelText='Search'
              placeholder='Search'
            />
          </FormGroup>

          <Select
            {...selectProps}
            id='carbon-select-1'
            defaultValue='placeholder-item'
          >
            <SelectItem
              disabled
              hidden
              value='placeholder-item'
              text='Choose an option'
            />
            <SelectItem value='option-1' text='Option 1' />
            <SelectItem value='option-2' text='Option 2' />
            <SelectItem value='option-3' text='Option 3' />
          </Select>

          <TextInput {...TextInputProps} />

          <TextInput
            type='password'
            required
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
            {...PasswordProps}
          />

          <TextInput
            type='password'
            required
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
            {...InvalidPasswordProps}
          />

          <TextArea {...textareaProps} />

          <Button type='submit' className='some-class' {...buttonEvents}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
