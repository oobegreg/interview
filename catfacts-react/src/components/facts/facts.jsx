import { useState } from 'react';
import './facts.css';

function FactsPage() {
	const [count, setCount] = useState("5")
	const [facts, setFacts] = useState([])

	const fetchFacts = (count) => {
		// Limit facts to 20
		if (count < 20) {
			count = 20;
		}

		// Load the facts
		fetch("https://catfact.ninja/facts?limit=4")
			.then((response) => response.json())
			.then((data) => setFacts(data.data));
	}

	return (
		<>
			<h1>Cat Facts Gennerator</h1>
			<div>
				<button onClick={() => setCount((count) => count + 1)}>
					Less
				</button>
				<button onClick={() => setCount((count) => count - 1)}>
					More
				</button>
				<button onClick={() => fetchFacts(count)}>
					Load {count} facts
				</button>
			</div>
			<p className="sub-text">
				Click <i>Load X facts</i> above to show some facts
			</p>
			{
				facts && facts.map((quote) => <div className='fact'>{quote.fact}<br/></div>)
			}
		</>
	)
}

export default FactsPage