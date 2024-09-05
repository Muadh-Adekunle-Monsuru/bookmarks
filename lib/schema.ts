import { z } from 'zod';

export const QuerySchema = z.array(
	z.object({
		groupName: z.string(),
		links: z.array(
			z.object({
				name: z.string(),
				href: z.string(),
				addedDate: z.string(),
				description: z.string(),
			})
		),
	})
);
