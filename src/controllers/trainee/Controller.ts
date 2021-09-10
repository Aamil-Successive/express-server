import { Request, Response, NextFunction } from "express";

const trainees = [
  { traineeName: "Aamil", id: 1 },
  { traineeName: "Aman", id: 2 },
  { traineeName: "Anurag", id: 3 },
  { traineeName: "Animesh", id: 4 },
  { traineeName: "Ashar", id: 5 },
];

class Trainee {
  get = (req: Request, res: Response, next: NextFunction) => {
    console.log("Get request..!");
    res.status(200).send(trainees);
  };

  post = (req: Request, res: Response, next: NextFunction) => {
    console.log("Post request..!");
    console.log(req.body);
    const { traineeName } = req.body;
    if (!traineeName) {
      return res
        .status(400)
        .send({ message: "Trainee name is required", error: "Bad Request" });
    }
    return res.status(200).send({ message: "Trainee added successfully" });
  };

  put = (req: Request, res: Response, next: NextFunction) => {
    console.log("Put request..!");
    console.log(req.body);
    const { id } = req.body.id;
    const { traineeName } = req.body;
    if (!traineeName) {
      res.status(404).send({ traineeName: "required", error: "Not Found" });
    } else if (!id) {
      res.status(404).send({ id: "required", error: "Not Found" });
    }
    res.status(200).send({ message: "Updated Succesfully" });
  };

  delete = (req: Request, res: Response, next: NextFunction) => {
    console.log("Delete request..!");
    console.log(req.body);
    const { traineeName } = req.body;
    const { id } = req.body;
    if (!traineeName) {
      res.status(404).send("Not Found! Can not make changes requested!");
    } else if (!id) {
      res.status(400).send({ message: "id not given", error: "Bad Request" });
    }
    res.status(200).send({ traineeName: "Deleted Succcessfully" });
  };
}

export default new Trainee();
