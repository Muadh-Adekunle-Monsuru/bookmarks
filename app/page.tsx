import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='w-full h-screen flex flex-col gap-5 items-center justify-center bg-gradient-to-bl from-pink-200 via-purple-200 to-blue-200'>
			<div className='grid lg:grid-cols-2 border h-full space-y-20 md:space-y-0'>
				<div className='flex flex-col gap-3 my-auto px-5 text-center md:text-left'>
					<h1 className='text-3xl pt-20 md:pt-0 md:text-6xl font-black  blur-[0.3px]'>
						Group and Visualize Your Bookmarks Efforlessly
					</h1>
					<p className='text-xl  '>
						Say goodbye to cluttered tabs and scattered bookmarks. Organize,
						simplify, and access your saved links with ease.
					</p>
					<p className='text-lg font-medium '>Get Started Today</p>
					<Button asChild className='w-1/2 mx-auto md:mx-0'>
						<Link href={'/dashboard'}>Enter</Link>
					</Button>
				</div>
				<div className='grid place-items-center overflow-x-hidden'>
					<Image
						src={'/laptop.png'}
						width={700}
						height={700}
						className='my-auto lg:ml-40 lg:scale-125'
						alt='Screenshot'
					/>
				</div>
			</div>
		</div>
	);
}
