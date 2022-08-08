import { useState } from 'react';
import './App.css';
import questions from './questions.json';

export default function App() {
	const [question, setQuestion] = useState('');

	const getRandomQuestion = () => {
		const random = questions[Math.floor(Math.random() * questions.length)];
		return `${random.slice(0, 1).toUpperCase()}${random.slice(1, random.length)}`;
	};

	const setNewQuestion = () => setQuestion(getRandomQuestion);

	return (
		<div>
			<h1>{question === 'hello world content todo something~' ? getRandomQuestion : question}</h1>
			<button onClick={setNewQuestion}>Next question</button>
		</div>
	);
}
