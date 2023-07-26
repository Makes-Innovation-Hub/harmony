import chai from "chai";
import axios from "axios";

const expect = chai.expect;

describe("Test suite get full song data", function () {
  it("should check generate song data & endpoint", async function () {
    this.timeout(150000);

    const serverApiUrl = "http://localhost:5000/api/v1";

    const requestBody = {
      song: "Unicron",
      artist: "נועה קירל",
      coverArt:
        "https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2023/03/08/H1Gyg00Lk2/photo1678307200.jpeg",
    };

    const response = await axios.put(`${serverApiUrl}/songs`, requestBody);

    const data = response.data;
    expect(response.status).to.be.equal(200);
    expect(data).to.be.a("object");
    expect(data.name.hebrew).to.be.a("string").and.not.empty;
    expect(data.name.arabic).to.be.a("string").and.not.empty;
    expect(data.name.english).to.be.a("string").and.not.empty;
    expect(data.lyrics.hebrew).to.be.a("string").and.not.empty;
    expect(data.lyrics.arabic).to.be.a("string").and.not.empty;
    expect(data.lyrics.english).to.be.a("string").and.not.empty;
    expect(data.youtubeURL).to.be.a("string").and.not.empty;
  });
});
