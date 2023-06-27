import { describe, it } from "mocha";
import chai from "chai";
import axios from "axios";
import { serverApiUrl } from "../constants/urls.js";

const expect = chai.expect;

describe("getArtists", function () {
  it("Should check getArtists endpoint and fetched data", async function () {
    this.timeout(10000);

    const requestBodies = [
      { name: { hebrew: "אמן" } },
      { name: { english: "Eyal" } },
      { name: { english: "moshE" } },
      { name: { arabic: "فنان" } },
    ];

    for (const requestBody of requestBodies) {
      const response = await axios.get(`${serverApiUrl}/artists`, {
        data: requestBody,
      });

      expect(response.status).to.be.equal(200);

      const artistsArray = await response.data.data;
      expect(artistsArray).to.be.an("array");
      expect(artistsArray.length).to.be.greaterThan(0);

      artistsArray.forEach((artist) => {
        expect(artist).to.be.an("object");

        const checkNameByLanguage = (language, requestBody, artist) => {
          if (requestBody.name[language] !== undefined) {
            expect(artist.name[language].toLowerCase()).to.be.equal(
              requestBody.name[language].toLowerCase()
            );
          }
        };
        checkNameByLanguage("english", requestBody, artist);
        checkNameByLanguage("hebrew", requestBody, artist);
        checkNameByLanguage("arabic", requestBody, artist);
      });
    }
  });
});
