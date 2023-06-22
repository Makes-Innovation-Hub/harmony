import { expect } from "chai";
import detectLanguage from "./detectLanguage";

describe("detectLanguage", () => {
  it("should detect English language when given an English text", () => {
    const text = "Hello, how are you?";
    const result = detectLanguage(text);
    expect(result).to.equal("english");
  });

  it("should detect Hebrew language when given a Hebrew text", () => {
    const text = "שלום, מה שלומך?";
    const result = detectLanguage(text);
    expect(result).to.equal("hebrew");
  });

  it("should detect Arabic language when given an Arabic text", () => {
    const text = "مرحبا، كيف حالك؟";
    const result = detectLanguage(text);
    expect(result).to.equal("arabic");
  });

  it("should default to English language when given a text with equal counts of languages", () => {
    const text = "Hello שלום مرحبا";
    const result = detectLanguage(text);
    expect(result).to.equal("english");
  });
});
