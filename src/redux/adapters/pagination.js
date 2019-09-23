function Pagination({
	count = 0,
	next = null,
	previous = '',
	results = [],
}) {
	this.count = count;
	this.next = next;
	this.previous = previous;
	this.results = results;
}

export default props => new Pagination(props);
