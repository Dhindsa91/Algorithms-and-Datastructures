const { expect } = require('@jest/globals');
const jobber = require('./index');

describe('Jobber assignment functions', () => {
    describe('nextVersion function', () => {
        it('should increment the version number', ()=> {

            const result1 = jobber.nextVersion("0.0.9");
            const result2 = jobber.nextVersion("1.2.3");
            const result3 = jobber.nextVersion("0.9.9");
            const result4 = jobber.nextVersion("1");
            const result5 = jobber.nextVersion("1.2.3.4.5.6.7.8");
            const result6 = jobber.nextVersion("9.9");
            const result7 = jobber.nextVersion();
            
            expect(result1).toEqual("0.1.0");
            expect(result2).toEqual("1.2.4");
            expect(result3).toEqual("1.0.0");
            expect(result4).toEqual("2");
            expect(result5).toEqual("1.2.3.4.5.6.7.9");
            expect(result6).toEqual("10.0");
            expect(result7).toEqual("0.0.0");
        })
    })

    describe('createSpiral function', () => {
        it('should return a spiral array', ()=> {

            const result1 = jobber.createSpiral(0);
            const result2 = jobber.createSpiral(0);
            const result3 = jobber.createSpiral(2);
            const result4 = jobber.createSpiral(3);
            const result5 = jobber.createSpiral(5);

            expect(result1).toEqual([]);
            expect(result2).toEqual([]);
            expect(result3).toEqual([ 
                [1, 2], 
                [4, 3]]);
            expect(result4).toEqual([ 
                [1, 2, 3 ], 
                [ 8, 9, 4 ], 
                [ 7, 6, 5 ] ]);
            expect(result5).toEqual(    [
                [ 1, 2, 3, 4, 5 ],
                [ 16, 17, 18, 19, 6 ],
                [ 15, 24, 25, 20, 7 ],
                [ 14, 23, 22, 21, 8 ],
                [ 13, 12, 11, 10, 9 ]
              ])
        })
    })

})