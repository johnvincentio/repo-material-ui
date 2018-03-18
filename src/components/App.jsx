import React, { Fragment } from 'react';

import { Header, Footer } from './layouts';
import Exercises from './exercises';
import { muscles, exercises } from './store';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { exercises, exercise: {}, category: '' };
		this.handleCategorySelected = this.handleCategorySelected.bind(this);
		this.handleExerciseSelected = this.handleExerciseSelected.bind(this);
		this.handleExerciseCreate = this.handleExerciseCreate.bind(this);
	}

	getExercisesByMuscles() {
		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
				const { muscles } = exercise;
				exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];
				return exercises;
			}, {})
		);
	}

	handleCategorySelected(type) {
		console.log('handleCategorySelected; type ', type);
		this.setState({
			category: type
		});
	}

	handleExerciseSelected(id) {
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id)
		}));
	}

	handleExerciseCreate(exercise) {
		this.setState(({ exercises }) => ({
			exercises: [...exercises, exercise]
		}));
	}

	render() {
		const exercises = this.getExercisesByMuscles();
		const { category, exercise } = this.state;

		return (
			<Fragment>
				<Header muscles={muscles} onExerciseCreate={this.handleExerciseCreate} />

				<Exercises
					exercise={exercise}
					category={category}
					exercises={exercises}
					onSelect={this.handleExerciseSelected}
				/>

				<Footer category={category} muscles={muscles} onSelect={this.handleCategorySelected} />
			</Fragment>
		);
	}
}
