'use strict';

const expect = require('chai').expect;
const addWord = require("../lib/words").addWord;
const getWord = require("../lib/words").getWord;

const word = {
    id: 1,
    word: 'machen',
    translation: "to do",
    learned: 0,
}

describe ('addWord', () => {
    it ('addWord should be a function', () => {
        expect(addWord).to.be.a('function');
    })  

    it ('getWord should be a function', () => {
        expect(getWord).to.be.a('function');
    })  

    it ('should add a word into the storage', () => {
        const newWord = addWord(word);
        expect(newWord).to.be.an('string');
        expect(newWord).to.be
    })
});


describe ('getWord', () => {

    it ('getWord should be a function', () => {
        expect(getWord).to.be.a('function');
    })  

    it ('should read the a word from  the storage', () => {
        const newWord = getWord(word);
        expect(newWord).to.be.an('object');
        expect(newWord).to.have.a.property('word');
        expect(newWord).to.have.a.property('learned');
        
        expect(newWord).to.have.a.property('translations').
            that.is.an('array').with.lengthOf(2).
            and.contains('to do')

    })
});