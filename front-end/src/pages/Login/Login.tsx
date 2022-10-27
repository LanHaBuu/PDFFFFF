import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import "./Login.scss"
import { useNavigate } from "react-router-dom"
import { UrlProvider } from "../../Context/UrlContext"

const Login: React.FC = () => {
	const [input, setInput] = useState("")
	const value = useContext(UrlProvider)

	const navigate = useNavigate()

	useEffect(() => {
		if (value?.url) {
			const get = async () => {
				await axios.get(`user/${value.url}`)
			}
			get()
		}
	}, [value?.url])

	const handleSubmit = (e: any) => {
		e.preventDefault()
		value?.setUrl(input)
		value?.url && navigate("/")
	}
	return (
		<div className='login-wrapper'>
			<form className='form-login' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='name'
					onChange={e => setInput(e.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export default Login
