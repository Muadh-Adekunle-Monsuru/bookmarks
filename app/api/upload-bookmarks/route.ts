import { QuerySchema } from '@/lib/schema';
import { google } from '@ai-sdk/google';
import {
	generateObject,
	GenerateObjectResult,
	generateText,
	streamObject,
} from 'ai';
import * as cheerio from 'cheerio';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

async function parseAndFilterHTML(htmlContent: string) {
	// Load the HTML content using cheerio
	const $ = cheerio.load(htmlContent);

	// Example: Filter out specific attributes from <a> tags
	const links = $('A')
		.map((i, element) => {
			const href = $(element).attr('href'); // Get the href attribute
			const text = $(element).text(); // Get the text content
			const addedDate = $(element).attr('add_date');

			// Example: Only return link with specific conditions
			return {
				href,
				text,
				addedDate,
			};
		})
		.get(); // Get the resulting array

	return links;
}

export async function POST(request: NextRequest) {
	const data = await request.formData();
	const file = data.get('bookmarkFile');
	if (!file) {
		return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
	}

	//@ts-ignore
	const fileContent = await file.text();

	try {
		const filteredContent = await parseAndFilterHTML(fileContent);

		return NextResponse.json(filteredContent);
	} catch (e) {
		return NextResponse.json({ status: 500 });
	}
}
