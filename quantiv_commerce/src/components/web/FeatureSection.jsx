import { Featurecard } from "./FeatureCard";
import {
	ChartColumn,
	ShoppingBag,
	TrendingUp,
	Zap,
	Shield,
	Globe,
} from "lucide-react";

const Features = [
	{
		icon: <ChartColumn />,
		title: "Analytics",
		description:
			"Get deep insights into your sales performance, customer behavior, and market trends with our powerful analytics dashboard.",
	},
	{
		icon: <ShoppingBag />,
		title: "Inventory Management",
		description:
			"Track stock levels, automate reordering, and manage suppliers with our intelligent inventory management system.",
	},
	{
		icon: <TrendingUp />,
		title: "Sales Optimization",
		description:
			"Get deep insights into your sales performance, customer behavior, and market trends with our powerful analytics dashboard.",
	},
	{
		icon: <Zap />,
		title: "Lightning Fast",
		description:
			"Experience blazing-fast performance with our optimized infrastructure that scales with your business growth.",
	},
	{
		icon: <Shield />,
		title: "Secure and Reliable",
		description:
			"Your data is protected with enterprise-grade security, automated backups, and 99.9% uptime guarantee.",
	},
	{
		icon: <Globe />,
		title: "Global Reach",
		description:
			"Expand worldwide with multi-currency support, international shipping, and localized customer experiences.",
	},
];

export const FeatureSection = () => {
	return (
		<section className=' px-6 py-10 lg:px-25 '>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  '>
				{Features.map((feature, i) => (
					<Featurecard 
						key={i}
						icon={feature.icon}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</section>
	);
};
