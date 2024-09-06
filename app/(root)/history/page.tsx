'use client';
import { useDataStore } from '@/store/store';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { PlusSquare } from 'lucide-react';
import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/nextjs';
import BookmarkButton from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import ProfileMenu from '@/components/ProfileMenu';
import FolderIcon from '@/components/FolderIcon';
import { getHistory } from '@/lib/actions';

export default function Page() {
	const data = useDataStore((state) => state.data);
	const setData = useDataStore((state) => state.setData);
	const { userId, isLoaded } = useAuth();

	useEffect(() => {
		const fetch = async () => {
			if (!userId || !isLoaded) return;
			const data = await getHistory(userId);
			console.log(data);
			setData(JSON.parse(data?.bookmarks[0]!));
		};
		fetch();
	}, [userId, isLoaded]);
	return (
		<div className='lg:px-2 min-h-screen pb-20 h-full bg-gradient-to-bl from-pink-200 via-purple-200 to-blue-200'>
			<div className='w-full flex items-center justify-between lg:px-20 px-5'>
				<h1 className='text-3xl font-bold py-10'>History</h1>
				<div className='flex items-center gap-3'>
					<SignedIn>
						<Button variant={'ghost'} asChild>
							<Link href={'/dashboard'}>Dashboard</Link>
						</Button>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<ProfileMenu />
					</SignedOut>
				</div>
			</div>
			<div className=' flex flex-wrap gap-10 items-center justify-center'>
				{!data && <p>Empty...</p>}
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
