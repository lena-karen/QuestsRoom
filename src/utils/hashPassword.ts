import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const compareHashedPassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword)
}