import { Folder } from 'lucide-react';
import React from 'react';

import randomcolor from 'randomcolor';

export default function FolderIcon({
	groupName,
	linkCount,
}: {
	groupName: string;
	linkCount: number;
}) {
	return (
		<div
			className='md:h-40 md:w-48 w-32 h-32 relative cursor-pointer rounded-3xl'
			style={{
				backgroundColor: randomcolor({
					luminosity: 'light',
				}),
			}}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 512 512'
				fill='#f9fafb'
			>
				<path
					className='shadow-lg'
					d='M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z'
				/>
			</svg>
			<div className='absolute md:bottom-0 bottom-3 left-2 md:left-3 '>
				<p className='font-semibold md:text-lg text-sm'>{groupName}</p>
				<p className='md:text-sm text-xs font-medium text-muted-foreground'>
					{linkCount}
				</p>
			</div>
		</div>
	);
}
