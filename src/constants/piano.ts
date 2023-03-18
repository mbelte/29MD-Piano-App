export type PianoKeyType = {
    key: string;
    note: string;
}

export type RecordType = {
    note: string;
    delay: number;
}

export const PianoKeys: PianoKeyType[] = [
    {key: 'a', note: 'C4'},
    {key: 'w', note: 'Db4'},
    {key: 's', note: 'D4'},
    {key: 'e', note: 'Eb4'},
    {key: 'd', note: 'E4'},
    {key: 'f', note: 'F4'},
    {key: 't', note: 'Gb4'},
    {key: 'g', note: 'G4'},
    {key: 'y', note: 'Ab4'},
    {key: 'h', note: 'A5'},
    {key: 'u', note: 'Ab5'},
    {key: 'j', note: 'B5'},
    {key: 'k', note: 'C5'},
    {key: 'o', note: 'Db5'},
    {key: 'l', note: 'D5'},
    {key: 'p', note: 'Eb5'},
    {key: ';', note: 'E5'}
];

export const DemoRecord = [
    {note: 'C4', delay: 500},
    {note: 'Db4', delay: 1200},
    {note: 'D4', delay: 1700},
    {note: 'Eb4', delay: 2500},
    {note: 'E4', delay: 2700},
    {note: 'F4', delay: 3300},
    {note: 'Gb4', delay: 3600},
    {note: 'G4', delay: 4000},
    {note: 'Ab4', delay: 3900},
    {note: 'Ab4', delay: 4400},
    {note: 'B5', delay: 4900},
    {note: 'C5', delay: 4400},
    {note: 'Db5', delay: 500},
    {note: 'D5', delay: 5400},
    {note: 'Eb5', delay: 6000},
    {note: 'E5', delay: 6400},
]