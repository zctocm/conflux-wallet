/*
 * GenerateWalletModal Messages
 *
 * This contains all the text for the GenerateWalletModal component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.GenerateWalletModal';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'New Wallet',
  },
  create: {
    id: `${scope}.create`,
    defaultMessage: 'Create Now',
  },
  title1: {
    id: `${scope}.title1`,
    defaultMessage: 'Waring:',
  },
  title2: {
    id: `${scope}.title2`,
    defaultMessage: 'Seed:',
  },
  title3: {
    id: `${scope}.title3`,
    defaultMessage: 'Password for browser encryption (at least 8 characters long):',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: `WTF is wallet security? <br /> Do not save password in screenshot!`,
  },
  placeholderPassword: {
    id: `${scope}.placeholderPassword`,
    defaultMessage: 'Password for browser encryption (at least 8 characters long)',
  },
});
