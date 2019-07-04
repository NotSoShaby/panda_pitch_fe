module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: 'airbnb',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	parser: 'babel-eslint',
	plugins: [ 'react', 'jsx-a11y', 'import' ],
	rules: {
		'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
		indent: [ 2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 } ],
		'no-tabs': 0,
		'react/prop-types': 0,
		'react/jsx-indent': [ 2, 'tab' ],
		'react/jsx-indent-props': [ 2, 'tab' ],
		'no-param-reassign': [ 2, { props: false } ],
    'no-plusplus': [ 2, { allowForLoopAfterthoughts: true } ],
    'prefer-destructuring': 0,
		'jsx-a11y/label-has-for': [
			2,
			{
				required: {
					every: [ 'id' ]
				}
			}
		],
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				required: {
					some: [ 'nesting', 'id' ]
				}
			}
    ],
    "import/no-named-as-default": 0,
    "no-shadow": "off",
    "react/forbid-prop-types": 0,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/no-unescaped-entities": 0,
    "react/button-has-type": 0,
    "no-useless-escape": 0,
    "jsx-a11y/interactive-supports-focus": 0,

	}
};
