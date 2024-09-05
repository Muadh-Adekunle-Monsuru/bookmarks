'use client';
import FolderView from '@/components/FolderView';
import Upload from '@/components/ui/Upload';
import { useDataStore } from '@/store/store';
import React from 'react';

export default function Dashboard() {
	const data = useDataStore((state) => state.data);
	return (
		<div className='min-h-screen h-full w-full bg-gray-100'>
			{data && data?.length > 0 ? <FolderView /> : <Upload />}
		</div>
	);
}
