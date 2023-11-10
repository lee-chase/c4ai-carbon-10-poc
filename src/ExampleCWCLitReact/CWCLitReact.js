// cspell:words grafana

import React from 'react';

// ----------------------------------------------------
// This is an ExampleC4P showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import * as CWC from '@carbon/web-components/es/index.js';

import { createComponent } from '@lit/react';

const SlotIt = ({ slotName, children }) =>
  slotName === 'default' ? (
    children
  ) : (
    <div slot={slotName} key={slotName}>
      {children}
    </div>
  );

const createComponentPlus = ({ slots, ...options }) => {
  const Component = createComponent(options);
  const slotNames = Object.keys(slots);

  return (props) => {
    const splitProps = { props: {}, slots: {} };
    Object.keys(props).forEach((propName) => {
      // is there a slotName for this prop name
      const slotName = slotNames.find((name) => slots[name].prop === propName);

      if (slotName) {
        // prop name matches slots[key].prop
        splitProps.slots[propName] = {
          slotName,
          content: props[propName],
          processContent: slots[slotName].processContent,
        };
      } else {
        splitProps.props[propName] = props[propName];
      }
    });

    const children = Object.keys(splitProps.slots).map((propName) => {
      const { slotName, content, processContent } = splitProps.slots[propName];
      return (
        <SlotIt slotName={slotName} key={slotName}>
          {processContent ? processContent(content) : content}
        </SlotIt>
      );
    });

    return <Component {...splitProps.props}>{children}</Component>;
  };
};

export const CDSDropdown = createComponent({
  tagName: 'cds-dropdown',
  elementClass: CWC.CDSDropdown,
  react: React,
  events: {
    onChange: 'cds-dropdown-selected',
  },
});

export const CDSDropdownItem = createComponent({
  tagName: 'cds-dropdown-item',
  elementClass: CWC.CDSDropdownItem,
  react: React,
});

export const CDSDropdown2 = ({ items, helperText, titleText, ...props }) => (
  <CDSDropdown {...props}>
    <div slot='title-text'>{titleText}</div>
    <div slot='helper-text'>{helperText}</div>
    {items.map(({ id, text, ...rest }) => (
      <CDSDropdownItem key={id} value={id} {...rest}>
        {text}
      </CDSDropdownItem>
    ))}
  </CDSDropdown>
);

export const CDSDropdown3 = createComponentPlus({
  tagName: 'cds-dropdown',
  elementClass: CWC.CDSDropdown,
  react: React,
  events: {
    onChange: 'cds-dropdown-selected',
  },
  slots: {
    'title-text': { prop: 'titleText' },
    'helper-text': { prop: 'helperText' },
    default: {
      prop: 'items',
      processContent: (content) =>
        content.map(({ id, text, ...rest }) => (
          <CDSDropdownItem value={id} key={id} {...rest}>
            {text}
          </CDSDropdownItem>
        )),
    },
  },
});
