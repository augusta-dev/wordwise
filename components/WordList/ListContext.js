import React from 'react';
const ListContext = React.createContext({
    words: [],
    addWord: (word) => {

    },
    flipArrow: (id) => {},
});
export default ListContext;