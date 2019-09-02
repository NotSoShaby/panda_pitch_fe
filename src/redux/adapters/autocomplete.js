function AutoComplete({
	name = '', url = '',
}) {
	this.name = name;
	this.url = url;
}

export default props => new AutoComplete(props);
