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
                'straight eight boogie (full)',
                'blueberry hill',
                '12/8 boogie shuffle',
                'blues brothers'
            ]
        }
}
const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
const progressions = [
    'I-IV-V',
    'I – V – vi – IV',
    'ii – V – I',
    'I – V – vi – iii – IV – I – IV – V',
    'I - vi - ii - V'
];
const inversionStartingPoints = ['root-middle', 'middle-backwards', 'backwards-root']
const majorMinor = ['major', 'minor']
const forwardsBackwards = ['forwards', 'backwards']
const repertoire = [
    'Angel of Small Death',
    'Lean on Me',
    'Ain\'t No Sunshine'
]

let fullSessionText = ''

const line = (text) => fullSessionText+= (fullSessionText === '' ? (`${text}`) : (`\n\n${text}`))
const r = (list) => list[Math.floor(Math.random() * list.length)]
const lineRandomly = (oneInX, text) => { if (Math.floor(Math.random() * oneInX) + 1 === oneInX ) line(`${text}`)}

line('#####################')
lineRandomly(3, 'Song: Broken Chord Balad')
line(`Pattern practice: ${r(courseContent.patterns.handy)}, in ${r(keys)}, with progression ${r(progressions)}`)
line(`Pattern practice: ${r(courseContent.patterns.other)}, in ${r(keys)}, with progression ${r(progressions)}`)
line(`Blues pattern practice: ${r(courseContent.patterns.blues)}, in ${r(keys)}`)
line(`Inversions practice: starting with ${r(inversionStartingPoints)}, ${r(majorMinor)}, ${r(forwardsBackwards)}`)
lineRandomly(3, 'Theory flashcards')
line(`Repertoire practice: ${r(repertoire)}`)
line('#####################')

console.log(fullSessionText);