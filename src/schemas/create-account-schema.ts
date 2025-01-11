import { z } from "zod";

const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const passValidationMsg =
  "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";

const schema = z.object({
  accountType: z.enum(["real", "demo"], {
    required_error: "Account type is required",
  }),
  leverage: z.string({
    required_error: "Please Select a minimum leverage",
  }),
  currency: z.string({
    required_error: "Please Select a currency",
  }),
  nickname: z.string().min(1, "Nickname is required"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(passRegex, { message: passValidationMsg }),
});

type CreateAccountSchema = z.infer<typeof schema>;

export { schema };
export type { CreateAccountSchema };
