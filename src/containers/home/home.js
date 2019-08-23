import React, { Component, useState } from 'react';
// import { Link } from 'react-router-dom';
// import METADATA from '../../utils/metadata';
import { Link } from 'react-router-dom';
import ListRow from '../../components/listRow';
import GridRow from '../../components/gridRow';
import JrHome from './jrHome';
import PrHome from './prHome';
import HELPER from '../../utils/helper';

// const { PITCHES } = METADATA;

const HomeScreen = ({
	createNewPitch, requestStory, view, setView, isPr,
}) => {
	if (isPr) {
		return <PrHome setView={setView} createNewPitch={createNewPitch} view={view} />;
	}
	return <JrHome setView={setView} requestStory={requestStory} view={view} />;
};

const Layout = ({ view, prPitches: { data } }) => {
	if (HELPER.isObject(data) && data.length) {
		if (view) {
			return <div className="card_row">{data.map(pitch => <GridRow key={pitch.id} {...pitch} />)}</div>;
		}
		return data.map(pitch => <ListRow key={pitch.id} {...pitch} />);
	}
	return null;
};

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: 1,
			end: 9,
		};
	}

	handleNextClick = () => {
		this.setState({ start: 10, end: 19 });
	};

	renderList = () => {
		let { start } = this.state;
		const { end } = this.state;
		const list = [];
		while (start < end) {
			list.push(
				<li className="active">
					<span>{start}</span>
				</li>,
			);
		}
		start += 1;
		return list;
	};

	render() {
		return (
			<div className="page-nation">
				<ul className="pagination pagination-large">
					<li className="disabled">
						<span>«</span>
					</li>
					<li className="active">
						<span>1</span>
					</li>
					<li>
						<span>2</span>
					</li>
					<li>
						<span>3</span>
					</li>
					<li>
						<span>4</span>
					</li>
					<li>
						<span>5</span>
					</li>
					{/* {this.renderList()} */}
					<li className="disabled">
						<span>...</span>
					</li>
					<li onClick={this.handleNextClick} role="button">
						<span>Next</span>
					</li>
				</ul>
			</div>
		);
	}
}

const Home = (props) => {
	const [view, setView] = useState(0);
	return (
		<div>
			<div className="container cstm_container bg_skyblue">
				<HomeScreen {...props} view={view} setView={setView} />
				<Link to="/chat">Go To Chat</Link>
				<Layout view={view} {...props} />
				<Pagination />
			</div>
		</div>
	);
};

export default Home;
