import { string, z } from "zod";

export const LoginSchema = z.object({
	email: string()
		.email({ message: "Please input a valid email address" })
		.max(50, { message: "Must contain at most 50 characters" }),
	password: string()
		.min(4, { message: "Must contain at least 4 characters" })
		.max(20, { message: "Must contain at most 20 characters" })
});

export const UpdateBalSchema = z.object({
	account_no: z
		.number()
		.max(10, { message: "Must be 10 digits" })
		.min(10, { message: "Must be 10 digits" }),
	amount: z.number()
	// redirect: string().optional(),
});

export const RegisterSchema = z
	.object({
		fullName: z
			.string()
			.min(2, { message: "Must contain at least 2 characters" })
			.max(15, { message: "Must contain at most 15 characters" })
			.regex(/[a-zA-z]/, { message: "Must contain alphabets only" }),
		phoneNumber: z.string().optional(),
		agree: z.boolean(),
		email: z
			.string()
			.email({ message: "Please input a valid email address" })
			.max(50, { message: "Must contain at most 50 characters" }),
		password: z
			.string()
			.min(4, { message: "Must contain at least 4 characters" })
			.max(20, { message: "Must contain at most 20 characters" }),
		confirm_password: z
			.string()
			.min(4, { message: "Must contain at least 4 characters" })
			.max(20, { message: "Must contain at most 20 characters" })
	})
	.superRefine(({ confirm_password, password, agree }, ctx) => {
		if (confirm_password !== password) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords do not match",
				path: ["confirm_password"]
			});
		}
		if (agree !== true) {
			ctx.addIssue({
				code: "custom",
				message: "Agree to the Terms and condition",
				path: ["agree"]
			});
		}
	});
export const CreateUserSchema = z
	.object({
		fullName: z
			.string()
			.min(2, { message: "Must contain at least 2 characters" })
			.max(15, { message: "Must contain at most 15 characters" })
			.regex(/[a-zA-z]/, { message: "Must contain alphabets only" }),
		phoneNumber: z.string().optional(),
		email: z
			.string()
			.email({ message: "Please input a valid email address" })
			.max(50, { message: "Must contain at most 50 characters" })
			.optional(),
		password: z
			.string()
			.min(4, { message: "Must contain at least 4 characters" })
			.max(20, { message: "Must contain at most 20 characters" }),
		confirm_password: z
			.string()
			.min(4, { message: "Must contain at least 4 characters" })
			.max(20, { message: "Must contain at most 20 characters" })
	})
	.superRefine(({ confirm_password, password }, ctx) => {
		if (confirm_password !== password) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords do not match",
				path: ["confirm_password"]
			});
		}
	});

// export const requestOtpSchema = z.object({
//   email: z.string().email(),
//   redirect: z.string().default("/"),
// });

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

export type UpdateBalSchemaType = z.infer<typeof UpdateBalSchema>;

// export type requestOtpInput = z.TypeOf<typeof requestOtpSchema>;

// export interface CustomRequest
