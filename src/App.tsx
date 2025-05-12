import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Apply } from "./pages/Apply"
import { Courses } from "./pages/Courses"
import { Jobs } from "./pages/Jobs"
import { Trainees } from "./pages/Trainees"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="min-h-[calc(100vh-72px-68px)]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/apply" element={<Apply />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/jobs" element={<Jobs />} />
					<Route path="/trainees" element={<Trainees />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
