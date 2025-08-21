import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Home() {
	return (
		<main className='font-[family-name:var(--font-geist-sans)] bg-[#8658e60D] transition-all'>
			<div className='px-6 py-6 lg:px-25 lg:pt-10 overflow-hidden'>
				<div className='flex flex-col lg:flex-row text-2xl tracking-tight'>
					{/* Left side - Text content (60% on large screens) */}
					<div className='left-side  w-full lg:w-3/5 px-4 lg:px-0 text-center lg:text-left mb-6 xl:pt-9 '>
						<div className='w-full text-4xl lg:text-5xl  xl:text-6xl items-center flex-row mb-6 font-bold leading-tight'>
							<span className='items-center tracking-tight'>Scale Your </span>
							<span className='bg-gradient-to-br from-[#8B5CF6] to-[#8B5BFF] bg-clip-text text-transparent'>
								E-Commerce{" "}
							</span>
							<span>Business</span>
						</div>
						<p className='text-lg lg:text-xl leading-relaxed tracking-tight text-[#6B7280] mb-8 max-w-lg mx-auto lg:mx-0'>
							Quantiv provides powerful analytics, inventory management, and
							sales optimization tools to help your online store reach new
							heights.
						</p>
						<div className='w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center'>
							<Button
								variant='outline'
								size='lg'
								className='bg-[image:var(--quantiv-purple)] hover:opacity-90 hover:bg-green-50/50 text-white hover:text-white w-full sm:w-auto'>
								Start Your Free Trial
							</Button>
							<Button
								className='bg-gradient-to-br from-[#8B5CF6] to-[#8B5BFF] bg-clip-text text-transparent border border-[#8B5CF6] w-full sm:w-auto'
								variant='outline'
								size='lg'>
								<Play size={24} color='#8B5CF6' />
								Watch Demo
							</Button>
						</div>
						{/* Feature highlights */}
						<div className='flex flex-col sm:flex-row gap-4 mt-8 text-sm text-green-600 justify-center lg:justify-start'>
							<div className='flex items-center gap-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>No credit card required</span>
							</div>
							<div className='flex items-center gap-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>14-day free trial</span>
							</div>
						</div>
					</div>

					{/* Right side - Image (40% on large screens) */}
					<div className='w-full lg:w-2/5 items-center flex'>
						<div className='relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600  items-center'>
							<Image
								src='/hero_image.svg'
								fill
								alt='Quantiv analytics dashboard preview showing various charts and metrics'
								className='object-cover rounded-xl'
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
