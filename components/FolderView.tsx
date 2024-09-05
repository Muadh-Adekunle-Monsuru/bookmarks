'use client';
import { useDataStore } from '@/store/store';
import React from 'react';
import FolderIcon from './FolderIcon';
import Link from 'next/link';

export default function FolderView() {
	const data = useDataStore((state) => state.data);
	// const url = Encode
	return (
		<div className='lg:px-20'>
			<h1 className='text-3xl font-bold py-10'>Bookmarks</h1>
			<div className=' flex flex-wrap gap-10 items-center justify-center'>
				{data &&
					data?.map((folder) => (
						<Link
							href={`/bookmarks/${encodeURI(folder?.groupName || '')}`}
							key={folder.groupName}
						>
							<FolderIcon
								groupName={folder.groupName || ''}
								linkCount={folder?.links?.length || 0}
							/>
						</Link>
					))}
			</div>
		</div>
	);
}
