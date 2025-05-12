import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const courses = [
	{
		title: "Introduction to Web Development",
		description: "Learn the basics of HTML, CSS, and JavaScript.",
		duration: "6 weeks",
		level: "Beginner",
		image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
	},
	{
		title: "Advanced React Development",
		description: "Master React and build complex user interfaces.",
		duration: "8 weeks",
		level: "Intermediate",
		image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
	{
		title: "Full Stack Development with Node.js",
		description: "Learn to build full-stack applications with Node.js and Express.",
		duration: "10 weeks",
		level: "Advanced",
		image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
	},
]

export const Courses = () => {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-6 font-heading">Web Development Courses</h1>
			<p className="mb-8">Enhance your skills with our recommended web development courses. These courses will help you prepare for a career at Hot Beans Web.</p>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{courses.map(course => (
					<div key={course.title} className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
						<div className="h-48 w-full">
							<img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
						</div>
						<div className="p-6">
							<h2 className="text-2xl font-semibold mb-2 font-heading">{course.title}</h2>
							<p className="text-muted-foreground mb-4">{course.description}</p>
							<p className="mb-2">Duration: {course.duration}</p>
							<p className="mb-4">Level: {course.level}</p>
							<Link to="#">
								<Button>Learn More</Button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
