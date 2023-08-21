const charArr = [
  {
    name: 'rashid',
    bio: "”The Soaring Eagle of the Desert” that fights using parkour. With the wind as his ally, he outfoxes opponents with his high mobility. Born into nobility, he's a carefree but earnest man. Loves video streaming.",
    like: 'New stuff, movies, his friends',
    notlike: 'Fighting women and children,load times, trolls',
    height: "5'10",
    weight: '187 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'cammy',
    bio: 'Member of British special forces unit Delta Red. Distinguished herself in the operation against Shadaloo, with which she shares a fated connection. Hyper-competent but somewhat moody. Currently working at HQ.',
    like: 'Cats',
    notlike: "Everything (if she's grumpy)",
    height: "5'5",
    weight: '134 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'lily',
    bio: "A descendant of the Thunderfoot tribe, Lily speaks with the spirits of nature, trusting in their guidance as she travels the globe. Don't judge a book by its cover—her small stature conceals truly titanic power.",
    like: 'Cameras, birds of prey',
    notlike: 'Lies',
    height: "5'3",
    weight: '106 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'zangief',
    bio: 'A colossal wrestler nicknamed the Red Cyclone. Zangief is dedicated to physical improvement and instructing his students.',
    like: 'Wrestling, Cossack dancing',
    notlike: 'Projectiles (Hadokens, etc.)',
    height: "7'0",
    weight: '399 lbs',
    vitality: '11000',
    moves: []
  },
  {
    name: 'jp',
    bio: "Head of an international NGO responsible for many successful investment projects, and the man behind Nayshall's present prosperity. Has a beloved cat named Cybele.",
    like: 'Chess puzzles, cleaning, local cuisines',
    notlike: 'Stains on his clothes, sleep',
    height: "6'3",
    weight: '214 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'marisa',
    bio: 'An up-and-coming jewelry designer from Italy who claims ancestry to ancient Greek warriors. As a child, she was inspired by a vision of the Colosseum in its prime. Today, she seeks glory with a smile—and an eye for beauty.',
    like: 'Worthy opponents, ossobuco, fine arts',
    notlike: 'Heights',
    height: "6'8",
    weight: '269 lbs',
    vitality: '10500',
    moves: []
  },
  {
    name: 'manon',
    bio: "A super model and world champion judoka, Manon is an idealist, forever seeking self-improvement in the pursuit of beauty. She struts the catwalk of street fighting to become the world's strongest model.",
    like: 'The color gold, cosmetics, her family',
    notlike: 'Crowds, chatterboxes',
    height: "5'9",
    weight: '129 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'deejay',
    bio: 'A globally popular dance music superstar, Dee Jay is always ready to have a good time. With a burning love for music and fighting, this Jamaican sensation drives audiences wild with hot new songs and stylish moves.',
    like: 'Singing, dancing, hollering',
    notlike: 'Silence',
    height: "6'0",
    weight: '203 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'ehonda',
    bio: 'A sumo wrestler looking to bring the sport worldwide, E. Honda has the skills of a yokozuna, but his constant globetrotting has prevented his promotion. Also an expert chef renowned for mouthwatering chanko stew.',
    like: 'Baths',
    notlike: 'Indecisiveness',
    height: "6'1",
    weight: '302 lbs',
    vitality: '10500',
    moves: []
  },
  {
    name: 'dhalsim',
    bio: 'A monk and yoga master from India who has served as a guide for countless suffering souls. Prefers to avoid conflict when possible, but his innate hatred of evil compels him to dispense stern justice.',
    like: 'Meditating',
    notlike: 'Distractions, harming others',
    height: "5'9 (can vary)",
    weight: '106 lbs (can vary)',
    vitality: '10000',
    moves: []
  },
  {
    name: 'blanka',
    bio: 'A kindhearted defender of nature, Blanka has become an adventure tour guide, confident his intimate knowledge of the jungle will serve as a springboard to fame—and a comfortable life for his beloved mother.',
    like: 'Samantha, Blanka-chan dolls',
    notlike: 'Army ants',
    height: "6'4",
    weight: '216 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'ken',
    bio: 'Former US National Fighting Champ, and ex-VP of the Masters Foundation. Accusations of orchestrating a criminal plot have forced Ken to abandon his family and business and go into hiding.',
    like: 'Family',
    notlike: 'Pointless meetings',
    height: "5'9",
    weight: '183 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'juri',
    bio: 'This sadistic thrillseeker enjoys the strife and suffering of others, taking immense joy in obliterating her foes. Without revenge against M. Bison as a motivator, she whiles away her time in a gloomy haze.',
    like: 'Motorcycles, spiders',
    notlike: 'Buzzkills, rules',
    height: "5'5",
    weight: '126 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'kimberly',
    bio: "Uninvited student to Guy, the 39th successor to Bushinryu. Kimberly had an ordinary upbringing, but she's a genuine prodigy who graduated college early...and now wants to be a ninja. Loves '80s pop culture.",
    like: "80's music, sneakers, large numbers",
    notlike: 'Tear-jerker movies',
    height: "5'6",
    weight: '134 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'guile',
    bio: 'A US Air Force pilot who fights for his country, Guile succeeded in dismantling Shadaloo and avenging his friend Charlie. He enjoys living the family man life, but new battlefields await him.',
    like: 'Watching sports, dog walking',
    notlike: 'Secretive people, layabouts',
    height: "6'0",
    weight: '218 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'chunli',
    bio: 'A former high-kicking ICPO agent, Chun-Li looks after Li-Fen, a victim of the Black Moon Incident. With Shadaloo sundered, she now runs kung fu classes, and has become a well-loved member of the local community.',
    like: 'Days off, shopping with Li-Fen',
    notlike: 'Crime, indecisiveness',
    height: "5'7",
    weight: 'Secret♡',
    vitality: '10000',
    moves: []
  },
  {
    name: 'jamie',
    bio: 'This self-styled Chinatown peacekeeper aspires to the example set by Yun and Yang, the Twin Dragons. An expert dancer, Jamie places justice and friendship above all else, defending his town with martial skill.',
    like: 'Yun, Yang, dancing, his grandmother',
    notlike: 'Getting lectured, arrogance',
    height: "5'9",
    weight: '170 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'luke',
    bio: 'A contractor for a PMC, Luke uses his elite military background to teach mixed martial arts. His days off are spent eating junk food, playing video games, and fighting, but make no mistake—Luke plays to win.',
    like: 'Travelling, PC games, wacky T-shirts',
    notlike: 'Horror games',
    height: "6'1",
    weight: '198 lbs',
    vitality: '10000',
    moves: []
  },
  {
    name: 'ryu',
    bio: 'Ever training, this martial artist seeks true strength. Well-mannered and sincere, Ryu travels the globe in search of worthy opponents. Having overcome the Satsui no Hado, he now seeks yet greater heights.',
    like: 'Martial arts',
    notlike: 'Spiders',
    height: "5'9",
    weight: '187 lbs',
    vitality: '10000',
    moves: []
  }
]

export { charArr };