export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleRejected = (state, { error }) => {
  state.contacts.isLoading = false;
  state.contacts.error = error.message;
};

export const handleFullfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};
