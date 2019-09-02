function Media({
	journalists = [],
	journalists_data = [],
	name = '',
	owner_id = [],
	slug = '',
	time_created = '',
}) {
	this.journalists = journalists;
	this.journalistsData = journalists_data;
	this.name = name;
	this.ownerId = owner_id;
	this.slug = slug;
	this.timeCreated = time_created;
}

export default props => new Media(props);
