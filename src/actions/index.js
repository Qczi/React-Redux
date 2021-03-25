export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_TOKEN = 'ADD_TOKEN';

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: {
    id,
  },
});

export const addItem = (itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: ADD_ITEM,
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const addToken = (token) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: ADD_TOKEN,
    payload: {
      item: {
        id: getId(),
        ...token,
      },
    },
  };
};
