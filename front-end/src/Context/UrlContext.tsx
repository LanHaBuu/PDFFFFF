import React, { createContext, useState } from "react"

interface Children {
	children: React.ReactNode
}

interface IUrl {
	url: any
	setUrl: any
}

export const UrlProvider = createContext<IUrl | null>(null)

const UrlContext: React.FC<Children> = ({ children }) => {
	const [url, setUrl] = useState()
	const value = {
		url,
		setUrl,
	}
	return <UrlProvider.Provider value={value}>{children}</UrlProvider.Provider>
}

export default UrlContext
