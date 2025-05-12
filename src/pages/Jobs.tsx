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
		image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
		image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
		image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
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
