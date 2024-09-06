'use client';
import FolderView from '@/components/FolderView';
import Upload from '@/components/ui/Upload';
import { useDataStore } from '@/store/store';
import React from 'react';

export default function Dashboard() {
	const data = useDataStore((state) => state.data);
	return (
		<div className='min-h-screen h-full w-full  bg-gradient-to-br from-red-50 via-purple-100 to-red-100 '>
			<Upload />
			{data?.length > 0 && <FolderView />}
		</div>
	);
}
