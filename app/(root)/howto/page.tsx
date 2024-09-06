import DownloadStepCard from '@/components/DownloadStepCard';
import React from 'react';

export default function page() {
	return (
		<div className='pb-20 h-full w-full  bg-gradient-to-br from-blue-100 via-purple-100 to-red-200 '>
			<h1 className='text-3xl font-semibold p-12 text-center'>
				How to Export Bookmarks
			</h1>

			<DownloadStepCard
				step='1'
				description='Click the three dots in the top-right corner of your browser, hover over "Bookmarks," and then select "Bookmark Manager." Alternatively, you can press Ctrl + Shift + O to open it directly.'
				imageSrc='/step1.1.png'
				title='Open the Bookmark Manager'
			/>
			<DownloadStepCard
				step='2'
				description='In the Bookmark Manager, click the three dots in the top-right corner of the page, then select "Export bookmarks."'
				imageSrc='/step2.png'
				title='Export Your Bookmarks'
			/>
			<DownloadStepCard
				step='3'
				description='In the Bookmark Manager, click the three dots in the top-right corner of the page, then select "Export bookmarks."'
				imageSrc='/step3.png'
				title='Save Your Bookmarks'
			/>
		</div>
	);
}
