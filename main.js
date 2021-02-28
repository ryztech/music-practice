const courseContent = {
    patterns:
    {
        handy: [
            'Straight beat gospel style',
            'Half beat bounce',
            'Split chord (and 7ths)',
            'Bossa Nova Bounce'
        ],
        other: [
            'left note / right chord',
            'oom pah',
            '12/8 country shuffle',
            'Twist',
            'Twist-2',
            '3 beat bounce'
        ],
        blues: [
            'straight eight boogie (alternating)',
            'straight eight boogie (constant)',
            'blueberry hill',
            '12/8 boogie shuffle',
            'blues brothers'
        ]
    },
    balladStyle: {
        pieces: [
            '\'mixing it all together\'',
            'auld lang syne'
        ],
        improvisation: [
            'improvisation practice in Am',
            'improvisation practice in Dm'
        ]
    }
}

const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
const progressions = [
    { numerals: 'I - IV - V', exampleSongs: ['Good Riddance'] },
    { numerals: 'I – V – vi – IV', exampleSongs: ['Let It Be', 'Torn'] },
    { numerals: 'ii – V – I', exampleSongs: ['Sunday Morning'] },
    { numerals: 'I – V – vi – iii – IV – I – IV – V', exampleSongs: ['Firework', 'Under The Bridge'] },
    { numerals: 'I - vi - ii - V', exampleSongs: ['foo'] },
    { numerals: 'I - vi - IV - V', exampleSongs: ['Stand By Me', 'Every Breath You Take', 'Perfect'] },
];
const inversionStartingPoints = ['root', 'middle', 'backwards']
const forwardsBackwards = ['forwards', 'backwards']
const repertoire = [
    'Angel of Small Death',
    'Lean on Me',
    'Ain\'t No Sunshine'
]

let fullSessionText = ''

const line = (text) => fullSessionText += (fullSessionText === '' ? (`${text}`) : (`\n\n${text}`))
const r = (list) => list[Math.floor(Math.random() * list.length)]
const rs = (list) => list.splice(Math.floor(Math.random() * list.length), 1)
const lineRandomly = (oneInX, text) => { if (Math.floor(Math.random() * oneInX) + 1 === oneInX) line(`${text}`) }

line('#####################')
lineRandomly(5, 'Song: Broken Chord Ballad')
line(`Pattern style: ${r(courseContent.patterns.handy)}, in ${rs(keys)}, with progression ${rs(progressions)[0].numerals}`)
line(`Pattern style: ${r(courseContent.patterns.other)}, in ${rs(keys)}, with progression ${rs(progressions)[0].numerals}`)
line(`Blues: ${r(courseContent.patterns.blues)}, in ${rs(keys)}`)
line(`Inversions: starting with ${r(inversionStartingPoints)}, ${r(forwardsBackwards)}`)
lineRandomly(3, 'Theory flashcards')
line(`Repertoire practice: ${r(repertoire)}`)
line('#####################')
line(`Ballad practice: L pattern, L progression, R theme, R variation`)
line('#####################')

console.log(fullSessionText);