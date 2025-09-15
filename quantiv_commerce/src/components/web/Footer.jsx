import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className='px-6 py-6 lg:px-25 lg:pt-10 overflow-hidden '>
			<div className='flex flex-col'>
				<div className='flex flex-row h-8 w-8 items-center justify-center rounded-lg '>
					<Link href='/'>
						<div className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#6a45ff]'>
							<Image src='/cart.svg' alt='Logo' width={20} height={20} />
						</div>
						<span className='text-[#6a45ff] bg-clip-text text-xl font-bold'>
							Quantiv.
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
