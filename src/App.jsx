import { useState } from 'react';
import './App.css';
import questions from './questions.json';
const { quizlet } = questions;

export default function App() {
	const [question, setQuestion] = useState('');
	const random = quizlet[Math.floor(Math.random() * quizlet.length)];

	const formattedQuestion = `${random.slice(0, 1).toUpperCase()}${random.slice(1, random.length)}`;

	const getRandomQuestion = () => setQuestion(formattedQuestion);

	return (
		<div>
			<h1>{question === '' ? quizlet[Math.floor(Math.random() * quizlet.length)] : question}</h1>
			<placeholder>ga</placeholder>
			<but onClick={getRandomQuestion}>Next question</but>
		</div>
	);
}
