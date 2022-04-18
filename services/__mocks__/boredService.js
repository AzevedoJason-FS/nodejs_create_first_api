const boredServiceByType = (type) => {
    console.log("Mocked Bored By Type");

    return Promise.resolve({
        "activity": "Learn how to write in shorthand",
        "type": "social",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "6778219",
        "accessibility": 0.1
    });
}
    const boredService = () => {
        console.log("Mocked Bored");
        
        return Promise.resolve(
            {
                "activity": "Take a spontaneous road trip with some friends",
                "type": "diy",
                "participants": 4,
                "price": 0.2,
                "link": "",
                "key": "2085321",
                "accessibility": 0.3
            }
        )
    }

    module.exports = {
        boredServiceByType,
        boredService
    }