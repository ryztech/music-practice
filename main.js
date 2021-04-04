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
const allPatterns = [...courseContent.patterns.handy, ...courseContent.patterns.other, ...courseContent.patterns.blues];
const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
const progressions = [
    { chords: 'I - III - vi - V', exampleSongs: ['Billionaire'] },
    { chords: 'I - IV - I - V', exampleSongs: ['Lean On Me'] },
    { chords: 'I - IV - V', exampleSongs: ['Good Riddance', 'Three Little Birds'] },
    { chords: 'I – V – vi – IV', exampleSongs: ['Let It Be', 'Torn', 'I\'m yours', 'Jar of Hearts', 'Wherever You Will Go', 'Run (chorus)', 'Can You Feel The Love Tonight', 'Where Is The Love?', 'She Will Be Loved', 'Hide And Seek', 'Paparazzi', 'Someone Like You', 'Ai Se Eu Te Pego', 'Demons'] },
    { chords: 'I - V7 - IV - I', exampleSongs: ['Lava Song'] },
    { chords: 'I - vi', exampleSongs: ['Hallelujah (intro)'] },
    { chords: 'I - vi - IV - V', exampleSongs: ['Stand By Me', 'Every Breath You Take', 'Perfect'] },
    { chords: 'I - VII - IV - I', exampleSongs: ['Teardrop'] },
    { chords: 'I - VII - IV - I', exampleSongs: ['Addicted To Love'] },
    { chords: 'i - III - iv - VI - V', exampleSongs: ['Too Close'] },
    { chords: 'i - III - VII', exampleSongs: ['Closer'] },
    { chords: 'i - V', exampleSongs: ['Hej Sokoly verse', 'Czerwone Jabluszko verse', 'Angel of small death first part'] },
    { chords: 'i - v - VII', exampleSongs: ['Ain\'t No Sunshine'] },
    { chords: 'i - VI - VII', exampleSongs: ['Kryptonite'] },
    { chords: 'i - VI - V', exampleSongs: ['Believer'] },
    { chords: 'i - VI - III', exampleSongs: ['Wake Me Up'] },
    { chords: 'i - VII - IV', exampleSongs: ['Wicked Game'] },
    { chords: 'i - VII - iv', exampleSongs: ['I Need a Dollar'] },
    { chords: 'ii – V – I', exampleSongs: ['Sunday Morning'] },
    { chords: 'III - VII - i - V', exampleSongs: ['Hej Sokoly chorus', 'Czerwone Jabluszko chorus'] },
    { chords: 'vi – IV – I - V', exampleSongs: ['Zombie', 'Save Tonight', 'Complicated', 'Numb', 'Grenade', 'Say Something', 'All of Me'] },
    { chords: 'IV – I - V - vi', exampleSongs: ['Let Her Go'] },
];
const otherProgressions = [
    { chords: 'I – V – vi – iii – IV – I – IV – V', exampleSongs: ['?'] }
]
const inversionStartingPoints = ['root', 'middle', 'backwards']
const majorMinor = ['major', 'minor']
const blackWhite = ['black', 'white']
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
lineRandomly(3, 'Theory flashcards')
line(`Course patterns: ${r(allPatterns)}, in ${rs(keys)}`)
line(`Inversions: ${r(inversionStartingPoints)}, starting ${r(majorMinor)}, ${r(blackWhite)} keys`)
line(`Repertoire practice: ${r(repertoire)}`)
line('#####################')
const randomProgression = r(progressions)
line(`Progression: ${randomProgression.chords} in ${rs(keys)}`)
line(`e.g. ${r(randomProgression.exampleSongs)}`)
line('#####################')

// lineRandomly(5, 'Song: Broken Chord Ballad')
// line(`Pattern style: ${r(courseContent.patterns.handy)}, in ${rs(keys)}, with progression ${rs(progressions)[0].chords}`)
// line(`Pattern style: ${r(courseContent.patterns.other)}, in ${rs(keys)}, with progression ${rs(progressions)[0].chords}`)
// line(`Blues: ${r(courseContent.patterns.blues)}, in ${rs(keys)}`)
// line(`Ballad practice: L pattern, L progression, R theme, R variation`)

console.log(fullSessionText);
