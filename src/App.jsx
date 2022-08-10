import { useState, useEffect } from 'react';
import Question from './components/Question';
import questions from './questions.json';
import './App.css';

export default function App() {
	const [questionArray, setQuestionArray] = useState([]);
	const [count, setCount] = useState(1);

	useEffect(() => {
		setQuestionArray(() =>
			questions
				.map((question) => `${question.slice(0, 1).toUpperCase()}${question.slice(1, question.length)}`)
				.sort(() => Math.random() - 0.5)
		);
	}, []);

	const moveUp = (id) => {
		setCount((prev) => prev + 1);
		document.querySelector(id).style.bottom = `${200 * count}px`;
	};

	return (
		<section>
			<h1 id="mobile-view">Please turn your device into landscape</h1>
			<div id="question-viewer">
				<div id="question-wrapper">
					{questionArray.map((q) => (
						<Question text={q} />
					))}
				</div>
			</div>

			<button onClick={() => moveUp('#question-wrapper')}>Next question</button>
		</section>
	);
}
