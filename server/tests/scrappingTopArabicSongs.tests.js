import chai from "chai";
import { serverApiUrl } from "../constants/urls.js";

const expect = chai.expect;

describe("Test suite for scrapeTopArabicSongs function", function () {
  it("should check Arabic top song endpoint & data", async function () {
    this.timeout(10000);

    const response = await fetch(`${serverApiUrl}/topArabicSongs`);

    expect(response.status).to.be.equal(200);

    const data = await response.json();

    expect(data).to.be.an("object");
    expect(Object.keys(data)).to.have.lengthOf(10);
    expect(Object.values(data)).to.have.lengthOf(10);

    Object.keys(data).forEach((key) => {
      expect(key).to.be.a("string");
    });

    Object.values(data).forEach((value) => {
      expect(value).to.be.a("string");
    });
  });
});
