'use client';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import { SignInButton } from '@clerk/nextjs';

export default function ProfileMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className='size-7 rounded-full border-black flex items-center justify-center border'>
					<User className='size-4' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>
					<SignInButton />
				</DropdownMenuLabel>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
