// common methods definition
// const _log = console.log;
// console.log = function (logMessage) {
// 	_log.apply(console, arguments);
// };

class Helper {
	// form validation service
	ValidationService = {
		messages: {},
		emailExpr: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
		linkExpr: new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
		required(field, value) {
			if (value.trim().length < 1) {
				if (Object.prototype.hasOwnProperty.call(this.messages, field)) {
					if (Object.prototype.hasOwnProperty.call(this.messages[field], 'required')) {
						return this.messages[field].required;
					}
				}
				return 'This field is required';
			}
			return false;
		},

		requiredArray(field, value) {
			if (value.length < 1) {
				if (Object.prototype.hasOwnProperty.call(this.messages, field)) {
					if (Object.prototype.hasOwnProperty.call(this.messages[field], 'requiredArray')) {
						return this.messages[field].requiredArray;
					}
				}
				return 'This field is required';
			}
			return false;
		},

		validEmail(field, value) {
			if (value !== '' && !this.emailExpr.test(value)) {
				if (Object.prototype.hasOwnProperty.call(this.messages, field)) {
					if (Object.prototype.hasOwnProperty.call(this.messages[field], 'validEmail')) {
						return this.messages[field].validEmail;
					}
				}
				return 'Invalid email';
			}
			return false;
		},

		validLink(field, value) {
			if (value !== '' && !this.linkExpr.test(value)) {
				if (Object.prototype.hasOwnProperty.call(this.messages, field)) {
					if (Object.prototype.hasOwnProperty.call(this.messages[field], 'validLink')) {
						return this.messages[field].validLink;
					}
				}
				return 'Invalid Link';
			}
			return false;
		},

		minLength(field, value, param) {
			if (value.trim()) {
				if (value.trim().length < param) {
					if (Object.prototype.hasOwnProperty.call(this.messages, field)) {
						if (Object.prototype.hasOwnProperty.call(this.messages[field], 'minLength')) {
							return this.messages[field].minLength;
						}
					}
					return `This field must be minimum ${param} characters`;
				}
			}
			return false;
		},

		validate(options, messages) {
			this.messages = messages || {};
			const errors = {};
			let error = [];
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

		check(field, value, methods) {
			return Object.keys(methods)
				.map((item) => {
					const error = this[item](field, value, methods[item]);
					return error || false;
				})
				.filter(item => item);
		},
	};

	// validate sign up form2
	SignUpStep2Validation = ({ email = '', password = '', fullName = '' }) => this.ValidationService.validate({
		fullName: {
			value: fullName,
			rules: {
				required: true,
			},
		},
		email: {
			value: email,
			rules: {
				required: true,
				validEmail: true,
			},
		},
		password: {
			value: password,
			rules: {
				required: true,
				minLength: 8,
			},
		},
	});

	// validate sign up form3
	SignUpStep3Validation = ({
		outlet = [],
		allPositions = '',
		companiesList = '',
		// isJournalist = '',
		role = '',
		twitter = '',
		linkedIn = '',
	}) => {
		const validateRule = {
			allPositions: {
				value: allPositions,
				rules: {
					requiredArray: true,
				},
			},
			twitter: {
				value: twitter,
				rules: {
					validLink: true,
				},
			},
		};
		if (role === 'Journalist') {
			validateRule.outlet = {
				value: outlet,
				rules: {
					requiredArray: true,
				},
			};
		} else {
			validateRule.companiesList = {
				value: companiesList,
				rules: {
					requiredArray: true,
				},
			};
			validateRule.linkedIn = {
				value: linkedIn,
				rules: {
					validLink: true,
				},
			};
		}
		return this.ValidationService.validate(validateRule);
		// return null;
	};

	// validate sign up form4
	SignUpStep4Validation = ({ journoInterests }) => this.ValidationService.validate({
		interests: {
			value: journoInterests,
			rules: {
				requiredArray: true,
			},
		},
	});

	loginValidation = ({ email = '', password = '' }) => this.ValidationService.validate({
		email: {
			value: email,
			rules: {
				required: true,
			},
		},
		password: {
			value: password,
			rules: {
				required: true,
				minLength: 8,
			},
		},
	});

	// return true if API status is success
	isSuccessInApi = status => status === 'SUCCESS';

	// return true if API is failed
	isErrorInApi = status => status === 'ERROR';

	// get localstorage key
	getItemFromSession = key => JSON.parse(localStorage.getItem(key));

	// return true if loggedIn user is journalist
	isJournalist = type => type === 'journalist' || type === 'Journalist';

	// return true if loggedIn user is pr
	isPr = type => (type === 'pr' || type === 'Pr');

	// return true if object is empty
	isEmptyObject = obj => Object.entries(obj).length === 0 && obj.constructor === Object;

	// return true if object is empty
	isObject = obj => ((typeof obj === 'object' || typeof obj === 'function') && (obj !== null))
}

export default new Helper();
