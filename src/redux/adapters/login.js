function Login({
	token = '', user: {
		email = '', id = '', is_journalist = '', is_pr = '', url = '',
	},
}) {
	this.token = token;
	this.email = email;
	this.id = id;
	this.is_journalist = is_journalist;
	this.is_pr = is_pr;
	this.url = url;
}


export default props => new Login(props);
