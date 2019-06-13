// common methods definition
class Helper {
	// form validation service
	ValidationService = {
		messages: {},
		emailExpr: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		linkExpr: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
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
		validLink: function(field, value, param) {
			console.log('validate===1=========>', field, value, this.linkExpr.test(value));
			if (!this.linkExpr.test(value)) {
				console.log('validate=====2=======>', field, value, this.linkExpr.test(value));
				if (this.messages.hasOwnProperty(field)) {
					console.log('validate============>', this.messages, field, this.messages.hasOwnProperty(field));
					if (this.messages[field].hasOwnProperty('validLink')) {
						return this.messages[field].validLink;
					}
				}
				return 'Invalid Link';
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
	SignUpStep3Validation = ({ outlet = '', position = '', twitter = '', company = '', linkedIn = '', role = '' }) => {
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
					validLink: true,
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
			validateRule.company = {
				value: company,
				rules: {
					required: true
				}
			};
			validateRule.linkedIn = {
				value: linkedIn,
				rules: {
					validLink: true,
					required: true
				}
			};
		}
		return this.ValidationService.validate(validateRule);
	};

	// validate sign up form4
	SignUpStep4Validation = ({ topics = '' }) =>
		this.ValidationService.validate({
			topics: {
				value: topics,
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
