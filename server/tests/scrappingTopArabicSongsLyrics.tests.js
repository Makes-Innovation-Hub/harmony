import chai from "chai";
import axios from "axios";

const expect = chai.expect;

describe("Test suite for scrapeTopArabicSongsLyrics function", function () {
  it("should check Arabic top song scrapping endpoint & data", async function () {
    this.timeout(10000);

    const requestBody = {
      artistName: "Saif Nabeel",
      songName: "Enta"
    };

    const response = await axios.post("http://localhost:5000/api/v1/topArabicSongsLyrics", requestBody);

    expect(response.status).to.be.equal(200);
    expect(typeof requestBody.artistName).to.be.equal("string");
    expect(typeof requestBody.songName).to.be.equal("string");  
  });
});
