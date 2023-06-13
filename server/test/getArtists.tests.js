
import { describe, it, before, after } from 'mocha';
import chai from 'chai';
import axios from 'axios';

const expect = chai.expect;
let requestBodies;

describe('getArtists', function () {
  before(function () {
    requestBodies = [
      { "name": { "hebrew": "אמן" } },
      { "name": { "english": "Eyal" } },
      { "name": { "english": "moshE" } },
      { "name": { "arabic": "فنان" } }
    ];
  });

  after(function () {
    requestBodies = undefined;
  });

  it('Should check getArtists endpoint and fetched data', async function () {
    this.timeout(10000);

    for (const requestBody of requestBodies) {
      const response = await axios.get('http://localhost:5000/api/v1/harmony/artists', {
        data: requestBody
      });

      expect(response.status).to.be.equal(200);

      const artistsArray = await response.data.data;

      expect(artistsArray).to.be.an('array');
      expect(artistsArray.length).to.be.greaterThan(0);

      artistsArray.forEach(artist => {
        expect(artist).to.be.an('object');

        const checkNameByLanguage = (language, requestBody, artist) => {
          if (requestBody.name[language] !== undefined) {
            expect(artist.name[language].toLowerCase()).to.be.equal(requestBody.name[language].toLowerCase());
          }
        };

        checkNameByLanguage('english', requestBody, artist);
        checkNameByLanguage('hebrew', requestBody, artist);
        checkNameByLanguage('arabic', requestBody, artist);
      });
    }
  });
});

