import chai from "chai";
import axios from "axios";

const expect = chai.expect;

describe("Test suite for Scrape Arabic Lyrics from: https://lyricstranslate.com/", function () {
  it("should check Arabic top song scrapping endpoint & data", async function () {
    this.timeout(10000);

    const requestBody = {
      artistName: "Saif Nabeel",
      songName: "Enta",
    };

    const response = await axios.post(
      "http://localhost:5000/api/v1/topArabicSongsLyrics",
      requestBody
    );

    const data = response.data;

    expect(Array.isArray(data)).to.be.true;
    expect(response.status).to.be.equal(200);

    const dataTypes = data.map((item) => typeof item);
    expect(dataTypes.every((type) => type === "string")).to.be.true;
  });
});
