const ADD_NEWS = 'ADD_NEWS'

let initialState = {
  newsData: [
    { id: 1, title: 'react', content: 'errytruyiuoiip' },
    { id: 2, title: 'react', content: 'errytruyiuoiip' },
    { id: 3, title: 'react', content: 'errytruyiuoiip' },
  ],

  newNewsText: ''
};

const newsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEWS:
      let newNews = {
        id: 4,
        title: 'Cool',
        content: 'data'
      };

      return {
        ...state,
        newsData: [...state.newsData, newNews],
        newNewsText: ''
      };

    default:
      return state;
  }
}

export const addNewsAC = () => ({ type: ADD_NEWS })

export default newsReducer;