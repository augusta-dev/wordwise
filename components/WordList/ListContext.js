import React from 'react';
const ListContext = React.createContext({
    words: [],
    language: "",
    addWord: (word) => {

    },
    flipArrow: (id) => {},
});
export default ListContext;