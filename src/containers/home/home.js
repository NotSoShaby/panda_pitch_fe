import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import METADATA from '../../utils/metadata';
import ListRow from '../../components/listRow';
import GridRow from '../../components/gridRow';
import JrHome from './jrHome';
import PrHome from './prHome';
// import HELPER from '../../utils/helper';

const { PITCHES } = METADATA;

const HomeScreen = ({
	createNewPitch, requestStory, view, setView, isPr,
}) => {
	// const { data: { role } } = login;
	if (isPr) {
		return <PrHome setView={setView} createNewPitch={createNewPitch} view={view} />;
	}
	return <JrHome setView={setView} requestStory={requestStory} view={view} />;
};

const Layout = ({ view }) => {
	if (view) {
		return <div className="card_row">{PITCHES.map(pitch => <GridRow key={pitch.name} {...pitch} />)}</div>;
	}
	return PITCHES.map(pitch => <ListRow key={pitch.name} {...pitch} />);
};

// class Pagination extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			start: 1,
// 			end: 9,
// 		};
// 	}

// 	handleNextClick = () => {
// 		this.setState({ start: 10, end: 19 });
// 	};

// 	renderList = () => {
// 		let { start } = this.state;
// 		const { end } = this.state;
// 		const list = [];
// 		while (start < end) {
// 			console.log('coming======>');
// 			list.push(
// 				<li className="active">
// 					<span>{start}</span>
// 				</li>,
// 			);
// 		}
// 		start += 1;
// 		return list;
// 	};

// 	render() {
// 		return (
// 			<div className="page-nation">
// 				<ul className="pagination pagination-large">
// 					<li className="disabled">
// 						<span>«</span>
// 					</li>
// 					{this.renderList()}
// 					<li className="disabled">
// 						<span>...</span>
// 					</li>
// 					<li onClick={this.handleNextClick} role="button">
// 						<span>Next</span>
// 					</li>
// 				</ul>
// 			</div>
// 		);
// 	}
// }

const Home = (props) => {
	const [view, setView] = useState(0);
	return (
		<div>
			<div className="container cstm_container bg_skyblue">
				<HomeScreen {...props} view={view} setView={setView} />
				<Layout view={view} />
				{/* <Pagination /> */}
			</div>
		</div>
	);
};

export default Home;
