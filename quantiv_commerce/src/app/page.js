import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className='font-[family-name:var(--font-geist-sans)] bg-[#8658e60D] transition-all'>
			<div className='px-6 py-6'>
				<div className='flex flex-col md:flex-row text-2xl items-center  tracking-tight  '>
					<div className='left-side px-4 text-center'>
						<div className='text-4xl items-center flex-row mb-6 font-bold'>
							<span className=' items-center  tracking-tightb'>
								Scale your{" "}
							</span>
							<span className=' bg-gradient-to-br from-[#8B5CF6] to-[#8B5BFF] bg-clip-text text-transparent '>
								E-Commerce{" "}
							</span>
							<span>Business</span>
						</div>
						<span className='text-xl leading-tight tracking-tight text-[#6B7280]'>
							Quantiv provides powerful analytics, inventory management, and
							sales optimization tools to help your online store reach new
							heights.
						</span>
					</div>
					<Button variant="outline" size="lg" className=" bg-[image:var(--quantiv-purple)] hover:opacity-90 hover:bg-green-50/50 text-white hover:text-white">Start Your Free Trial</Button>
				</div>
			</div>
		</main>
	);
}
