import React from 'react';
import ChatUserCard from '../../../components/chatUserCard';
import Tabs from '../../../components/Tabs';
import IMAGES from '../../../assets/images';
import { UserCardData, ChatUserTab } from '../ChatMockData';

const Sidebar = ({
	handleSearchUser, data, onChannelChange, ...props
}) => (
	<div className="msg-col-1">
		<div className="ad-pernl-conts srch_col button msg-inp-btn">
			<div className="srch_col">
				<input type="search" placeholder="Search" onChange={handleSearchUser} />
				<button type="button">
					<img className="srch_icn" src={IMAGES.SEARCH_ICON} alt="search" />
				</button>
			</div>
		</div>
		<Tabs tabData={ChatUserTab} {...props} />
		<div className="msg-crd-row tab-content">
			<div className="tab-pane fade in active" id="home">
				{data.map(channel => (
					<ChatUserCard
						key={data.id}
						data={{ ...UserCardData[0], name: channel.name }}
						onClick={() => onChannelChange(channel)}
					/>
				))}
			</div>
		</div>
	</div>
);

export default Sidebar;
