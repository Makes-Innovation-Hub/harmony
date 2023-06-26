import { expect } from "chai";
import sinon from "sinon";

describe("translateText3Lang", () => {
  it("should translate the text to two other languages", async () => {
    const loggerStub = {
      info: sinon.stub(),
      error: sinon.stub(),
    };

    const txt = "Some text";
    const txtLang = "english";

    const generalTranslationStub = sinon.stub();
    generalTranslationStub
      .withArgs(txt, txtLang, "hebrew")
      .resolves("Hebrew translation");
    generalTranslationStub
      .withArgs(txt, txtLang, "arabic")
      .resolves("Arabic translation");

    const result = await translateText3Lang(txt);

    expect(result).to.deep.equal({
      hebrew: "Hebrew translation",
      arabic: "Arabic translation",
      english: "Some text",
    });
    expect(loggerStub.info.calledTwice).to.be.true;
    expect(loggerStub.info.firstCall.args[0]).to.equal(
      `detected that language for the text: ${txt} is: ${txtLang}`
    );
    expect(loggerStub.info.secondCall.args[0]).to.equal(
      `langs to translate the text: ["hebrew","arabic"]`
    );
    expect(generalTranslationStub.calledTwice).to.be.true;
    expect(generalTranslationStub.firstCall.args).to.deep.equal([
      txt,
      txtLang,
      "hebrew",
    ]);
    expect(generalTranslationStub.secondCall.args).to.deep.equal([
      txt,
      txtLang,
      "arabic",
    ]);

    sinon.restore();
  });

  it("should handle translation error and return null", async () => {
    const loggerStub = {
      info: sinon.stub(),
      error: sinon.stub(),
    };

    const txt = "Some text";
    const txtLang = "english";
    const translationError = new Error("Translation error");

    const generalTranslationStub = sinon.stub();
    generalTranslationStub
      .withArgs(txt, txtLang, "hebrew")
      .rejects(translationError);
    generalTranslationStub
      .withArgs(txt, txtLang, "arabic")
      .resolves("Arabic translation");

    const result = await translateText3Lang(txt);

    expect(result).to.be.null;
    expect(loggerStub.info.calledTwice).to.be.true;
    expect(loggerStub.info.firstCall.args[0]).to.equal(
      `detected that language for the text: ${txt} is: ${txtLang}`
    );
    expect(loggerStub.info.secondCall.args[0]).to.equal(
      `langs to translate the text: ["hebrew","arabic"]`
    );
    expect(generalTranslationStub.calledTwice).to.be.true;
    expect(generalTranslationStub.firstCall.args).to.deep.equal([
      txt,
      txtLang,
      "hebrew",
    ]);
    expect(generalTranslationStub.secondCall.args).to.deep.equal([
      txt,
      txtLang,
      "arabic",
    ]);
    expect(loggerStub.error.calledOnce).to.be.true;
    expect(loggerStub.error.firstCall.args[0]).to.equal(
      `error in generating translations for ${
        txt.length < 15 ? txt : txt.slice(15) + "..."
      }`
    );
    expect(loggerStub.error.firstCall.args[1]).to.equal(translationError);

    sinon.restore();
  });

  it("should handle empty text and return translated object with empty strings", async () => {
    const loggerStub = {
      info: sinon.stub(),
      error: sinon.stub(),
    };

    const txt = "";
    const txtLang = "english";

    const generalTranslationStub = sinon.stub();

    const result = await translateText3Lang(txt);

    expect(result).to.deep.equal({
      hebrew: "",
      arabic: "",
      english: "",
    });
    expect(loggerStub.info.calledOnce).to.be.true;
    expect(loggerStub.info.firstCall.args[0]).to.equal(
      `detected that language for the text:  is: ${txtLang}`
    );
    expect(loggerStub.info.secondCall).to.be.undefined;
    expect(generalTranslationStub.called).to.be.false;
    expect(loggerStub.error.called).to.be.false;

    sinon.restore();
  });

  it("should handle unsupported language and return translated object with empty strings", async () => {
    const loggerStub = {
      info: sinon.stub(),
      error: sinon.stub(),
    };

    const txt = "Some text";
    const txtLang = "unsupported";

    const generalTranslationStub = sinon.stub();

    const result = await translateText3Lang(txt);

    expect(result).to.deep.equal({
      hebrew: "",
      arabic: "",
      english: "Some text",
    });
    expect(loggerStub.info.calledOnce).to.be.true;
    expect(loggerStub.info.firstCall.args[0]).to.equal(
      `detected that language for the text: ${txt} is: ${txtLang}`
    );
    expect(loggerStub.info.secondCall).to.be.undefined;
    expect(generalTranslationStub.called).to.be.false;
    expect(loggerStub.error.called).to.be.false;

    sinon.restore();
  });
});
