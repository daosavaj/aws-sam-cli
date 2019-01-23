const axios = require('axios');
const url = 'http://checkip.amazonaws.com/';


const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
const lambda = async (event, context) => {

    let response = {
        statusCode: 200,
        body: JSON.stringify(`This is the default response`)
    };
    try {
        response = await get(event,context);
        console.log("after response" + this.yesvar + "\r");
        console.log(response);
    } catch (err) {
        console.log(err);
        return err;
    }
    return response
};

const get = async (event,content) => {

    let ret = null;

    console.log("In Async Get");
    ret = await axios(url);

    this.yesvar = "yes";

    return ret.data.trim();


};

// lambda().then((res) => console.log(res));
let test = lambda();
console.log(test.then(res => console.log(res)));