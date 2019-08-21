import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

class SimpleSlider extends Component {
	render() {
		const { settings } = this.props;
		return (
			<Slider ref={(c) => { this.slider = c; return true; }} {...settings}>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		);
	}
}

// props initialization ( default values )
SimpleSlider.defaultProps = {
	settings: {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	},
};

// props type definition
SimpleSlider.propTypes = {
	settings: PropTypes.shape({
		dots: PropTypes.bool,
		infinite: PropTypes.bool,
		speed: PropTypes.number,
		slidesToShow: PropTypes.number,
		slidesToScroll: PropTypes.number,
	}),
};

export default SimpleSlider;
