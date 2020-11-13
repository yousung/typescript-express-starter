import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";

import Route from "./api/routes/index";
import { rateLimit } from "./helper";

class App {
  private app: Application;
  private port: number;
  private route: Route;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.route = new Route();

    this.initConfig();
    this.initSecret();
    this.initRoutes();
  }

  private initSecret(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });

    // 요청 제한
    this.app.use(rateLimit.limit());

    // 보안
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(hpp());
  }

  private initConfig(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
  }

  private initRoutes(): void {
    this.route.route(this.app);
  }

  public listen(): void {
    this.app.listen(this.port, () => console.log(`${this.port} app ready`));
  }
}

export default App;
