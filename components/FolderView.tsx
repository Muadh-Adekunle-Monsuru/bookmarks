'use client';
import { useDataStore } from '@/store/store';
import React from 'react';
import FolderIcon from './FolderIcon';
import Link from 'next/link';
import { PlusSquare } from 'lucide-react';
import BookmarkButton from './BookmarkButton';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import ProfileMenu from './ProfileMenu';

export default function FolderView() {
	const data = useDataStore((state) => state.data);
	return (
		<div className='lg:px-20 pb-20 h-full'>
			<div className='w-full flex items-center justify-between'>
				<h1 className='text-3xl font-bold py-10'>Bookmarks</h1>
				<div className='flex items-center gap-3'>
					<BookmarkButton />
					<SignedIn>
						<Button variant={'ghost'} asChild>
							<Link href={'/history'}>History</Link>
						</Button>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<ProfileMenu />
					</SignedOut>
				</div>
			</div>
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
