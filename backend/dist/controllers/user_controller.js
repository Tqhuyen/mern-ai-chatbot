import User from "../models/User.js";
import { hash } from "bcrypt";
export const getAllUser = async (req, res, next) => {
    // get all user
    try {
        const users = await User.find();
        return res.status(200).json({ message: "oke", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "not oke" });
    }
};
export const userSingUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "not oke" });
    }
};
//# sourceMappingURL=user_controller.js.map