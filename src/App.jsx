import { useState, useEffect } from 'react';
import Question from './components/Question';
import questions from './questions.json';
import './App.css';

export default function App() {
	const [questionArray, setQuestionArray] = useState([]);
	const [count, setCount] = useState(1);

	useEffect(() => {
		setQuestionArray([getRandomQuestion()]);
	}, []);

	const getRandomQuestion = () => {
		const random = questions[Math.floor(Math.random() * questions.length)];
		return `${random.slice(0, 1).toUpperCase()}${random.slice(1, random.length)}`;
	};

	const moveUp = (id) => {
		setQuestionArray([...questionArray, getRandomQuestion()]);

		setCount(count + 1);
		document.querySelector(id).style.bottom = `${200 * count}px`;
	};

	return (
		<section>
			<h1 id="mobile-view">Please turn your device into landscape</h1>
			<div id="question-viewer">
				<div id="question-wrapper">
					{questionArray.map((q) => (
						<Question
							text={
								'If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?'
							}
						/>
					))}
				</div>
			</div>

			<button
				onClick={() => {
					moveUp('#question-wrapper');
				}}
			>
				Next question
			</button>
		</section>
	);
}
