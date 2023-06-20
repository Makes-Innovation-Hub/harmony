import dotenv from "dotenv";
import chai from "chai";
import axios from "axios";
import { translateLyricsByOpenAi } from "../utils/openAiTranslation.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "../config/config.env") });
const assert = chai.assert;

describe("test lyrics translate function", function () {
  this.timeout(30000);
  it("run function - should return translated text", async () => {
    const res = await translateLyricsByOpenAi(
      "hello world",
      "english",
      "hebrew"
    );
    assert.isString(res);
    assert.deepEqual(res, "שלום עולם");
  });
});
