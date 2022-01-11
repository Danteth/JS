const dogs = [
    {
        id: 'dog-1', 
        name: 'Poodle', 
        temperament: [
            'Intelligent', 
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
            'Aggressive'
        ],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: [
            'Intelligent', 
            'Even Tempered',
            'Kind',
            'Agile',
            'Outgoing',
            'Trusting',
            'Gentle',
        ],
    },
    {
        id: 'dog-4',
        name: 'Australian Terrier',
        temperament: [
            'Intelligent', 
            'Even Tempered',
            'Kind',
            'Agile',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Outgoing',
            'Trusting',
            'Gentle',
            'Aggressive'
        ],
    },
    {
        id: 'dog-5',
        name: 'Australian Kelpie',
        temperament: [
            'Trainable',
            'Outgoing',
            'Trusting',
            'Gentle',
            'Loyal',
        ],
    },
]

console.log(dogs.find(dog => dog.name === 'Bernese Mountain Dog'));

console.log(dogs.some(dog => dog.temperament.includes('Aggressive')));

console.log(dogs.some(dog => dog.temperament.includes('Trustuing')));

console.log(dogs.every(dog => dog.temperament.includes('Trusting')));

console.log(dogs.every(dog => dog.temperament.includes('Intelligent')));

console.log(dogs.map(dog => dog.name));
console.log(dogs.filter(dog => dog.temperament.includes('Faithful')));

console.log(dogs.filter(dog => dog.temperament.includes('Faithful')));

console.log(dogs.reduce((allTemplates, dog) => {
    return [...allTemplates, ...dog.temperament]
}, []));

