// common methods definition
class Helper {
	// form validation service
	ValidationService = {
		messages: {},
		emailExpr: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		required: function(field, value, param) {
			if (value.trim().length < 1) {
				if (this.messages.hasOwnProperty(field)) {
					if (this.messages[field].hasOwnProperty('required')) {
						return this.messages[field].required;
					}
				}
				return 'This field is required';
			}
			return false;
		},
		validEmail: function(field, value, param) {
			if (!this.emailExpr.test(value)) {
				if (this.messages.hasOwnProperty(field)) {
					if (this.messages[field].hasOwnProperty('validEmail')) {
						return this.messages[field].validEmail;
					}
				}
				return 'Invalid email';
			}
			return false;
		},
		minLength: function(field, value, param) {
			if (value.trim()) {
				if (value.trim().length < param) {
					if (this.messages.hasOwnProperty(field)) {
						if (this.messages[field].hasOwnProperty('minLength')) {
							return this.messages[field].minLength;
						}
					}
					return `This field must be minimum ${param} characters`;
				}
			}
			return false;
		},
		validate: function(options, messages) {
			this.messages = messages ? messages : {};
			var errors = {},
				error = [];
			if (options.type === 'email') {
				options.validEmail = true;
			}
			Object.keys(options).forEach((field) => {
				error = this.check(field, options[field].value, options[field].rules);
				if (error.length > 0) {
					errors[field] = error;
				}
			});

			return Object.keys(errors).length < 1 ? null : errors;
		},

		check: function(field, value, methods) {
			return Object.keys(methods)
				.map((item) => {
					var error = this[item](field, value, methods[item]);
					return error ? error : false;
				})
				.filter((item) => {
					return item;
				});
		}
	};

	// validate sign up form2
	SignUpStep2Validation = ({ email = '', password = '', fullName = '' }) =>
		this.ValidationService.validate({
			fullName: {
				value: fullName,
				rules: {
					required: true
				}
			},
			email: {
				value: email,
				rules: {
					required: true,
					validEmail: true
				}
			},
			password: {
				value: password,
				rules: {
					required: true,
					minLength: 8
				}
			}
		});

	// validate sign up form3
	SignUpStep3Validation = ({
		outlet = '',
		position = '',
		twitter = '',
		companyName = '',
		linkedIn = '',
		role = ''
	}) => {
		let validateRule = {
			position: {
				value: position,
				rules: {
					required: true
				}
			},
			twitter: {
				value: twitter,
				rules: {
					required: true
				}
			}
		};
		if (this.isJournalist(role))
			validateRule.outlet = {
				value: outlet,
				rules: {
					required: true
				}
			};
		else {
			validateRule.companyName = {
				value: companyName,
				rules: {
					required: true
				}
			};
			validateRule.linkedIn = {
				value: linkedIn,
				rules: {
					required: true
				}
			};
		}
		return this.ValidationService.validate(validateRule);
	};

	// validate sign up form4
	SignUpStep4Validation = ({ topic = '' }) =>
		this.ValidationService.validate({
			topic: {
				value: topic,
				rules: {
					required: true
				}
			}
		});

	isSuccessInApi = (status) => status === 'SUCCESS';

	isErrorInApi = (status) => status === 'ERROR';

	getItemFromSession = (key) => JSON.parse(localStorage.getItem(key));

	isJournalist = (type) => type === 'journalist';

	isPr = (type) => type === 'pr';
}

export default new Helper();
