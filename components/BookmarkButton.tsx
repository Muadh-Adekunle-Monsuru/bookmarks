'use client';
import React from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { PlusSquare, Upload } from 'lucide-react';
import { useDataStore } from '@/store/store';

export default function BookmarkButton() {
	const setData = useDataStore((state) => state.setData);
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					onClick={() => {
						setData([]);
					}}
				>
					<Upload className='size-6 cursor-pointer' />
				</TooltipTrigger>
				<TooltipContent>
					<p>Upload new file</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
