import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

/**
 * The following config swaps storybook's react-test-renderer
 * with @testing-library/react renderer to syncronise with Next.js
 * see https://storybook.js.org/addons/@storybook/addon-storyshots
 */
const reactTestingLibrarySerializer = {
  print: (val, serialize, indent) => serialize(val.container.firstChild),
  test: (val) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer],
});
