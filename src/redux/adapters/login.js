function Login({
	token = '', user = {
		email: '', id: '', is_journalist: '', is_pr: '', url: '',
	},
}) {
	this.token = token;
	this.email = user.email;
	this.id = user.id;
	this.isJournalist = user.is_journalist;
	// this.isPr = user.is_pr;
	this.url = user.url;
}


export default props => new Login(props);
