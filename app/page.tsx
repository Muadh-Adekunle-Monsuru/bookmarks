import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='w-full h-screen flex flex-col gap-5 items-center justify-center bg-gradient-to-bl from-pink-200 via-purple-200 to-blue-200'>
			<h1 className='text-7xl font-extrabold w-2/3 text-center'>
				Clean up your messy bookmarks
			</h1>
			<Button asChild>
				<Link href={'/dashboard'}>Enter</Link>
			</Button>
		</div>
	);
}
