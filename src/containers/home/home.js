import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import ListRow from '../../components/listRow';
import GridRow from '../../components/gridRow';
import JrHome from './jrHome';
import PrHome from './prHome';
import HELPER from '../../utils/helper';

const HomeScreen = ({
	createNewPitch, requestStory, view, setView, isPr, ...props
}) => {
	if (isPr) {
		return <PrHome setView={setView} createNewPitch={createNewPitch} view={view} {...props} />;
	}
	return <JrHome setView={setView} requestStory={requestStory} view={view} {...props} />;
};

const Layout = ({
	view, prPitches, onPitchClick, login, deletePitch,
}) => {
	if (HELPER.isObject(prPitches.data) && prPitches.data.results && prPitches.data.results.length) {
		if (view) {
			return (
				<div className="card_row">
					{prPitches.data.results.map(pitch => (
						<GridRow
							key={pitch.url}
							{...pitch}
							onClick={onPitchClick}
							login={login}
							onDelete={deletePitch}
						/>
					))}
				</div>
			);
		}
		return prPitches.data.results.map(pitch => (
			<ListRow
				key={pitch.url}
				{...pitch}
				login={login}
				onClick={onPitchClick}
			/>
		));
	}
	return null;
};

const Home = ({ pageSize, onPageChange, ...props }) => {
	const [view, setView] = useState(0);
	const { prPitches: { code, data }, selectedPage } = props;
	return (
		<div>
			<div className="container cstm_container bg_skyblue">
				<HomeScreen {...props} view={view} setView={setView} />
				<Link to="/chat">Go To Chat</Link>
				<Layout view={view} {...props} />
				{((code === 'SUCCESS') && data && (typeof data === 'object') && Math.ceil(data.count / 10) > 1)
					? (
						<ReactPaginate
							previousLabel="previous"
							nextLabel="next"
							breakLabel="..."
							breakClassName="break-me"
							pageCount={Math.ceil(data.count / 10)}
							marginPagesDisplayed={2}
							pageRangeDisplayed={5}
							onPageChange={e => onPageChange(e.selected)}
							containerClassName="pagination"
							subContainerClassName="pages pagination"
							activeClassName="active"
							forcePage={selectedPage}
						/>
					) : null}
			</div>
		</div>
	);
};

export default Home;
