var AchtungCthulhu_PlotData = {
	'antagonist': {
		'label': 'Antagonists',
		'group': [ 'individual', 'description', 'group' ]
	},
	'plot': {
		'label': 'Plots',
		'group': [ 'concept', 'motivation', 'needs', 'obstacle', 'twist' ]
	},
	'character': {
		'label': 'The Characters',
		'group': [ 'hook', 'group', 'involvement', 'objective' ]
	},
	'artefacts': {
		'group': [ 'artefact', 'condition' ]
	},
	'mysteriousfromwhere': {
		'group': [ 'mysterious', 'fromwhere' ]
	},
	'locations': {
		'group': [ 'region', 'location', 'atmosphere' ]
	},
	'mythosrelated': {
		'group': [ 'extraterrestrial', 'local' ]
	},
	'individual': {
		'label': 'Antagonist (Individual)',
		'roll': [
			'A scientist',
			'An aristocrat',
			'A leader',
			'A cult',
			'A politician',
			'The subject of an experiment',
			'A gang',
			'An organisation',
			'A military unit',
			'Black Sun',
			'Nachtwölfe',
			'A priest',
			'Villagers',
			'An officer',
			'Royalty',
			['A Mythos creature (see Opponent Objective)', 'subroll', 'mythos'],
			'An Elder Race',
			'An Outer God',
			'An Elder God',
			'Cthulhu'
		]
	},
	'description': {
		'label': 'Antagonist Description',
		'roll': [
			'Old',
			'Ancient',
			'Rich',
			'Evil',
			'Cursed',
			'Corrupt',
			'Doomed',
			'Magical',
			'Secret',
			'Unstable',
			'Mysterious',
			'Deranged',
			'Delusional',
			'Rogue',
			'Tortured',
			'Nazi',
			'Psychopathic',
			'Malicious',
			'Unspeakable',
			[ 'Appears to be', 'appear' ]
		]
	},
	'group': {
		'label': 'Antagonist (Group)',
		'roll': [
			'Brotherhood of the Beast (Nyarlathotep cults)',
			'Brotherhood of the Beast (Nyarlathotep cults)',
			'New World Industries (Nyarlathotep cults)',
			'New World Industries (Nyarlathotep cults)',
			'Brotherhood of the Black Pharaoh (Nyarlathotep cults)',
			'Brotherhood of the Black Pharaoh (Nyarlathotep cults)',
			'Cult of the Bloody Tongue (Nyarlathotep cults)',
			'Cult of the Bloody Tongue (Nyarlathotep cults)',
			'Tribes of the Tcho-Tcho',
			'Tribes of the Tcho-Tcho',
			'Brothers of the Yellow Sign',
			'Brothers of the Yellow Sign',
			'Starry Wisdom Cult (Nyarlathotep cults)',
			'Starry Wisdom Cult (Nyarlathotep cults)',
			'Miskatonic University',
			'Miskatonic University',
			'Nachtwölfe',
			'Nachtwölfe',
			'Black Sun',
			'Black Sun'
		]
	},

	'concept': {
		'label': 'Plot Concept',
		'roll': [
			'Open a gateway for a Mythos creature to come through',
			'Open a gateway to travel to a Mythos location',
			'Unleash the power of a Mythos creature',
			'Destroy a place, a group, or a creature',
			'Prove the existence of a creature or entity',
			'Summon a Mythos entity for the purpose of...',
			'Learn more about a greater power',
			'Experiment on a group of people or creatures',
			'Protect someone or something',
			'Control someone or something',
			'Steal secrets from someone',
			'Force the enemy back into retreat',
			'Gain superiority over the enemy',
			'Force a breakthrough',
			'Take revenge for a previous event',
			'Cover up a secret',
			'Recover a Mythos artefact',
			'Recover an entity or person/people',
			'Hide something',
			'Destroy something'
		]
	},
	'motivation': {
		'label': 'Motivation',
		'roll': [
			'For revenge',
			'Following orders',
			'Pure hatred',
			'Simple greed',
			'For country',
			'For honour and glory',
			'Forbidden knowledge',
			'Superiority',
			'Pure evil',
			'A blood feud',
			'Being controlled',
			'To divert attention',
			'Because of visions',
			'Delusional',
			'Self-defence',
			'A debt',
			'To cover a mistake',
			'To protect',
			'Beliefs',
			'Simply unspeakable!'
		]
	},
	'needs': {
		'label': 'To be Successful, the Antagonist Needs',
		'roll': [
			'Willing sacrificial victims',
			'Unwilling sacrificial victims',
			'Humans to experiment on',
			'A piece of art',
			'A ley line',
			'An invention',
			['Some particular knowledge (see Knowledge Objective)', 'subroll', 'knowledge'],
			['A location (see Location Choices)', 'subroll', 'locations'],
			'A tome',
			'A stone circle',
			'A strange contraption',
			'A specific ancient site',
			'Some ancient crystals',
			'A long-lost spell',
			'A certain alignment of planets',
			'A certain alignment of stars',
			'A certain Mythos artefact',
			'The body part of a Mythos creature',
			'The presence of an Outer God',
			'The presence of an Elder God'
		]
	},
	'obstacle': {
		'label': 'Obstacles',
		'roll': [
			'Time is short',
			'The distance is great (this world, the Dreamlands, or another Mythos world)',
			'There are distractions along the way (side missions, people in need, opportunities)',
			'Knowledge is required (e.g. where to find something, specific research, people to ask)',
			'Physical difficulties or harsh environment (mountains, underground, desert, polar, oceans)',
			'Another group or entity is also on the trail',
			'It is guarded by a powerful force',
			'They must take a problematical thing with them (e.g. something fragile, a person, a prisoner)',
			'Nature is closing in (volcanoes, storms, earthquakes, floods)',
			'War-torn (must traverse frontlines or battlefields)',
			'A Mythos group interferes (roll on the Method table)',
			'Resources (spoiled, faulty, destroyed, stolen; food, transport, equipment)',
			'Hard bargain (i.e. they must give something up to progress)',
			'Moral dilemma (connection to antagonists, uncomfortable partners, better offer)',
			'Unrest (riots, scavengers in the ruins)',
			'Corruption (a member of the group is bribed, an official wants money, double-cross, traitor)',
			'Misinformation',
			'Problems with the authorities (members arrested, border permits required)',
			'Strange illness',
			'Ambushed'
		]
	},
	'twist': {
		'label': 'Plot Twist',
		'roll': [
			'They must make a sacrifice (one or more members of the group)',
			'It is an experiment (a group or entity was testing them)',
			'It’s a trap! (They are the missing ingredient or motivator)',
			'No-one leaves alive',
			'The antagonist is part of the group',
			'The antagonist is not who they thought it was; someone or something else is behind it all (roll another antagonist who is really in charge)',
			'They thought there was just one to deal with, but they were wrong...',
			'Wait – you know him? (A family or previous connection)',
			'There’s a traitor in their midst, working for another group',
			'A lot of good people die (the Pyrrhic victory)',
			'The antagonist makes them an offer they cannot refuse (e.g. “let me go and the Nazi attack fails, saving thousands of lives”)',
			'The essential person or item they had to bring along is key to the antagonist’s plot, and they just delivered exactly what he wanted straight to his door',
			'Moral dilemma – they have to become the villain to achieve their goal',
			'The villain(s) in question were coerced as a cover for the true villain (roll another antagonist)',
			'The villain has already achieved their objective (the group watches helplessly as events unfold around them, or learn that they have arrived too late)',
			'The villain was trying to prevent a greater evil. Will the group let him finish, or will they stop him?',
			'A key character is killed, only to be found safe and well later (can be tied to the experiment outcome on 2)',
			'The investigators are the villains, and the antagonist was only trying to stop them',
			'It is not what they think it is (roll another plot concept)',
			['Escalation', 'twice']
		]
	},

	'hook': {
		'label': 'Plot Hook',
		'roll': [
			'A friend',
			'A prisoner of war',
			'A mystery letter',
			'A last will and testament',
			'An advert or article in the paper',
			'A professor',
			'A mystery woman',
			'A sinister man',
			'A clerical error',
			'An item in an auction',
			'An aristocrat',
			'A wealthy individual',
			'Stumble upon an event or strange location',
			'An old colleague',
			'A telegram',
			'Another antagonist',
			'An accident',
			'A mysterious telephone call',
			'A member of a secret organisation',
			'An enemy'
		]
	},
	'involvement': {
		'label': 'Involvement Method',
		'roll': [
			'Delivered orders',
			'Sent an invitation',
			'Provided with travel documents or directions',
			'Given an ancient map',
			'Offered a fortune',
			'Asked for help',
			'Blackmail',
			'Driven into a hard bargain',
			'Framed for a crime or treasonous act',
			'Threatened',
			['Someone important to them is missing, is insane, or has been murdered (Person Objective)', 'subroll', 'person'],
			'Want revenge',
			'Offered a contract for their services',
			['Offered an artefact (Artefact Objective)', 'subroll', 'artefacts'],
			['Offered forbidden knowledge (Knowledge Objective)', 'subroll', 'knowledge'],
			'Sent a warning',
			'A debt is called in',
			'Family in need',
			'Your country needs you!',
			['Offered details on another antagonist (Antagonist Table)', 'subroll', 'antagonist']
		]
	},
	'mission': {
		'label': 'Character Mission',
		'roll': [
			'Explore',
			'Recover',
			'Attack',
			'Destroy',
			'Protect',
			'Deliver',
			'Capture',
			'Find/locate',
			'Negotiate',
			'Reconnoitre',
			'Divert',
			'Distract',
			'Expose',
			'Hide',
			'Understand',
			'Prove',
			'Disprove',
			'Steal',
			'Insert',
			'Rescue'
		]
	},
	'objective': {
		'label': 'Mission Objective',
		'roll': [
			['An ally (Person Objective)', 'subroll', 'person'],
			['An enemy (Antagonist Table)', 'subroll', 'antagonist'],
			['Identity of a person (Antagonist Table)', 'subroll', 'antagonist'],
			['A Mythos opponent (Opponent Objective)', 'subroll', 'mythos'],
			['A Mythos opponent (Opponent Objective)', 'subroll', 'mythos'],
			['Documents (Knowledge Objective)', 'subroll', 'knowledge'],
			['Documents (Knowledge Objective)', 'subroll', 'knowledge'],
			['An artefact (Artefact Objective Table)', 'subroll', 'artefacts'],
			['An artefact (Artefact Objective Table)', 'subroll', 'artefacts'],
			['A physical location (Location Choice and appropriate sub-table)', 'subroll', 'locations'],
			['A physical location (Location Choice and appropriate sub-table)', 'subroll', 'locations'],
			['An ancient map to... (Mysterious Location Objective and From/Where)', 'subroll', 'mysteriousfromwhere'],
			['An ancient map to... (Mysterious Location Objective and From/Where)', 'subroll', 'mysteriousfromwhere'],
			['A Mythos creature’s body part (Opponent Objective)', 'subroll', 'mythos'],
			['A Mythos creature’s body part (Opponent Objective)', 'subroll', 'mythos'],
			'The current antagonist',
			'The current antagonist',
			['A military unit', 'subroll', 'militaryobjective'],
			['A military unit', 'subroll', 'militaryobjective'],
			'A secret organisation'
		]
	},

	'artefact': {
		'label': 'Artefact',
		'roll': [
			'Scroll',
			'Book',
			'Key',
			'Statue',
			'Rare plant or flower',
			'Ancient technological device',
			'Crystal',
			'Drug',
			'Strange life-form',
			'Ore or resource',
			'Prototype',
			'Priceless art',
			'Religious icon',
			'Extra-dimensional object',
			'Mythos artefact',
			'Heirloom',
			'Evidence',
			'Photographs',
			'Weapon',
			'Technological item'
		]
	},
	'condition': {
		'label': 'Artefact State/Condition',
		'roll': [
			'Corrupt',
			'Magical',
			'Priceless',
			'Doomed',
			'Cursed',
			'Secret',
			'Ancient',
			'Alive',
			'Evil',
			'Broken',
			'Locked',
			'Out of power',
			'Buried',
			'Unstable',
			'Fragile',
			'Ever-changing',
			'Holy',
			'Radioactive',
			'Mythos',
			['Appears to be', 'appear' ]
		]
	},

	'knowledge': {
		'label': 'Knowledge Objectives',
		'roll': [
			'Schematics (weapon, base, ship, plane, vehicle)',
			'Technology/scientific discovery',
			'A strange illness',
			'A weakness',
			'An ancient secret',
			'Escape route',
			'Conspiracy',
			'Chemical formula',
			'Criminal activity',
			'A spy ring',
			'A legend',
			'An artefact',
			'A state secret',
			'A language',
			'A tome',
			'A theory',
			'A traitor',
			'What happened?',
			'What’s there?',
			'Resources'
		]
	},
	'militaryobjective': {
		'label': 'Military',
		'roll': [
			'Pathfinder',
			'Invade',
			'Liberate',
			'Infiltrate',
			'Defend',
			'Ambush',
			'Evacuate',
			'Rescue',
			'Attack',
			'Seek and destroy',
			'Scout/recon',
			'Support',
			'Patrol',
			'Take and hold',
			'Breakthrough',
			'Pre-emptive strike',
			'Hold the line',
			'Rearguard',
			'Resupply',
			'Field test'
		]
	},
	'person': {
		'label': 'Person',
		'roll': [
			'Civilian',
			'Policeman',
			'Soldier',
			'Pilot',
			'Sailor',
			'Fugitive',
			'Criminal',
			'Spy',
			'Refugee',
			'Crashed pilot',
			'Priest',
			'Scientist',
			'Militia',
			'Politician',
			'Actor/singer',
			'Archaeologist',
			'Heir/heiress',
			'Blackmarketeer',
			'Madman',
			['Wounded... ', 'twice']
		]
	},

	'fromwhere': {
		'label': 'From/Where',
		'roll': [
			'France',
			'Germany',
			'Britain',
			'United States of America',
			'South America',
			'Spain',
			'Italy',
			'North Africa',
			'Middle East',
			'Soviet Union',
			'Scandinavia',
			'The Low Countries (Belgium, the Netherlands, Luxembourg)',
			'Canada',
			'Pacific',
			'China',
			'Japan',
			'Asia (other)',
			'Commonwealth',
			'Australia',
			'New Zealand'
		]
	},
	'mythos': {
		'label': 'Mythos Opponent',
		'roll': [
			'Deep One',
			'Mi-go',
			'Nightgaunt',
			'Colour out of Space',
			'Servitor of Nyarlathotep',
			'Great Old One (choose appropriate)',
			'Cultist of the Old Gods',
			'Chthonian',
			'Hound of Tindalos',
			'Elder Thing',
			'Bloodborn',
			'Ghouls',
			'Dholes',
			'Race of Yith (Yithians)',
			'Leng spider',
			'Lloigor',
			'Serpent people',
			'Moonbeast',
			'Insects from Shaggai',
			'Being from Xiclotl'
		]
	},

	'region': {
		'label': 'Mission Region',
		'roll': [
			'Western Front',
			'Western Front',
			'Eastern Front',
			'Eastern Front',
			'Pacific Front',
			'Pacific Front',
			'North African Front',
			'North African Front',
			'Middle East',
			'Middle East',
			'American home front',
			'American home front',
			'British home front',
			'British home front',
			'Occupied France',
			'Occupied France',
			'Germany',
			'Germany',
			'Other occupied territories',
			'Other occupied territories'
		]
	},
	'location': {
		'label': 'Location Choice',
		'roll': [
			['Building', 'subroll', 'building'],
			['Building', 'subroll', 'building'],
			['Building', 'subroll', 'building'],
			['Building', 'subroll', 'building'],
			['Building', 'subroll', 'building'],
			['Countryside', 'subroll', 'countryside'],
			['Countryside', 'subroll', 'countryside'],
			['Countryside', 'subroll', 'countryside'],
			['Mysterious', 'subroll', 'mysterious'],
			['Mysterious', 'subroll', 'mysterious'],
			['Mysterious', 'subroll', 'mysterious'],
			['Mysterious', 'subroll', 'mysterious'],
			['Mysterious', 'subroll', 'mysterious'],
			['Sea', 'subroll', 'sea'],
			['Sea', 'subroll', 'sea'],
			['Sea', 'subroll', 'sea'],
			['Military', 'subroll', 'military'],
			['Military', 'subroll', 'military'],
			['Mythos', 'subroll', 'mythosrelated'],
			['Mythos', 'subroll', 'mythosrelated']
		]
	},
	'atmosphere': {
		'label': 'Location Atmosphere',
		'roll': [
			'Derelict',
			'Ruined',
			'Peaceful',
			'Abandoned',
			'Windswept',
			'Dreadful',
			'Overgrown',
			'Submerged',
			'Ancient',
			'Impossible',
			'Perched',
			'Mountain-top',
			'Cliff-top',
			'Flooded',
			'Underground',
			'Remote',
			'Ominous',
			'Dripping',
			'Frozen',
			'Too quiet'
		]
	},
	'building': {
		'label': 'Building Type',
		'roll': [
			'Town',
			'Village',
			'Monastery',
			'Factory',
			'Laboratory',
			'Prison',
			'Chemical plant',
			'Casino',
			'Palace',
			'Library',
			'Hospital',
			'University',
			'Church',
			'Mansion',
			'Museum',
			'Train station',
			'Hotel',
			'Government building',
			'Sanatorium',
			'Department store'
		]
	},
	'countryside': {
		'label': 'Countryside',
		'roll': [
			'Old battlefield',
			'Cavern',
			'Plantation',
			'Mine head',
			'Settlement',
			'River',
			'Desert',
			'Glacier',
			'Swamp',
			'Coastline',
			'Canyon',
			'Lake',
			'Forest/jungle',
			'Mine',
			'Farm',
			'Fields',
			'Hills',
			'Mountains',
			'Delta',
			'Snowfields'
		]
	},
	'mysterious': {
		'label': 'Mysterious',
		'roll': [
			'Castle',
			'Temple',
			'Stone circle',
			'Church',
			'Mansion',
			'Cemetery',
			'Cave system',
			'Tomb',
			'Archaeological excavation',
			'Ruins',
			'Mine',
			'Sanatorium',
			'Monastery',
			'Museum',
			'Swamp',
			'Outpost',
			'Battlefield',
			'Gateway',
			'Island',
			'Monolith'
		]
	},
	'military': {
		'label': 'Military',
		'roll': [
			'Headquarters building',
			'Military base',
			'Battlefield',
			'Supply dump',
			'Wewelsburg Castle',
			'Wewelsburg II',
			'Bunker system',
			'Frontlines',
			'Trench system',
			'Eagle’s Lair',
			'Wolf’s Lair',
			'Arms factory',
			'Weapon testing laboratory',
			'Radar installation',
			'Launch facility',
			'Airfield',
			'Naval base',
			'Submarine base',
			'Path of advance',
			'Convoy'
		]
	},
	'sea': {
		'label': 'Sea',
		'roll': [
			'Shipyard',
			'Cargo ship',
			'Warship',
			'Underwater ruins',
			'Deep sea ridge',
			'Submerged wreck',
			'Underwater base',
			'Lost island',
			'Floating base',
			'Ocean Liner',
			'Open sea',
			'Coastal waters',
			'Coast',
			'Port',
			'Underwater caverns',
			'Beached wreck',
			'Deep sea trench',
			'Island chain',
			'Sinking island',
			'Fleet'
		]
	},
	'extraterrestrial': {
		'label': 'Extra-terrestrial',
		'roll': [
			'Dreamlands',
			'Azathoth’s Court',
			'Aldebaran',
			'Yuggoth',
			'Xiclotl',
			'N’Kai',
			'Formalhaut',
			'Leng',
			'Abbith',
			'Celaeno',
			'Korvaz',
			'Betlegeuse/Glyu-Ohu',
			'Ktyanga',
			'Kythanil',
			'Uranus/L’gy’hx',
			'Rigel/Orion',
			'Elder Race colony (working)',
			'Elder Race colony (abandoned)',
			'Mythos-conquered world',
			'Mythos-ruined world'
		]
	},
	'local': {
		'label': 'Local',
		'roll': [
			'Carcosa',
			'Carcosa',
			'Arkham',
			'Arkham',
			'Deep One city (Y’ha-thlei, Massachusetts; Ponape, western Pacific)',
			'Deep One city (Y’ha-thlei, Massachusetts; Ponape, western Pacific)',
			'Elder Thing city',
			'Elder Thing city',
			'G’harne (North Africa)',
			'G’harne (North Africa)',
			'Irem, City of Pillars/The Nameless City (Arabia)',
			'Irem, City of Pillars/The Nameless City (Arabia)',
			'Kingsport',
			'Kingsport',
			'Plateau of T’sang/Sung',
			'Plateau of T’sang/Sung',
			'Severn Valley',
			'Severn Valley',
			'Innsmouth',
			'Innsmouth'
		]
	}
};
