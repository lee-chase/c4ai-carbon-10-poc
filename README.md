# Carbon 10 + Web Components 2 POC

This project attempts to verify questions found in this issue

https://github.com/carbon-design-system/carbon-for-ai/issues/23

## Steps to create

1. Copy ibm-products-v1 example for React 17

## ToDo

1. Pad out the example with
   1. Global header
   2. Add a Carbon 10 form
2. Add Carbon WebComponent V2 form.
3. Test changing the prefix
4. Test theming

## Other issues to look into

1. Evaluate Carbon WebComponents that have named slots as there are A11y issues in cases where a wrapper element is problematic.
  https://lit.dev/docs/frameworks/react/#using-slots

  On Nov 9th 2023 the following Carbon WebComponents can be seen to include the code `<slot name` indicating use of a named slot.
  53 results - 29 files

packages/carbon-web-components/src/components/accordion/accordion-item.ts:
packages/carbon-web-components/src/components/breadcrumb/breadcrumb-overflow-menu.ts:
packages/carbon-web-components/src/components/button/button.ts:
packages/carbon-web-components/src/components/content-switcher/content-switcher-item.ts:
packages/carbon-web-components/src/components/copy/copy.ts:
packages/carbon-web-components/src/components/data-table/table-batch-actions.ts:
packages/carbon-web-components/src/components/data-table/table.ts:
packages/carbon-web-components/src/components/date-picker/date-picker-input.ts:
packages/carbon-web-components/src/components/dropdown/dropdown.ts:
packages/carbon-web-components/src/components/file-uploader/file-uploader.ts:
packages/carbon-web-components/src/components/icon-button/icon-button.ts:
packages/carbon-web-components/src/components/link/link.ts:
packages/carbon-web-components/src/components/list/list-item.ts:
packages/carbon-web-components/src/components/multi-select/multi-select.ts:
packages/carbon-web-components/src/components/notification/actionable-notification.ts:
packages/carbon-web-components/src/components/notification/inline-notification.ts:
packages/carbon-web-components/src/components/notification/toast-notification.ts:
packages/carbon-web-components/src/components/number-input/number-input.ts:
packages/carbon-web-components/src/components/pagination/pagination.ts:
packages/carbon-web-components/src/components/popover/popover.ts:
packages/carbon-web-components/src/components/progress-indicator/progress-step.ts:
packages/carbon-web-components/src/components/search/search.ts:
packages/carbon-web-components/src/components/select/select.ts:
packages/carbon-web-components/src/components/slider/slider.ts:
packages/carbon-web-components/src/components/text-input/text-input.ts:
packages/carbon-web-components/src/components/textarea/textarea.ts:
packages/carbon-web-components/src/components/tile/expandable-tile.ts:
packages/carbon-web-components/src/components/tile/tile-group.ts:
packages/carbon-web-components/src/components/toggle-tip/toggletip.ts:
