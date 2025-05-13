import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, CheckSquare } from "lucide-react"

import apply from "../assets/photos:videos/apply.avif"

export const Apply = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		position: "",
		resume: null,
		coverLetter: "",
	})

	const handleInputChange = (e: any) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleFileChange = (e: any) => {
		setFormData(prev => ({ ...prev, resume: e.target.files[0] }))
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		// Here you would typically send the form data to your server
		console.log(formData)
		alert("Application submitted successfully!")
	}

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-6 font-heading">Apply to Hot Beans Web</h1>
			<div className="grid md:grid-cols-2 gap-8">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="name" className="block text-sm font-medium mb-1">
							Full Name
						</label>
						<Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">
							Email
						</label>
						<Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
					</div>
					<div>
						<label htmlFor="phone" className="block text-sm font-medium mb-1">
							Phone Number
						</label>
						<Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
					</div>
					<div>
						<label htmlFor="position" className="block text-sm font-medium mb-1">
							Position Applied For
						</label>
						<Select name="position" onValueChange={value => setFormData(prev => ({ ...prev, position: value }))}>
							<SelectTrigger>
								<SelectValue placeholder="Select a position" />
							</SelectTrigger>
							<SelectContent className="bg-[white]">
								<SelectItem value="frontend" className="hover:bg-[#f2f2f2]">Junior Frontend Developer</SelectItem>
								<SelectItem value="backend" className="hover:bg-[#f2f2f2]">Junior Backend Developer</SelectItem>
								<SelectItem value="fullstack" className="hover:bg-[#f2f2f2]">Junior Full Stack Developer</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>
						<label htmlFor="resume" className="block text-sm font-medium mb-1">
							Resume
						</label>
						<Input type="file" id="resume" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
					</div>
					<div>
						<label htmlFor="coverLetter" className="block text-sm font-medium mb-1">
							Cover Letter
						</label>
						<Textarea id="coverLetter" className="h-122" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows={5} required />
					</div>
					<Button type="submit" className="w-full">
						Submit Application
					</Button>
				</form>
				<div>
					<Card>
						<CardHeader>
							<CardTitle>Application Information</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<p>Thank you for your interest in joining Hot Beans Web. Here's some important information about our application process:</p>
								<div className="flex items-center space-x-2">
									<Phone className="h-5 w-5" />
									<span>Phone: +1 (555) 123-4567</span>
								</div>
								<div className="flex items-center space-x-2">
									<Mail className="h-5 w-5" />
									<span>Email: careers@hotbeansweb.com</span>
								</div>
								<h3 className="font-semibold mt-4">Recruitment Steps:</h3>
								<ul className="list-inside space-y-2">
									<li className="flex items-start space-x-2">
										<CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
										<span>Application review (1-2 weeks)</span>
									</li>
									<li className="flex items-start space-x-2">
										<CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
										<span>Phone screening (30 minutes)</span>
									</li>
									<li className="flex items-start space-x-2">
										<CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
										<span>Technical assessment (1-2 hours)</span>
									</li>
									<li className="flex items-start space-x-2">
										<CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
										<span>On-site interview (2-3 hours)</span>
									</li>
									<li className="flex items-start space-x-2">
										<CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
										<span>Offer and onboarding</span>
									</li>
								</ul>
							</div>
						</CardContent>
					</Card>
					<div className="mt-6 rounded-lg overflow-hidden">
						<img
							src={apply}
							alt="Office environment"
							width={600}
							height={400}
							className="w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
