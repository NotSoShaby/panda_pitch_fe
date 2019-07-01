import React from 'react'
import PropTypes from 'prop-types';
import IMAGES from '../assets/images';

const { GOOGLE, CARD_PRO } = IMAGES;

const ListRow = ({ logo, title, time, description, profilePic, name, profile }) => {
  return (
    <div className="list_col">
      <div className="list_lft">
        <img src={logo}/>
      </div>
      <div className="list_middle">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span className="list_cover">Covrage</span> <span className="list_time">{time}</span></p>
      </div>
      <div className="list_rgt">
        <div className="list_rgt_pro">
          <img src={profilePic}/>
        </div>
        <div className="list_rgt_cont">
          <h4>{name}</h4>
          <p>{profile}</p>
        </div>
      </div>
    </div>
  )
}

// props initialization ( default values )
ListRow.defaultProps = {
  logo: GOOGLE,
	profilePic: CARD_PRO,
};

// props type definition
ListRow.propTypes = {
	logo: PropTypes.string,
	title: PropTypes.string,
	time: PropTypes.string,
	description: PropTypes.string,
	profilePic: PropTypes.string,
	name: PropTypes.string,
	profile: PropTypes.string,
};

// default importing
export default ListRow
