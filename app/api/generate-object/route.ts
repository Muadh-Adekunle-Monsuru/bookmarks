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
				'Organize the following array of browser bookmark links into categorized folders. Combine loosely related links into the same folder to minimize single-entry folders. The link"s name names should be based on the websites name or domain, and each link should have a short description of the site. Ensure that no links are repeated. Folders must not have more than 20 links, do not create monolithic folders',
		});

		return result.toTextStreamResponse();
	} catch (e) {
		return NextResponse.json({ status: 500 });
	}
}
