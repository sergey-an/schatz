'use strict';

module.exports = {
    addWord : addWord,
    getWord : getWord
}

function addWord(word) {
    return word.word;
}

function getWord(word) {
    const word_ = {
        id: 1,
        word: 'machen',
        translations: ["to do", "делать"],
        learned: 0,
    }
    return word_;
}