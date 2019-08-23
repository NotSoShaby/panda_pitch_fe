import Profile from './profile';

function Pitch({
	availability = '',
	bad_pitch = [],
	client = '',
	client_data = Profile({}),
	content = '',
	cta = [],
	date_posted = '',
	images = [],
	is_public = false,
	not_now = [],
	owner = '',
	owner_data = Profile({}),
	personalizations = [],
	press_release = null,
	score = 0,
	status = false,
	title = '',
	topics = [],
	topics_data = [],
	url = '',
}) {
	this.availability = availability;
	this.badPitch = bad_pitch;
	this.client = client;
	this.clientData = client_data;
	this.content = content;
	this.cta = cta;
	this.datePosted = date_posted;
	this.images = images;
	this.is_public = is_public;
	this.notNow = not_now;
	this.owner = owner;
	this.ownerData = owner_data;
	this.personalizations = personalizations;
	this.pressRelease = press_release;
	this.score = score;
	this.status = status;
	this.title = title;
	this.topics = topics;
	this.topicsData = topics_data;
	this.url = url;
}

export default props => new Pitch(props);
