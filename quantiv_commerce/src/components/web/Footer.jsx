import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className='px-6 py-6 lg:px-25 lg:pt-10 overflow-hidden '>
			<div className='flex flex-col'>
				<div className=' icon mb-2'>
					<Link href='/' className='flex gap-2 items-center'>
						<div className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#6a45ff]'>
							<Image src='/cart.svg' alt='Logo' width={20} height={20} />
						</div>
						<span className='text-[#6a45ff] bg-clip-text text-xl font-bold justify-end flex'>
							Quantiv.
						</span>
					</Link>
				</div>
				<div className='text-[#656D78] text-base '>
					Empowering e-commerce businesses with intelligent tools and analytics
					to drive growth and success.
				</div>
			</div>
		</div>
	);
};

export default Footer;
