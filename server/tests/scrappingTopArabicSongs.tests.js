import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import app from "../server.js";
import chaiHttp from "chai-http";
import chai from "chai";

const expect = chai.expect;
chai.use(chaiHttp);

describe("Test suite", function () {
  it("Test the scrapeTopArabicSongs function", async function () {
    const req = {};
    const res = {
      json: function (results) {
        expect(results).to.be.an("object");
      },
    };

    await scrapeTopArabicSongs(req, res);
  });
  it("GET /api/v1/top-arabic-songs should return the correct number of songs", function (done) {
    chai;
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
