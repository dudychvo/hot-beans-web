import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const Home = () => {
	return (
		<div className="container mx-auto px-4 py-12">
			<section className="mb-16 text-center">
				<h1 className="text-4xl font-bold mb-4 font-heading">Welcome to Hot Beans Web</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">We are a dynamic web development company looking for talented individuals to join our team.</p>
			</section>

			<section className="mb-16">
				<div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
					<video className="w-full h-full object-cover" autoPlay muted loop playsInline >
						<source src="src/assets/photos:videos/video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
						<div className="text-center text-white p-4 bg-[#4648479c] rounded-lg">
							<h2 className="text-3xl font-bold mb-2 font-heading">Building the Future of the Web</h2>
							<p className="text-xl">Join our team of innovative developers</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h2 className="text-3xl font-semibold mb-4 font-heading">Who We Are</h2>
					<p className="text-lg mb-4">
						Hot Beans Web is a cutting-edge web development company that creates innovative solutions for businesses of all sizes. Our team of passionate developers and designers
						work together to bring ideas to life on the web.
					</p>
					<p className="text-lg">
						We're always looking for fresh talent to join our growing team. If you're passionate about web development and want to work on exciting projects, you've come to the
						right place!
					</p>
				</div>
				<div className="flex justify-center">
					<img
						src="src/assets/photos:videos/homePic.avif"
						alt="Team working together"
						width={500}
						height={400}
						className="rounded-lg shadow-lg object-cover"
					/>
				</div>
			</section>

			<section className="mb-16">
				<h2 className="text-3xl font-semibold mb-8 text-center font-heading">Why Choose Hot Beans Web?</h2>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{[
						{ title: "Innovative Projects", description: "Work on cutting-edge web applications" },
						{ title: "Collaborative Environment", description: "Learn from experienced developers" },
						{ title: "Career Growth", description: "Opportunities for advancement and skill development" },
						{ title: "Work-Life Balance", description: "Flexible hours and remote work options" },
						{ title: "Competitive Compensation", description: "Salary and benefits package" },
						{ title: "Latest Technologies", description: "Stay up-to-date with modern web development" },
					].map((item, index) => (
						<div key={index} className="bg-[#e8eaee] rounded-lg p-6 shadow-lg">
							<h3 className="text-xl font-semibold mb-2 font-heading">{item.title}</h3>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mb-16">
				<h2 className="text-3xl font-semibold mb-8 text-center font-heading">Frequently Asked Questions</h2>
				<Accordion type="single" collapsible className="w-full">
					{[
						{
							question: "What technologies do you use?",
							answer: "We use a variety of modern web technologies, including React, Next.js, Node.js, and more.",
						},
						{
							question: "Do you offer internships?",
							answer: "Yes, we offer internships for students and recent graduates.",
						},
						{
							question: "What's the work environment like?",
							answer: "We have a collaborative and friendly work environment with a focus on continuous learning.",
						},
						{
							question: "Are there opportunities for remote work?",
							answer: "Yes, we offer flexible work arrangements, including remote work options.",
						},
						{
							question: "What kind of projects will I work on?",
							answer: "You'll work on a variety of projects, from e-commerce sites to complex web applications.",
						},
						{
							question: "Do you provide training for new employees?",
							answer: "Yes, we have a comprehensive onboarding process and ongoing training programs.",
						},
						{
							question: "What are the career growth opportunities?",
							answer: "We offer clear career paths and opportunities for advancement within the company.",
						},
						{
							question: "How big is the development team?",
							answer: "Our development team consists of about 30 professionals with various specializations.",
						},
						{
							question: "Do you work with international clients?",
							answer: "Yes, we have clients from all over the world, giving you exposure to diverse projects.",
						},
						{
							question: "What's the interview process like?",
							answer: "Our interview process typically includes a technical assessment and a culture fit interview.",
						},
					].map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger>{item.question}</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>

			<section className="mb-16">
				<h2 className="text-3xl font-semibold mb-4 font-heading">About Hot Beans Web</h2>
				<p className="text-lg mb-4">
					Founded in 2015, Hot Beans Web has quickly become a leader in web development solutions. Our team of skilled developers, designers, and project managers work together to
					deliver high-quality, innovative web applications for clients across various industries.
				</p>
				<p className="text-lg mb-4">
					At Hot Beans Web, we believe in fostering a culture of continuous learning and innovation. We invest in our employees' growth and provide them with opportunities to work
					on challenging projects using the latest technologies. Our collaborative work environment encourages creativity and problem-solving, allowing our team members to thrive
					and deliver exceptional results for our clients.
				</p>
				<p className="text-lg">
					We're committed to staying at the forefront of web development trends and best practices. This commitment not only benefits our clients but also ensures that our team
					members are always expanding their skills and knowledge. If you're passionate about web development and want to be part of a dynamic, forward-thinking team, Hot Beans Web
					is the place for you.
				</p>
			</section>

			<div className="text-center">
				<Link to="/apply">
					<Button size="lg" className="text-lg px-8 py-6">
						Join Our Team
					</Button>
				</Link>
			</div>
		</div>
	)
}
