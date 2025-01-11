import { z } from "zod";



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
  .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number"),

    
});

type CreateAccountSchema = z.infer<typeof schema>;

export { schema };
export type { CreateAccountSchema };
