import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Code, Menu, X } from "lucide-react"
import { useState } from "react"

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="bg-[#657af4] text-primary-foreground text-white">
			<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link to="/" className="text-2xl font-bold flex items-center">
					<Code className="mr-2 h-6 w-6" />
					Hot Beans Web
				</Link>
				<div className="md:hidden">
					<Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</Button>
				</div>
				<ul className={`md:flex space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? "absolute top-16 left-0 right-0 bg-[#657af4] p-4 z-50 text-white" : "hidden"}`}>
					<li>
						<Link to="/">
							<Button variant="ghost" className="w-full md:w-auto">
								Home
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/trainees">
							<Button variant="ghost" className="w-full md:w-auto">
								Trainees
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/jobs">
							<Button variant="ghost" className="w-full md:w-auto">
								Jobs
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/apply">
							<Button variant="ghost" className="w-full md:w-auto">
								Apply
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/courses">
							<Button variant="ghost" className="w-full md:w-auto">
								Courses
							</Button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
