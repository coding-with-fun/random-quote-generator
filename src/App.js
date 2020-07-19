import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import QuoteCard from "./QuoteCard";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [index, setIndex] = useState(quotes.length);

	const fetchQuote = async () => {
		setLoading(true);
		const data = await Axios.get("https://api.quotable.io/random");

		setQuotes([
			...quotes,
			{
				author: data.data.author,
				content: data.data.content,
			},
		]);
		setIndex(quotes.length);
		setLoading(false);
	};

	useEffect(() => {
		fetchQuote();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			{quotes[index] ? (
				<>
					<QuoteCard quote={quotes[index]} />

					{!loading ? (
						<>
							{index === 0 ? null : (
								<button
									type="button"
									className="btn btn-primary"
									disabled={index === 0}
									onClick={() => setIndex(index - 1)}
								>
									Prev
								</button>
							)}

							<button
								type="button"
								className="btn btn-primary"
								onClick={fetchQuote}
							>
								Get New Quote
							</button>

							{index === quotes.length - 1 ? null : (
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => setIndex(index + 1)}
								>
									Next
								</button>
							)}
						</>
					) : (
						<button type="button" className="btn btn-primary">
							Loading...
						</button>
					)}
				</>
			) : null}
		</div>
	);
}

export default App;
