'use client';
import LinkItem from '@/components/LinkItem';
import { Button } from '@/components/ui/button';
import { useDataStore } from '@/store/store';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';

interface IParams {
	bookmark?: string;
}
export default function BookmarkPage({ params }: { params: IParams }) {
	const data = useDataStore((state) => state.data);

	const folderData = data.find(
		(folder) => folder.groupName == decodeURIComponent(params.bookmark!)
	);
	return (
		<div className='md:p-10 p-4 min-h-screen bg-gradient-to-br from-red-50 via-purple-100 to-red-100 '>
			<div className='flex gap-2 items-center'>
				<Button variant={'ghost'} asChild>
					<Link href='/dashboard'>
						<ChevronLeft className='size-4 inline' /> Back
					</Link>
				</Button>
				<p className='font-bold text-3xl '>
					{decodeURIComponent(params.bookmark!)}
				</p>
			</div>
			<div className='flex flex-col gap-3 py-10'>
				{folderData?.links &&
					folderData?.links.map((link, index) => (
						<LinkItem
							addedDate={link.addedDate || ''}
							href={link.href || ''}
							name={link.name || ''}
							key={index}
							description={link.description || ''}
						/>
					))}
			</div>
		</div>
	);
}
