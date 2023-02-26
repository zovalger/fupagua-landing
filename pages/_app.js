import "../styles/globals.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Toaster />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
