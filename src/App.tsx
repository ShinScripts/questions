import { useState, useEffect, useRef } from 'react';
import Question from './components/Question';
import questions from './questions.json';
import './App.css';

const getRandomQuestion = () => {
	const question = questions[Math.floor(Math.random() * questions.length)];
	return `${question.slice(0, 1).toUpperCase()}${question.slice(1)}`;
};

export default function App() {
	const [questionArray, setQuestionArray] = useState([getRandomQuestion()]);
	const count = useRef(0);

	useEffect(() => {
		document.getElementById('nButton')!.addEventListener('click', moveUp);
		document.getElementById('pButton')!.addEventListener('click', moveDown);

		return () => {
			document.getElementById('nButton')!.removeEventListener('click', moveUp);
			document.getElementById('pButton')!.removeEventListener('click', moveDown);
		};
	});

	const moveUp = () => {
		if (count.current + 1 === document.getElementById('question-wrapper')!.children.length)
			setQuestionArray((prev) => [...prev, getRandomQuestion()]);

		count.current = count.current + 1;
		document.getElementById('question-wrapper')!.style.bottom = `${400 * count.current}px`;
	};

	const moveDown = () => {
		if (count.current === 0) return;

		count.current = count.current - 1;
		document.getElementById('question-wrapper')!.style.bottom = `${400 * count.current}px`;
	};

	return (
		<section>
			<div id='con'>
				<div id='question-viewer'>
					<div id='question-wrapper'>
						{questionArray.map((q) => (
							<Question text={q} />
						))}
					</div>
				</div>
			</div>

			<div id='button-container'>
				<a id='nButton' className='button'>
					Next question
				</a>
				<a id='pButton' className='button'>
					Previous question
				</a>
			</div>
		</section>
	);
}
