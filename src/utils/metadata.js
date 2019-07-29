import IMAGES from '../assets/images';

const {
	GOOGLE, SAMSUNG, CARD_PRO, PROFILE_PIC,
} = IMAGES;

class MetaData {
	PITCHES = [
		{
			logo: GOOGLE,
			title: 'NEC and Samsung Announce 5G Partnership Agreement',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium gravida tempor. Integer vel metus augue.',
			time: '1:47 PM',
			name: 'Jeery Owen',
			score: 83,
			profile: 'Doe Communications',
			profilePic: CARD_PRO,
		},
		{
			logo: SAMSUNG,
			title: 'NEC and Samsung Announce 5G Partnership Agreement',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium gravida tempor. Integer vel metus augue.',
			time: '1:47 PM',
			name: 'Jimmy Hanson',
			score: 83,
			profile: 'New York Times',
			profilePic: PROFILE_PIC,
		},
		{
			logo: SAMSUNG,
			title: 'NEC and Samsung Announce 5G Partnership Agreement',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium gravida tempor. Integer vel metus augue.',
			time: '1:47 PM',
			name: 'Jeer Owen',
			score: 83,
			profile: 'Doe Communications',
			profilePic: CARD_PRO,
		},
	];

	CTA = [
		{ value: 'Interview', isActive: false },
		{ value: 'Coverage', isActive: false },
		{ value: 'Written Q&A', isActive: false },
		{ value: 'Byllined Article', isActive: false },
		{ value: 'Event Invite', isActive: false },
		{ value: 'News', isActive: false },
		{ value: 'Product Review', isActive: false },
	];

	TOPICS = [
		{ value: 'Travel', isActive: false },
		{ value: 'Food', isActive: false },
		{ value: 'Leisure', isActive: false },
		{ value: 'Healthcare', isActive: false },
		{ value: 'Technology', isActive: false },
	]

	PIT
}

export default new MetaData();
