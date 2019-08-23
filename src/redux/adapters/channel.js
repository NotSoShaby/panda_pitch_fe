function Channel({
	id = '',
	messages = [],
	participants = [],
	url = '',
}) {
	this.id = id;
	this.messages = messages;
	this.participants = participants;
	this.url = url;
}

export default props => new Channel(props);
