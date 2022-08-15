import { useState, useEffect } from 'react';
import Question from './components/Question';
import questions from './questions.json';
import './App.css';

const getRandomQuestion = () => {
	const question = questions[Math.floor(Math.random() * questions.length)];
	return `${question.slice(0, 1).toUpperCase()}${question.slice(1, question.length)}` as never;
};

export default function App() {
	const [questionArray, setQuestionArray] = useState([getRandomQuestion()]);
	const [count, setCount] = useState(1);

	useEffect(() => {
		document.body.addEventListener('click', moveUp);
		return () => document.body.removeEventListener('click', moveUp);
	});

	const moveUp = () => {
		setQuestionArray((prev) => [...prev, getRandomQuestion()]);
		setCount((prev) => prev + 1);
		(document.querySelector('#question-wrapper') as any).style.bottom = `${500 * count}px`;
	};

	return (
		<section>
			<div id='question-viewer'>
				<div id='question-wrapper'>
					{questionArray.map((q) => (
						<Question text={q} />
					))}
				</div>
			</div>
		</section>
	);
}
