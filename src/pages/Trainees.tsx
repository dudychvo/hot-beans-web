const trainees = [
	{
		name: "Alex Johnson",
		role: "Junior Frontend Developer",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		bio: "Alex is passionate about creating beautiful user interfaces and has a keen eye for design.",
	},
	{
		name: "Sam Lee",
		role: "Junior Backend Developer",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		bio: "Sam excels at solving complex problems and building robust server-side applications.",
	},
	{
		name: "Jordan Taylor",
		role: "Junior Full Stack Developer",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		bio: "Jordan loves working on all aspects of web development and is always eager to learn new technologies.",
	},
	{
		name: "Emma Wilson",
		role: "Junior UX/UI Designer",
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
		bio: "Emma has a passion for creating intuitive and visually appealing user experiences.",
	},
	{
		name: "Michael Chen",
		role: "Junior DevOps Engineer",
		image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		bio: "Michael is skilled in automating deployment processes and maintaining server infrastructure.",
	},
	{
		name: "Olivia Brown",
		role: "Junior QA Tester",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
		bio: "Olivia has a keen eye for detail and ensures our applications meet the highest quality standards.",
	},
	{
		name: "David Kim",
		role: "Junior Mobile Developer",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		bio: "David specializes in creating cross-platform mobile applications using React Native.",
	},
	{
		name: "Sophie Martin",
		role: "Junior Data Analyst",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
		bio: "Sophie is passionate about turning data into actionable insights for our clients.",
	},
	{
		name: "Ryan Patel",
		role: "Junior SEO Specialist",
		image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		bio: "Ryan helps optimize our clients' websites for better search engine visibility and performance.",
	},
]

export const Trainees = () => {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-6 font-heading">Our Trainee Web Developers</h1>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{trainees.map(trainee => (
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
