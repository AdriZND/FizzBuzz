const fizzbuzz = require('./fizzbuzz');
const { expect, should, assert } = require("chai")

describe('fizzbuzz', ()=>{
    it('testing if the test runs ok', ()=>{
        expect(true).to.equal(true);
        
    })

    it('should return fizz when num % 3 === 0', ()=>{
        const result = fizzbuzz(6);
        const expected ='fizz';

        expect(expected).to.equal(result);
    })
    it('should return buzz when num % 5 === 0', ()=>{
        const result = fizzbuzz(10);
        const expected ='buzz';

        expect(expected).to.equal(result);
    })
    it('should return fizzbuzz when num % 5 === 0 && num % 5 === 0', ()=>{
        const result = fizzbuzz(15);
        const expected ='fizzbuzz';

        expect(expected).to.equal(result);
    })
})