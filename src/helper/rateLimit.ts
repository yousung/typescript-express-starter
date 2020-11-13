import rateLimit from "express-rate-limit";

class RateLimit {
  public limit(
    ms: number = 1000 * 60,
    max: number = 60,
    message: string = "잠시 후에 다시 시도해주세요"
  ): rateLimit.RateLimit {
    return rateLimit({
      windowMs: ms,
      max,
      message,
    });
  }
}

export default new RateLimit();
