import chai from "chai";
const expect = chai.expect;
import { fetchLyrics } from "../genuisLyrics.js";

describe("fetchLyrics", () => {
  it("should return an array of lines when lyrics are found", async () => {
    const searchTerm = "אהבה חולה פאר טסי";
    const lyrics = await fetchLyrics(searchTerm);
    expect(Array.isArray(lyrics)).to.be.true;
    expect(lyrics.length).to.be.greaterThan(0);
    expect(typeof lyrics[0]).to.be.equal("string");
  });
  ``;
  it("should return false when no lyrics are found", async () => {
    const searchTerm = "צעדים עקיבא ";
    const lyrics = await fetchLyrics(searchTerm);
    expect(lyrics).to.be.false;
  });
});
