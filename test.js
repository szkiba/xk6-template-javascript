import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.3/index.js";
import globalˮPrimaryClassˮ, { ˮPrimaryClassˮ } from "k6/x/ˮnameˮ";

export default function () {
  describe("default export", () => {
    expect(globalˮPrimaryClassˮ).to.not.null;
    expect(globalˮPrimaryClassˮ).to.have.property("greeting", "Hello, World!");
  });

  describe("ˮPrimaryClassˮ instance", () => {
    const instance = new ˮPrimaryClassˮ("Wonderful World");
    expect(instance).to.not.null;
    expect(instance).to.have.property("greeting", "Hello, Wonderful World!");
  });
}

export const options = { thresholds: { checks: ["rate==1"] } };
