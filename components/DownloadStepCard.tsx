import Image from 'next/image';
import React from 'react';

export default function DownloadStepCard({
	step,
	description,
	imageSrc,
	title,
}: {
	step: string;
	description: string;
	imageSrc: string;
	title: string;
}) {
	return (
		<div className='my-12 mx-auto lg:w-1/2'>
			<h1 className=' font-semibold text-xl '>
				Step {step}: {title}
			</h1>
			<p className='text-justify  text-gray-700 pt-2 pb-6'>{description}</p>
			<Image
				src={imageSrc}
				alt='instruction'
				width={750}
				height={750}
				className='w-full rounded-lg shadow-md'
			/>
		</div>
	);
}
