import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import chai from 'chai'

const expect = chai.expect;

describe("Test suite", function () {
  it("Test the scrapeTopArabicSongs function", async function () {
    const req = {}; 
    const res = {
      json: function (results) {
        expect(results).to.be.an('object');
      }
    };

    await scrapeTopArabicSongs(req, res);
  });
});
