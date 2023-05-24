import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import app from "../server.js";
import chaiHttp from "chai-http";
import chai from "chai";

const expect = chai.expect;
chai.use(chaiHttp);

describe("Test suite for scrapeTopArabicSongs function", function () {
  it("should scrape and return top Arabic songs as an object", async function () {
    const req = {};
    const res = {
      json: function (results) {
        expect(results).to.be.an("object");
      },
    };

    await scrapeTopArabicSongs(req, res);
  });
  it("should check Arabic top song endpoint and  ensures that the number of songs in the response object is exactly 10", function (done) {
    chai
      .request(app)
      .get("/api/v1/topArabicSongs")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(Object.keys(res.body)).to.have.lengthOf(10);
        done();
      });
  });
});
