import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import QuoteCard from "./QuoteCard";
import ErrorCard from "./ErrorCard";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [index, setIndex] = useState(quotes.length);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchQuote = async () => {
		setLoading(true);
		const data = await Axios.get("https://api.quotable.io/random");

		if (data.data.author) {
			setError(false);
			setQuotes([
				...quotes,
				{
					author: data.data.author,
					content: data.data.content,
				},
			]);
			setIndex(quotes.length);
		} else {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchQuote();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			{error ? (
				<ErrorCard errrorMessage="Please check your Internet Connection!!" />
			) : (
				<>
					{quotes[index] && (
						<>
							<QuoteCard quote={quotes[index]} />
							{!loading ? (
								<>
									{index === 0 ? null : (
										<button
											type="button"
											className="btn btn-light"
											disabled={index === 0}
											onClick={() => setIndex(index - 1)}
										>
											Prev
										</button>
									)}

									<button
										type="button"
										className="btn btn-light"
										onClick={fetchQuote}
									>
										Get New Quote
									</button>

									{index === quotes.length - 1 ? null : (
										<button
											type="button"
											className="btn btn-light"
											onClick={() => setIndex(index + 1)}
										>
											Next
										</button>
									)}
								</>
							) : (
								<button disabled type="button" className="btn btn-light">
									Loading...
								</button>
							)}
						</>
					)}
				</>
			)}
		</div>
	);
}

export default App;
