import React from "react";

export default function ErrorCard({ errrorMessage }) {
	return (
		<div className="container quote-card">
			<div className="card">
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p>{errrorMessage}</p>
					</blockquote>
				</div>
			</div>
		</div>
	);
}
