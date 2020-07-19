import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

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
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					{quotes[index] ? (
						<>
							<p>{quotes[index].content}</p>
							<p>{quotes[index].author}</p>
							<p>{index}</p>
						</>
					) : (
						<p>{loading}</p>
					)}
					<button
						disabled={index === 0 ? true : false}
						onClick={() => setIndex(index - 1)}
					>
						Prev
					</button>
					<button onClick={fetchQuote}>Get New Quote</button>
					<button
						disabled={index === quotes.length - 1 ? true : false}
						onClick={() => setIndex(index + 1)}
					>
						Next
					</button>
				</>
			)}
		</div>
	);
}

export default App;
