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
    'I-IV-V',
    'I – V – vi – IV',
    'ii – V – I',
    'I – V – vi – iii – IV – I – IV – V',
    'I - vi - ii - V'
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
const lineRandomly = (oneInX, text) => { if (Math.floor(Math.random() * oneInX) + 1 === oneInX ) line(`${text}`)}

line('#####################')
lineRandomly(5, 'Song: Broken Chord Ballad')
line(`Pattern style: ${r(courseContent.patterns.handy)}, in ${r(keys)}, with progression ${r(progressions)}`)
line(`Pattern style: ${r(courseContent.patterns.other)}, in ${r(keys)}, with progression ${r(progressions)}`)
line(`Blues: ${r(courseContent.patterns.blues)}, in ${r(keys)}`)
line(`Inversions: starting with ${r(inversionStartingPoints)}, ${r(forwardsBackwards)}`)
lineRandomly(3, 'Theory flashcards')
line(`Repertoire practice: ${r(repertoire)}`)
lineRandomly(2, `Ballad style: ${courseContent.balladStyle.pieces[0]}`)
line(`Ballad practice: ${r(courseContent.balladStyle.improvisation)}`)
line(`Ballad practice: ${courseContent.balladStyle.pieces[1]}`)
line('#####################')

console.log(fullSessionText);