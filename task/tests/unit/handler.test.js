'use strict';

const app = require('../../app.js');
let event, context;


describe('Tests index', function () {
    it('verifies successful response', async () => {

        try {

            const result = await app.handler(event, context);

            console.log(result);

        }catch (e) {
            console.log(e)
        }

    });
});

