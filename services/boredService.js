const axios = require('axios');

const boredService = () => {
    console.log("Real Bored");
    return axios.get(`${process.env.boredURL}`).then(result => {
        return result.data
    });
};

const boredServiceByType = (type) => {
    console.log("Real Bored By Type");
    return axios.get(`${process.env.boredURLtype}${type}`).then(result => {
        return result.data
    });  
};

module.exports = {
    boredService,
    boredServiceByType
}