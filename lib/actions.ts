'use server';

import prisma from '@/prisma/db';

export async function createRecord(userId: string, list: string[]) {
	const response = await prisma.pastBookmarks.create({
		data: {
			userId,
			bookmarks: list,
		},
	});
	return response;
}

export async function getHistory(userId: string) {
	const data = await prisma.pastBookmarks.findFirst({
		where: { userId },
	});

	return data;
}
