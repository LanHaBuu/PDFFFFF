import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import "./App.css"

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
