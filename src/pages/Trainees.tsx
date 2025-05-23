import trainee1 from "../assets/photos:videos/trainee1.avif"
import trainee2 from "../assets/photos:videos/trainee2.avif"
import trainee3 from "../assets/photos:videos/trainee3.avif"
import trainee4 from "../assets/photos:videos/trainee4.avif"
import trainee5 from "../assets/photos:videos/trainee5.avif"
import trainee6 from "../assets/photos:videos/trainee6.avif"
import trainee7 from "../assets/photos:videos/trainee7.avif"
import trainee8 from "../assets/photos:videos/trainee8.avif"
import trainee9 from "../assets/photos:videos/trainee9.avif"

const trainees = [
	{
		name: "Alex Johnson",
		role: "Junior Frontend Developer",
		image: trainee1,
		bio: "Alex is passionate about creating beautiful user interfaces and has a keen eye for design.",
	},
	{
		name: "Sam Lee",
		role: "Junior Backend Developer",
		image: trainee2,
		bio: "Sam excels at solving complex problems and building robust server-side applications.",
	},
	{
		name: "Jordan Taylor",
		role: "Junior Full Stack Developer",
		image: trainee3,
		bio: "Jordan loves working on all aspects of web development and is always eager to learn new technologies.",
	},
	{
		name: "Emma Wilson",
		role: "Junior UX/UI Designer",
		image: trainee4,
		bio: "Emma has a passion for creating intuitive and visually appealing user experiences.",
	},
	{
		name: "Michael Chen",
		role: "Junior DevOps Engineer",
		image: trainee5,
		bio: "Michael is skilled in automating deployment processes and maintaining server infrastructure.",
	},
	{
		name: "Olivia Brown",
		role: "Junior QA Tester",
		image: trainee6,
		bio: "Olivia has a keen eye for detail and ensures our applications meet the highest quality standards.",
	},
	{
		name: "David Kim",
		role: "Junior Mobile Developer",
		image: trainee7,
		bio: "David specializes in creating cross-platform mobile applications using React Native.",
	},
	{
		name: "Sophie Martin",
		role: "Junior Data Analyst",
		image: trainee8,
		bio: "Sophie is passionate about turning data into actionable insights for our clients.",
	},
	{
		name: "Ryan Patel",
		role: "Junior SEO Specialist",
		image: trainee9,
		bio: "Ryan helps optimize our clients' websites for better search engine visibility and performance.",
	},
]

export const Trainees = () => {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-6 font-heading">Our Trainee Web Developers</h1>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{trainees.map((trainee: any) => (
					<div key={trainee.name} className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
						<div className="h-[460px] w-full">
							<img src={trainee.image || "/placeholder.svg"} alt={trainee.name} className="w-full h-full object-cover" />
						</div>
						<div className="p-6 text-center">
							<h2 className="text-2xl font-semibold mb-2 font-heading">{trainee.name}</h2>
							<p className="text-muted-foreground mb-4">{trainee.role}</p>
							<p>{trainee.bio}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
