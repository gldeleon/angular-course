const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const ocelote: Character = {
    name: 'ocelote',
    hp: 100,
    skills: ['Bash', 'Counter']
}

ocelote.hometown = 'Rivendell';

console.table(ocelote);

export {};