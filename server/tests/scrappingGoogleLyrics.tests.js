import chai from "chai";
import axios from "axios";
import { serverApiUrl } from "../constants/urls.js";

const expect = chai.expect;

describe("Test suite for Scrape Google Lyrics", function () {
  it("should check scrap lyrics from diff links in Google & endpoint", async function () {
    this.timeout(15000);

    const requestBody = {
      singerName: "פאר טסי",
      songName: "אהבה חולה",
    };

    const response = await axios.post(
      `${serverApiUrl}/googleLyrics`,
      requestBody
    );

    const data = response.data;

    expect(Array.isArray(data)).to.be.true;
    expect(response.status).to.be.equal(200);
    expect(data.length).to.be.greaterThan(0);

    const dataTypes = data.map((item) => typeof item);
    expect(dataTypes.every((type) => type === "string")).to.be.true;
    expect(response.headers["content-type"]).to.include("application/json");
  });
});
