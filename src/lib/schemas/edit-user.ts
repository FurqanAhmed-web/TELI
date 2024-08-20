import { z } from 'zod';

export const editUserFormSchema = z.object({
	full_name: z.string(),
	company_email: z.string(),
	phone: z.string(),
	cell: z.string(),
	email2: z.string(),
	status: z.object({
		label: z.string(),
		value: z.string()
	}),
	rights: z.object({
		label: z.string(),
		value: z.string()
	}),
	client: z.object({
		label: z.string(),
		value: z.string()
	})
});

export type EditUserFormType = typeof editUserFormSchema;
