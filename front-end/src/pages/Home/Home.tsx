import React, { useState, useContext } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import { UrlProvider } from "../../Context/UrlContext"
import { Link } from "react-router-dom"
import "./Home.scss"

const Home: React.FC = () => {
	const [numPages, setNumPages] = useState<any>()
	const [pageNumber, setPageNumber] = useState(1)
	const value = useContext(UrlProvider)
	const onDocumentLoadSuccess = ({ numPages }: { numPages: any }): void => {
		setNumPages(numPages)
		setPageNumber(1)
	}
	return (
		<div className='home-wrapper'>
			{value?.url && (
				<Document
					file={{ url: `user/get/${value?.url}` }}
					onLoadSuccess={onDocumentLoadSuccess}
				>
					<Page pageNumber={pageNumber} />
				</Document>
			)}
			<Link to='/login' className='login'>
				Login
			</Link>
		</div>
	)
}

export default Home
