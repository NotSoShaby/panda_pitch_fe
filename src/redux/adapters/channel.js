function Channel({
	id = '',
	messages = [],
	participants = [],
	participants_data = [],
	url = '',
}) {
	this.id = id;
	this.messages = messages;
	this.participants = participants;
	this.participantsData = participants_data;
	this.url = url;
}

export default props => new Channel(props);
