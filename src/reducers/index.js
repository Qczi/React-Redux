import { ADD_TOKEN, ADD_ITEM, REMOVE_ITEM } from 'actions';

const initialState = {
  notes: [
    {
      id: 1,
      title: 'React on my mind 1',
      content: 'Lorem ipsum hasuidhaisudhaisudhasiu',
    },
    {
      id: 2,
      title: 'React on my mind 2',
      content: 'Lorem ipsum hasuidhaisudhaisudhasiu',
    },
    {
      id: 3,
      title: 'React on my mind 3',
      content: 'Lorem ipsum hasuidhaisudhaisudhasiu',
    },
    {
      id: 4,
      title: 'React on my mind 4',
      content: 'Lorem ipsum hasuidhaisudhaisudhasiu',
    },
    {
      id: 5,
      title: 'React on my mind 5',
      content: 'Lorem ipsum hasuidhaisudhaisudhasiu',
    },
    {
      id: 6,
      title: 'React on my mind 6',
      content: 'Lorem ipsum hasuidhaisudhaisudhasiu',
    },
  ],
  tokens: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        tokens: [...state.tokens, action.payload.token],
      };
    case ADD_ITEM:
      return {
        ...state,
        notes: [...state.notes, action.payload.item],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
