import { Request, Response, Application } from "express";
import { rateLimit } from "../../helper";
import v1 from "./v1";

class Routes {
  public route(app: Application): void {
    app.get("/ping", (req: Request, res: Response) => {
      res.status(200).json({
        status: "ok",
      });
    });

    app.use("/v1", v1);
  }
}

export default Routes;
