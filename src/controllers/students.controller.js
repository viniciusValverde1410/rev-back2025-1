import { hash } from "bcryptj";

import User from "../models/user/User.js";
import UsersRepository from "../models/users/UsersRepository.js";

const usersRepository = new UsersRepository();

export const getUsers = (req, res) => {
    const users = usersRepository.getUsers();

    if (!users) {
        return res.status(404).send({ message: "Usuário não encontrado" });
    }

    return res.status(200).send(users);
};