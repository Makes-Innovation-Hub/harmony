import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";
import chai from "chai";

const expect = chai.expect;

describe("Test suite for scrapeTopHebrewSongs function", async function () {
  this.timeout(10000);

  it("should scrape and return top Hebrew songs", async function () {
    const req = {};
    const res = {
      json: function (formattedData) {
        expect(formattedData).to.be.an("array");
        expect(formattedData.length).to.be.greaterThan(0);
      },
    };

    await scrapeTopHebrewSongs(req, res);
  });
});
