import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";


export const Featurecard = ({ icon, title, description }) => {
	return (
		// <div className='justify-center px-6 py-6 lg:px-25 lg:pt-10 overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  items-stretch '>
			<Card className="hover:shadow-[0_10px_30px_-10px_#7019EE4D]">
				<CardHeader>
					<CardTitle className='text-[#8B5CF6] transform bg-purple-100 rounded w-10 h-10 p-2'>{icon}</CardTitle>

					<CardTitle className='pt-3 '>{title}</CardTitle>
				</CardHeader>

				<CardDescription className=''>{description}</CardDescription>
			</Card>
		// </div>
	);
};


