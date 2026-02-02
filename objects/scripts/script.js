const users = {
    name: 'ana',
    fav_num: '15',
    fav_color: ['red', 'green', 'purple'],
    country: {
        city: ['tbilisi', 'gori']
    }
};

console.log(users);
console.log(users.name);
console.log(users.fav_color[1]);
console.log(users.country.city[1]);

const persons = [
    {
        name: 'Elene',
        lastName: 'Todua',
        age: 17
    },
    {
        name: 'Daria',
        lastName: 'Tsiko',
        age: 10
    }
]

console.log(persons[1].lastName);

const phones = [
    {
        name: 'Poco',
        seria: 'Poco m5',
        colors: ['green', 'black', 'red'],
        country: 'germany',
        languages: ['georgian', 'english', 'german'],
        year: 2020
    },
    {
        name: 'IPhone',
        seria: 'IPhone 15',
        colors: ['blue', 'white', 'red'],
        country: 'USA',
        languages: ['georgian', 'english', 'russian'],
        year: 2021
    },
    {
        name: 'Honor',
        seria: 'Honor x9d',
        colors: ['blue', 'black', 'green'],
        country: 'italy',
        languages: ['flench', 'english', 'italian'],
        year: 2026
    },
    {
        name: 'Redmi',
        seria: 'Redmi 9t',
        colors: ['green', 'black', 'red'],
        country: 'spain',
        languages: ['spanish', 'english', 'mandarin'],
        year: 2024
    },
]


const writers = [
    {
        name: 'ilia',
        last_name: 'chavchavadze',
        century: 'XIX',
        works: ['kacia-adamiani', 'mgzavris werilebi']
    },
    {
        name: 'nikoloz',
        last_name: 'baratashvili',
        century: 'XIX',
        works: ['sulo obolo', 'bedi qartlisa', 'vpove tadzari']
    },
    {
        name: 'grigol',
        last_name: 'orbeliani',
        century: 'XIX',
        works: ['tamar mepis saxe betaniis eklesiashi', 'pasuxi shvilta']
    },
    {
        name: 'shota',
        last_name: 'rustaveli',
        century: 'XII',
        works: 'vefxistyaosani'
    },
    {
        name: 'aleqsandre',
        last_name: 'yazbegi',
        century: 'XIX',
        works: ['modzgvari', 'elguja', 'eliso']
    },
]