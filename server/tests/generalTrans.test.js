import { expect } from "chai";
import sinon from "sinon";
import { generalTranslation } from "../utils/openAiTranslation";
import { OpenAIApi } from "openai";

describe("generalTranslation", () => {
  let openAIStub;

  beforeEach(() => {
    openAIStub = sinon.stub(OpenAIApi, "createChatCompletion");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should translate the text from original language to target language", async () => {
    const response = {
      data: {
        choices: [{ message: { content: "Translated text" } }],
      },
    };
    openAIStub.resolves(response);

    const result = await generalTranslation("Hello", "en", "fr");

    expect(result).to.equal("Translated text");
    expect(openAIStub.calledOnce).to.be.true;
    expect(openAIStub.firstCall.args[0].model).to.equal("gpt-3.5-turbo");
    expect(openAIStub.firstCall.args[0].messages).to.deep.equal([
      {
        role: "user",
        content:
          "translate this text: Hello from original language: en to fr language",
      },
    ]);
  });

  it("should log the translation request", async () => {
    const response = {
      data: {
        choices: [{ message: { content: "Translated text" } }],
      },
    };
    openAIStub.resolves(response);

    const logger = {
      info: sinon.stub(),
    };

    // Replace the logger in your module with this stubbed logger
    const { generalTranslation } = proxyquire("./your-module", {
      logger: logger,
    });

    await generalTranslation("Hello", "en", "fr");

    expect(logger.info.calledOnce).to.be.true;
    expect(logger.info.firstCall.args[0]).to.equal(
      "translating Hello... from en to fr"
    );
  });

  it("should return null if there is an error", async () => {
    openAIStub.rejects(new Error("Translation error"));

    const result = await generalTranslation("Hello", "en", "fr");

    expect(result).to.be.null;
  });
});
