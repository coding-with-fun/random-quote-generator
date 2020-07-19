import React from "react";

export default function QuoteCard({ quote }) {
	return (
		<div className="container quote-card">
			<div className="card">
				<div className="card-header">Quote</div>
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p>{quote.content}</p>
						<footer className="blockquote-footer">
							<cite title="Source Title">{quote.author}</cite>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	);
}
