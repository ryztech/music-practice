const courseContent = {
    patterns:
    {
        handy: [
            'Basic',
            '2-1 ballad',
            'Bounce',
            'Left Arpeggio'

            // 'Straight beat gospel style',
            // 'Half beat bounce',
            // 'Split chord (and 7ths)',
            // 'Bossa Nova Bounce'
        ],
        other: [
            // 'left note / right chord',
            // 'oom pah',
            // '12/8 country shuffle',
            // 'Twist',
            // 'Twist-2',
            // '3 beat bounce'
        ],
        blues: [
            // 'straight eight boogie (alternating)',
            // 'straight eight boogie (constant)',
            // 'blueberry hill',
            // '12/8 boogie shuffle',
            // 'blues brothers'
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
    // { chords: 'I - III - vi - V', exampleSongs: ['Billionaire'] },
    { chords: 'I - IV - I - V', exampleSongs: ['Lean On Me'] },
    { chords: 'I - IV - V', exampleSongs: ['Good Riddance', 'Three Little Birds'] },
    { chords: 'I – V – vi – IV', exampleSongs: ['Let It Be', 'Torn', 'I\'m yours', 'Jar of Hearts', 'Wherever You Will Go', 'Run (chorus)', 'Can You Feel The Love Tonight', 'Where Is The Love?', 'She Will Be Loved', 'Hide And Seek', 'Paparazzi', 'Someone Like You', 'Ai Se Eu Te Pego', 'Demons'] },
    // { chords: 'I - V7 - IV - I', exampleSongs: ['Lava Song'] },
    { chords: 'I - vi', exampleSongs: ['Hallelujah (intro)'] },
    { chords: 'I - vi - IV - V', exampleSongs: ['Stand By Me', 'Every Breath You Take', 'Perfect'] },
    // { chords: 'I - VII - IV - I', exampleSongs: ['Teardrop'] },
    // { chords: 'I - VII - IV - I', exampleSongs: ['Addicted To Love'] },
    // { chords: 'i - III - iv - VI - V', exampleSongs: ['Too Close'] },
    // { chords: 'i - III - VII', exampleSongs: ['Closer'] },
    { chords: 'i - V', exampleSongs: ['Hej Sokoly verse', 'Czerwone Jabluszko verse', 'Angel of small death first part'] },
    // { chords: 'i - v - VII', exampleSongs: ['Ain\'t No Sunshine'] },
    // { chords: 'i - VI - VII', exampleSongs: ['Kryptonite'] },
    // { chords: 'i - VI - V', exampleSongs: ['Believer'] },
    // { chords: 'i - VII - IV', exampleSongs: ['Wicked Game'] },
    // { chords: 'i - VII - iv', exampleSongs: ['I Need a Dollar'] },
    { chords: 'ii – V – I', exampleSongs: ['Sunday Morning'] },
    // { chords: 'III - VII - i - V', exampleSongs: ['Hej Sokoly chorus', 'Czerwone Jabluszko chorus'] },
    { chords: 'vi – IV – I - V', exampleSongs: ['Zombie', 'Save Tonight', 'Complicated', 'Numb', 'Grenade', 'Say Something', 'All of Me'] },
    // { chords: 'vi – IV – I', exampleSongs: ['Wake Me Up'] },
    // { chords: 'IV – I - V - vi', exampleSongs: ['Let Her Go'] },
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

const setContent = (content, id) => document.getElementById(id).innerHTML = content
const r = (list) => list[Math.floor(Math.random() * list.length)]
const rs = (list) => list.splice(Math.floor(Math.random() * list.length), 1)
const lineRandomly = (oneInX, text) =>  Math.floor(Math.random() * oneInX) + 1 === oneInX ? text : '';

const randomProgression = r(progressions)

const songAndKey = `'${r(randomProgression.exampleSongs)}' chord progression, using ${r(allPatterns)} pattern`;
const chords = `Chords: ${randomProgression.chords}`;
const exercise2 = 'Try it with your eyes closed'
const exercise3 = `Try it in ${rs(keys)}`;

setContent(songAndKey, 'songAndKey')
setContent(chords, 'chords')
setContent(exercise2, 'exercise2')
setContent(exercise3, 'exercise3')

// removed to simplify practice until I relearn what I've forgotten
// const exercise1 = lineRandomly(3, 'Theory flashcards');
// const exercise2 = `Patterns: ${r(allPatterns)}, in ${rs(keys)}`;
// const exercise3 = `Inversions: ${r(inversionStartingPoints)}, starting ${r(majorMinor)}, ${r(blackWhite)} keys`;
// const exercise4 = `Repertoire: ${r(repertoire)}`;
// const randomProgression = r(progressions)
// const songAndKey = `Progression:  ${r(randomProgression.exampleSongs)}, in ${rs(keys)}`;
// const chords = `Chords: ${randomProgression.chords}`;
//
// setContent(exercise1, 'exercise1')
// setContent(exercise2, 'exercise2')
// setContent(exercise3, 'exercise3')
// setContent(exercise4, 'exercise4')
// setContent(songAndKey, 'songAndKey')
// setContent(chords, 'chords')
