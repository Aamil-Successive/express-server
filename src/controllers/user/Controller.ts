import { Request, Response, NextFunction } from "express";

const users = [
  { userName: "Gaurav", id: 1 },
  { userName: "Adil", id: 2 },
  { userName: "Rahul", id: 3 },
  { userName: "Vinay", id: 4 },
  { userName: "Prabal", id: 5 },
];

class User {
  get = (req: Request, res: Response, next: NextFunction) => {
    console.log("Get request..!");
    res.status(200).send(users);
  };

  post = (req: Request, res: Response, next: NextFunction) => {
    console.log("Post request..!");
    console.log(req.body);
    const { userName } = req.body;
    if (!userName) {
      return res
        .status(400)
        .send({ message: "User name is required", error: "Bad Request" });
    }
    return res.status(200).send({ message: "User added successfully" });
  };

  put = (req: Request, res: Response, next: NextFunction) => {
    console.log("Put request..!");
    console.log(req.body);
    const { id } = req.body;
    const { userName } = req.body;
    if (!userName) {
      res.status(404).send({ userName: "required", error: "Not Found" });
    } else if (!id) {
      res.status(404).send({ id: "required", error: "Not Found" });
    }
    res.status(200).send({ message: "Updated Succesfully" });
  };

  delete = (req: Request, res: Response, next: NextFunction) => {
    console.log("Delete request..!");
    console.log(req.body);
    const { userName } = req.body;
    const { id } = req.body;
    if (!userName) {
      res.status(404).send("Not Found! Can not make changes requested!");
    } else if (!id) {
      res.status(400).send({ message: "id not given", error: "Bad Request" });
    }
    res.status(200).send({ userName: "Deleted Succcessfully" });
  };
}

export default new User();
