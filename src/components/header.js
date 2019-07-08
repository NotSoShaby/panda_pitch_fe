import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IMAGES from '../assets/images';

const { LOGO, USER, Message } = IMAGES;

const Header = ({ onLogout }) => {
	const [isOpen, setOpen] = useState(false);
	const [isNavbarOpen, setNavbarOpen] = useState(false);

	return (
		<header>
			<div className="hdr_lft">
				<div className="logo">
					<img src={LOGO} alt="logo" />
					<span className="profile_detail desktop_none">
						<div className="user_img">
							<Link to="/"><img src={USER} alt="user" /></Link>
						</div>
						<div className={`dropdown ${isOpen && 'open'}`}>
							<button className="btn cstm_dropdown dropdown-toggle" type="button" data-toggle="dropdown">
								<span>Jerry</span>
								<i className="fa fa-angle-down cstm_angle" aria-hidden="true" />
							</button>
							<ul className="dropdown-menu">
								<li>
									<Link to="/">My Profile</Link>
								</li>
								<li>
									<Link to="/">Logout</Link>
								</li>
							</ul>
						</div>
					</span>
					<i className="fa fa-bars toggle_bar" aria-hidden="true" onClick={() => setNavbarOpen(!isNavbarOpen)} />
				</div>
				<ul className={`menu ${isNavbarOpen ? 'menu_open' : 'menu_close'}`}>
					<li className="active">
						<Link to="/">Dashboard</Link>
					</li>
					<li>
						<Link to="/">
							<span>Media Manager</span>
							<i className="fa fa-caret-down" aria-hidden="true" />
						</Link>
					</li>
					<li>
						<Link to="/">Clients</Link>
					</li>
					<li>
						<Link to="/" className="new_pitch_btn">
							<span>New Pitch</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className="hdr_rgt">
				<Link to="/"><img className="msg_icn" src={Message} alt="message" /></Link>

				<span className="profile_detail">
					<div className="user_img"><Link to="/"><img src={USER} alt="user" /></Link></div>
					<div className={`dropdown ${isOpen && 'open'}`}>
						<button
							className="btn cstm_dropdown dropdown-toggle"
							type="button"
							data-toggle="dropdown"
							onClick={() => setOpen(!isOpen)}
						>
							<span>Jerry</span>
							<i className="fa fa-angle-down cstm_angle" aria-hidden="true" />
						</button>
						<ul className="dropdown-menu">
							<li>
								<Link to="/">My Profile</Link>
							</li>
							<li>
								<Link to="/" onClick={onLogout}>Logout</Link>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</header>
	);
};

Header.defaultProps = {
	onLogout: () => {},
};

// props type definition
Header.propTypes = {
	onLogout: PropTypes.func,
};

export default Header;
