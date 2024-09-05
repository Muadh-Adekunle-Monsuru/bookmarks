import { QuerySchema } from '@/lib/schema';
import { google } from '@ai-sdk/google';
import { streamObject } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	const data = await request.json();

	try {
		const result = await streamObject({
			model: google('models/gemini-1.5-flash-latest'),
			schema: QuerySchema,
			prompt: 'Here is the data to be sorted through:' + JSON.stringify(data),
			system:
				'Here is array of a browser bookmark links, group these links into folders, folders can have other named subfolders. No need to repeat entries. only group links that has been provided. The name should be the name  or domain of the link, give a short description of the site too. Group any relatated links into a single folder to prevent having multiple folders with single entries',
		});

		return result.toTextStreamResponse();
	} catch (e) {
		return NextResponse.json({ status: 500 });
	}
}
