import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import METADATA from '../../utils/metadata';
import ListRow from '../../components/listRow';
import GridRow from '../../components/gridRow';
import JrHome from './jrHome';
import PrHome from './prHome';
import HELPER from '../../utils/helper';
import Pagination from '../../components/pagination';

// const { PITCHES } = METADATA;

const HomeScreen = ({
	createNewPitch, requestStory, view, setView, isPr,
}) => {
	if (isPr) {
		return <PrHome setView={setView} createNewPitch={createNewPitch} view={view} />;
	} return <JrHome setView={setView} requestStory={requestStory} view={view} />;
};

const Layout = ({ view, prPitches: { data: { results } } }) => {
	if (HELPER.isObject(results) && results.length) {
		if (view) {
			return (
				<div className="card_row">
					{results.map(pitch => <GridRow key={pitch.id} {...pitch} />)}
				</div>
			);
		}
		return results.map(pitch => <ListRow key={pitch.id} {...pitch} />);
	}
	return null;
};

const Home = ({
	pageSize, onPageChange, ...props
}) => {
	const [view, setView] = useState(0);
	const { prPitches: { data: { count } } } = props;
	return (
		<div>
			<div className="container cstm_container bg_skyblue">
				<HomeScreen {...props} view={view} setView={setView} />
				<Layout view={view} {...props} />
				<Pagination
					{...props}
					totalCount={count}
					pageNumberCount={5}
					onPageChange={onPageChange}
				/>
			</div>
		</div>
	);
};

export default Home;
