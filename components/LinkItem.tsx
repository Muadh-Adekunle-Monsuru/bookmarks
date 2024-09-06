import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function LinkItem({
	name,
	href,
	addedDate,
	description,
}: {
	name: string;
	href: string;
	addedDate: string;
	description: string;
}) {
	return (
		<Link
			href={href}
			target='_blank'
			className='group shadow-lg rounded-lg border-2 border-black bg-gray-50/30  p-3 md:w-2/3 w-full mx-auto hover:border-dashed'
		>
			<div className='flex justify-between items-center'>
				<div className='flex gap-2 items-center w-2/3'>
					<LinkIcon className='size-4 opacity-0 group-hover:opacity-100' />
					<p className='font-medium text-xl truncate'>{name}</p>
				</div>
				<p className='text-sm text-muted-foreground font-medium'>
					{new Date(parseInt(addedDate) * 1000).toLocaleDateString()}
				</p>
			</div>
			<p className='pl-6 text-muted-foreground'>{description}</p>
		</Link>
	);
}
