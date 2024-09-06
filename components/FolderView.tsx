'use client';
import { useDataStore } from '@/store/store';
import React from 'react';
import FolderIcon from './FolderIcon';
import Link from 'next/link';
import { LoaderPinwheel, PlusSquare } from 'lucide-react';
import BookmarkButton from './BookmarkButton';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import ProfileMenu from './ProfileMenu';
import Logo from './Logo';

export default function FolderView() {
	const data = useDataStore((state) => state.data);
	const isStreaming = useDataStore((state) => state.streaming);
	return (
		<div className='lg:px-20 px-5 pb-20 h-full'>
			<div className='w-full flex items-center justify-between '>
				<div className='flex gap-2 items-center'>
					<Logo />
					<h1 className='md:text-3xl text-lg font-bold py-10'>Bookmarks</h1>
				</div>
				{isStreaming && (
					<div className='flex items-center gap-1 md:gap-2'>
						<LoaderPinwheel className='size-4 animate-spin' />
						<p className='animate-pulse'>Sorting...</p>
					</div>
				)}
				<div className='flex items-center md:gap-3 gap-1'>
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
