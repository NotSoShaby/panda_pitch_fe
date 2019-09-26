import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaList from './mediaList';
import { getMediaListAutoComplete, getMediaList } from '../../redux/actions/pitches';
import { getUserById } from '../../redux/actions/user';
// import Loader from '../../components/loader';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { mediaValue: '' };
	}

	componentDidMount() {
		const { getMediaList, mediaList } = this.props;
		if (!mediaList.code) {
			getMediaList();
		}
	}

	filterMedia = (e) => {
		const { getMediaListAutoComplete, getMediaList } = this.props;
		const value = e.target.value;
		if (value && value !== '') {
			getMediaListAutoComplete(value);
		} else {
			getMediaList();
		}
		this.setState({ mediaValue: value });
	};

	render() {
		// const { mediaList: { isLoading } } = this.props;
		return (
			// <Loader isLoading={isLoading || false}>
			<MediaList
				{...this.props}
				{...this.state}
				filterMedia={this.filterMedia}
			/>
			// </Loader>
		);
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getMediaListAutoComplete: data => getMediaListAutoComplete(data),
		getMediaList: data => getMediaList(data),
		getUserByUserId: data => getUserById(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
