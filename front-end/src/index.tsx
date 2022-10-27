import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import UrlContext from "./Context/UrlContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<UrlContext>
			<App />
		</UrlContext>
	</React.StrictMode>,
)
