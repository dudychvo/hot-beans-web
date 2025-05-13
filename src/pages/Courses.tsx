import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import courses1 from "../assets/photos:videos/courses1.avif"
import courses2 from "../assets/photos:videos/courses2.avif"
import courses3 from "../assets/photos:videos/courses3.avif"
import courses4 from "../assets/photos:videos/courses4.avif"
import courses5 from "../assets/photos:videos/courses5.avif"
import courses6 from "../assets/photos:videos/courses6.avif"

const courses = [
	{
		title: "Introduction to Web Development",
		description: "Learn the basics of HTML, CSS, and JavaScript.",
		duration: "6 weeks",
		level: "Beginner",
		image: courses1,
	},
	{
		title: "Advanced React Development",
		description: "Master React and build complex user interfaces.",
		duration: "8 weeks",
		level: "Intermediate",
		image: courses2,
	},
	{
		title: "Full Stack Development with Node.js",
		description: "Learn to build full-stack applications with Node.js and Express.",
		duration: "10 weeks",
		level: "Advanced",
		image: courses3,
	},
	{
		title: "Backend Development with Django",
		description: "Learn to build secure and scalable web applications using Python and the Django framework.",
		duration: "8 weeks",
		level: "Intermediate",
		image: courses4,
	},
	{
		title: "Python for Data Science",
		description: "Analyze data, create visualizations, and build predictive models using Python.",
		duration: "12 weeks",
		level: "Beginner",
		image: courses5,
	},
	{
		title: "Mobile App Development with Flutter",
		description: "Learn to build beautiful and high-performance mobile apps for iOS and Android with Flutter.",
		duration: "9 weeks",
		level: "Advanced",
		image: courses6,
	}
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
