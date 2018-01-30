import {configure} from '@storybook/react';

function loadStories() {
  require('../src/components/ActionButton/__stories__/index.js');
}

configure(loadStories, module);
