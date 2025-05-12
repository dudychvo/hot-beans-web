import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export const Footer = () => {
	return (
		<footer className="bg-[#e2e3e6] white">
			<div className="container mx-auto px-4 py-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="mb-4 md:mb-0">&copy; 2025 Hot Beans Web. All rights reserved.</p>
					<div className="flex space-x-4">
						<Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
							<Instagram className="h-6 w-6" />
						</Link>
						<Link to="https://www.aedin.com" target="_blank" rel="noopener noreferrer">
							<Linkedin className="h-6 w-6" />
						</Link>
						<Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
							<Facebook className="h-6 w-6" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
