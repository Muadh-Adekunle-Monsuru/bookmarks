'use client';
import { Group, useDataStore } from '@/store/store';
import { FolderCheck, FolderUp, Loader } from 'lucide-react';
import Image from 'next/image';
import React, {
	ChangeEvent,
	ChangeEventHandler,
	useEffect,
	useState,
} from 'react';
import { experimental_useObject as useObject } from 'ai/react';
import { QuerySchema } from '@/lib/schema';
import Link from 'next/link';
import ProfileMenu from '../ProfileMenu';
import { UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut, useAuth } from '@clerk/nextjs';
import { Button } from './button';
import { createRecord } from '@/lib/actions';
import Logo from '../Logo';
export default function Upload() {
	const [file, setFile] = useState<FileList | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const setData = useDataStore((state) => state.setData);
	const data = useDataStore((state) => state.data);
	const setStreaming = useDataStore((state) => state.setStreaming);
	const { userId } = useAuth();

	const { object, submit, isLoading } = useObject({
		api: '/api/generate-object',
		schema: QuerySchema,
		onFinish: ({ object, error }) => {
			//@ts-ignore
			// setData(object || error?.value);
			// console.log(error.value);
			setStreaming();
			if (userId) {
				//@ts-ignore
				const recordId = createRecord(userId, [JSON.stringify(error?.value)]);
			}
		},
	});

	useEffect(() => {
		if (object && object !== undefined) {
			//@ts-ignore
			setData(object);
		}
	}, [object]);
	const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		setFile(event.target?.files);
		setError(false);
		const formdata = new FormData();
		formdata.append('bookmarkFile', event.target.files[0]);
		setLoading(true);
		const response = await fetch('/api/upload-bookmarks', {
			method: 'POST',
			body: formdata,
		});

		if (response.ok) {
			setFile(undefined);
			setLoading(false);
			const result = await response.json();
			console.log('total bookmarks:', result.length);
			setStreaming();
			submit(result);
		} else {
			setLoading(false);
			setError(true);
			setFile(undefined);
		}
	};

	return (
		<div
			className={`h-screen mx-auto my-auto flex flex-col items-center justify-center ${
				data.length > 0 && 'hidden'
			}`}
		>
			<div className='absolute top-3 left-1 px-3 lg:px-20 w-full flex items-center justify-between'>
				<Logo />
				<div className=' flex items-center gap-2'>
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
			{!loading && !file && !isLoading && (
				<>
					<h1 className='text-3xl font-bold text-center'>
						Upload Your Bookmark File
					</h1>
					<p className='py-2 text-muted-foreground text-base'>
						Check how to
						<span className='ml-1 hover:underline underline-offset-4 decoration-dashed font-medium cursor-pointer'>
							<Link href={'/howto'}>upload bookmarks</Link>
						</span>
					</p>
					<div
						className={`w-3/4 md:w-1/2 h-1/3 border-2 border-dashed cursor-pointer flex flex-col items-center justify-center border-muted-foreground rounded-3xl py-5 my-5 group ${
							file ? 'scale-0 opacity-0 hidden' : ''
						} transition-all duration-300 `}
						onClick={() => {
							document.getElementById('fileInput')?.click();
						}}
					>
						{file ? (
							<FolderCheck className='size-14 text-green-700' />
						) : (
							<FolderUp className='size-14 text-muted-foreground group-hover:text-black transition-colors duration-200' />
						)}

						{file ? (
							<p className='py-2 text-green-700 font-medium'>
								Upload Successful
							</p>
						) : (
							<p className='text-muted-foreground'>
								Click to upload .html file
							</p>
						)}
					</div>
				</>
			)}

			{error && (
				<p className='text-xl font-medium text-red-600'>
					Error processing document. Please try again
				</p>
			)}

			{(loading || isLoading) && (
				<div className='flex flex-col items-center justify-center'>
					<Loader className='animate-spin w-9 ' />
					<p className='text-center animate-pulse font-medium text-xl'>
						Processing ...
					</p>
					<p className=' text-muted-foreground text-sm'>
						This might take a few moments.
					</p>
				</div>
			)}
			<input
				type='file'
				className='hidden'
				id='fileInput'
				accept='.html'
				onChange={handleFileChange}
			/>
		</div>
	);
}
