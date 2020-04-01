import { action } from '@storybook/addon-actions';

export const logAction = (actionName, ...args) => {
  console.warn(actionName, ...args);
  return action(actionName)(...args);
};
