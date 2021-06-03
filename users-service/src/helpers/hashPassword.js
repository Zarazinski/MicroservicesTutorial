import bcrypt from "bcryptjs";

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(7));

export default hashPassword;