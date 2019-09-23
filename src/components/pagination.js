import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Pagination extends Component {
	constructor(props) {
		super(props);
		const { totalCount, pageNumberCount } = props;
		this.state = {
			...props,
			pagesToDisplay: [],
			totalPages: (totalCount / pageNumberCount) + 1,
			pageNumberCount,
		};
	}

	componentDidMount() {
		this.setPageIndex(0);
	}

	setPageIndex(index) {
		const { totalPages, pageNumberCount } = this.state;
		const pagesArray = this.pagesArray(totalPages);
		const pagesToDisplay = this.paginate(pagesArray, index, pageNumberCount);
		this.setState({ pagesToDisplay, selectedPage: pagesToDisplay[0] });
	}

	pagesArray = totalPages => _.range(1, totalPages + 1);

	onPageChange = (selectedPage) => {
		this.setState({ selectedPage });
		const { onPageChange } = this.props;
		onPageChange(selectedPage);
	}

	handlePreviousPage = () => {
		const { pageNumberCount, pagesToDisplay } = this.state;
		const startIndex = pagesToDisplay[0] - pageNumberCount - 1 > 0
			? pagesToDisplay[0] - pageNumberCount - 1 : 0;
		this.setPageIndex(startIndex);
	};

	handleNextPage = () => {
		const { pagesToDisplay, totalPages } = this.state;
		const startIndex = pagesToDisplay[pagesToDisplay.length - 1] < totalPages
			? pagesToDisplay[pagesToDisplay.length - 1] : pagesToDisplay[0] - 1;
		this.setPageIndex(startIndex);
	};

	paginate = (pages, pageNumber = 1, pageSize = 5) => _(pages)
		.slice(pageNumber)
		.take(pageSize)
		.value()

	render() {
		const { pagesToDisplay, totalPages, selectedPage } = this.state;
		if (!pagesToDisplay || pagesToDisplay.length === 0) return null;

		const previousClass = pagesToDisplay[0] === 1 ? 'disabled' : '';
		const nextClass = pagesToDisplay[pagesToDisplay.length - 1] === totalPages ? 'disabled' : '';
		return (
			<div className="page-nation">
				<ul className="pagination pagination-large">
					{pagesToDisplay[0] !== 1 && (
						<li className={previousClass} role="button" onClick={this.handlePreviousPage}>
							<span>‹‹</span>
						</li>
					)}
					{pagesToDisplay.length > 1 && pagesToDisplay.map(p => (
						<li className={p === selectedPage ? 'active' : ''} role="button" onClick={() => this.onPageChange(p)}>
							<span>{p}</span>
						</li>
					))}
					{pagesToDisplay[pagesToDisplay.length - 1] !== totalPages && (
						<li className={nextClass} role="button" onClick={this.handleNextPage}>
							<span>››</span>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Pagination;
Pagination.defaultProps = {
	totalCount: 0,
	pageNumberCount: 0,
	onPageChange: () => { },
};

Pagination.propTypes = {
	totalCount: PropTypes.number,
	pageNumberCount: PropTypes.number,
	onPageChange: PropTypes.func,
};
