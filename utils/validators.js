// ===================================================|
// Utils: VALIDATORS

import { escapeRegExp } from 'lodash';
import { PASSWORD_VALID_SPECIAL_CHARS } from '@/defs/constants/restrictions';

export const atLeastOneLetter = (value) => {
  return /[A-Za-z]/g.test(value);
};

export const atLeastOneNumber = (value) => {
  return /[0-9]/g.test(value);
};

export const atLeastOneSpecialChar = (value) => {
  const atLeastOneSpecialCharRegex = new RegExp(
    `[${escapeRegExp(PASSWORD_VALID_SPECIAL_CHARS)}]`,
    'g'
  );

  return atLeastOneSpecialCharRegex.test(value);
};
