import { nanoid } from '@reduxjs/toolkit';

export const createContactObject = data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
};
