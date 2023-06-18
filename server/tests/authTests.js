import { describe, it } from "mocha";
import chai from "chai";

describe.only("Authentication Endpoints", () => {
  it.only("should generate a JWT token", async () => {
    const res = await request(app)
      .post("/api/v1/auth/token")
      .send({ userId: 123 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.token).toBeDefined();
  });

  it("should verify a JWT token", async () => {
    const res = await request(app)
      .get("/api/v1/auth/verify")
      .set("Authorization", "Bearer your-jwt-token");

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Token verified");
  });
});
