import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const jobs = [
	{
		title: "Junior Frontend Developer",
		requirements: [
			"Bachelor's degree in Computer Science or related field",
			"Proficiency in HTML, CSS, and JavaScript",
			"Experience with React or similar frontend frameworks",
			"Strong problem-solving skills",
			"Excellent communication skills",
		],
		responsibilities: [
			"Develop and maintain user interfaces for web applications",
			"Collaborate with designers to implement visual elements",
			"Optimize applications for maximum speed and scalability",
			"Ensure cross-browser compatibility and responsiveness",
		],
		image: "src/assets/photos:videos/job1.avif",
	},
	{
		title: "Junior Backend Developer",
		requirements: [
			"Bachelor's degree in Computer Science or related field",
			"Proficiency in server-side languages (e.g., Node.js, Python, Ruby)",
			"Experience with databases (SQL and NoSQL)",
			"Understanding of RESTful APIs",
			"Knowledge of version control systems (e.g., Git)",
		],
		responsibilities: [
			"Develop and maintain server-side logic",
			"Design and implement database schemas",
			"Integrate data storage solutions",
			"Ensure high performance and responsiveness to requests from the front-end",
		],
		image: "src/assets/photos:videos/job2.avif",
	},
	{
		title: "Junior Full Stack Developer",
		requirements: [
			"Bachelor's degree in Computer Science or related field",
			"Proficiency in both frontend and backend technologies",
			"Experience with React and Node.js",
			"Familiarity with database systems (e.g., MongoDB, PostgreSQL)",
			"Understanding of web application architecture",
			"Strong problem-solving skills",
		],
		responsibilities: [
			"Develop and maintain both frontend and backend components of web applications",
			"Collaborate with cross-functional teams to define and implement new features",
			"Optimize applications for maximum speed and scalability",
			"Participate in code reviews and contribute to best practices",
		],
		image: "src/assets/photos:videos/job3.avif",
	},
]

export const Jobs = () => {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-6 font-heading">Job Specifications</h1>
			{jobs.map(job => (
				<div key={job.title} className="mb-12 bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
					<div className="md:flex">
						<div className="w-full md:w-1/3 h-64 md:h-auto relative">
							<img src={job.image || "/placeholder.svg"} alt={job.title} className="w-full h-full object-cover" />
						</div>
						<div className="p-6 md:w-2/3">
							<h2 className="text-2xl font-semibold mb-4 font-heading">{job.title}</h2>
							<div className="mb-6">
								<h3 className="text-xl font-semibold mb-2 font-heading">Requirements:</h3>
								<ul className="list-disc list-inside">
									{job.requirements.map(req => (
										<li key={req}>{req}</li>
									))}
								</ul>
							</div>
							<div className="mb-6">
								<h3 className="text-xl font-semibold mb-2 font-heading">Responsibilities:</h3>
								<ul className="list-disc list-inside">
									{job.responsibilities.map(resp => (
										<li key={resp}>{resp}</li>
									))}
								</ul>
							</div>
							<Link to="/apply">
								<Button>Apply Now</Button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
