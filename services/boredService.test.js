const { boredService, boredServiceByType } = require("./boredService");

jest.mock("./boredService.js")

describe("Bored Service Tests", () => {

    test("Should return normal Bored Task", async() => {
        const result = await boredService();

        expect(result).toEqual(expect.objectContaining({
            activity: expect.any(String),
            type: expect.any(String),
            participants: expect.any(Number),
            price: expect.any(Number),
            link: expect.any(String),
            key: expect.any(String),
            accessibility: expect.any(Number),
          }));
    });

    test("Should return Bored Task by Type", async() => {
        const result = await boredServiceByType('social');

        expect(result.type).toEqual('social')
    })
});