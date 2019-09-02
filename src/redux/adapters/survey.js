function Survey({
	categories = [],
	description = '',
	display_by_question = false,
	id = '',
	is_published = false,
	name = '',
	need_logged_user = false,
	questions = [],
	template = [],
}) {
	this.categories = categories;
	this.description = description;
	this.isPublished = is_published;
	this.displayByQuestion = display_by_question;
	this.id = id;
	this.name = name;
	this.needLoggedUser = need_logged_user;
	this.questions = questions;
	this.template = template;
}

export default props => new Survey(props);
