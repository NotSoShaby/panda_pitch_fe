import React, { useState } from 'react';
import METADATA from '../../utils/metadata';
import ListRow from '../../components/listRow';
import GridRow from '../../components/gridRow';
import JrHome from './jrHome';
import PrHome from './prHome';
import HELPER from '../../utils/helper';

const { PITCHES } = METADATA;

const HomeScreen = ({
	createNewPitch, requestStory, view, setView, login,
}) => {
	const { data } = login;
	const { role } = data;
	if (HELPER.isPr(role)) {
		return <PrHome setView={setView} createNewPitch={createNewPitch} view={view} />;
	}
	return <JrHome setView={setView} requestStory={requestStory} view={view} />;
};

const Layout = ({ view }) => {
	if (view) { return <div className="card_row">{PITCHES.map(pitch => <GridRow key={pitch.name} {...pitch} />)}</div>; }
	return PITCHES.map(pitch => <ListRow key={pitch.name} {...pitch} />);
};

const Home = (props) => {
	const [view, setView] = useState(0);
	return (
		<div>
			<div className="container cstm_container bg_skyblue">
				<HomeScreen {...props} view={view} setView={setView} />
				<Layout view={view} />
			</div>
		</div>
	);
};

export default Home;
