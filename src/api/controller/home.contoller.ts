import { Request, Response } from "express";

class HomeController {
  public index(req: Request, res: Response): void {
    res.json({
      type: "index page",
    });
  }

  public show(req: Request, res: Response): void {
    res.json({
      type: "show page",
    });
  }

  public edit(req: Request, res: Response): void {
    res.json({
      type: "edit page",
    });
  }
}

export default new HomeController();
