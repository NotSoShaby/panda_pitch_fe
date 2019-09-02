import AutoComplete from './autocomplete';

function Profile({
	company = '',
	company_data = AutoComplete({}),
	full_name = '',
	id = '',
	interests = [],
	interests_data = [],
	linkedin_url = '',
	position = [],
	position_data = [],
	twitter_url = '',
	url = '',
	user = '',
}) {
	this.company = company;
	this.companyData = company_data;
	this.fullName = full_name;
	this.id = id;
	this.interests = interests;
	this.interestsData = interests_data;
	this.linkedinUrl = linkedin_url;
	this.position = position;
	this.positionData = position_data;
	this.url = url;
	this.twitterUrl = twitter_url;
	this.user = user;
}

export default props => new Profile(props);
