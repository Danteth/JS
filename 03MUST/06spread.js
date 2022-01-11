const languages = ['JavaScript', 'C++', "Python", 'Java'];
const dsl = ['SQL', 'HTML', 'CSS', 'NoSQL'];

const allLanguages = [...languages, ...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const courseData = {
    name: 'Projektownie i programowanie front-end',
    shortcut: 'PPFront',
    year: '2',
    content:{
        types:{
            lectures: true,
            laboratories: true,
            projects: true
        },
        hours:{
            lectures: 15,
            laboratories: 15,
            projects: 15
        }
    }
}


const courseDataForYear = {
    start: '2021', 
    end: '2022'
};

const allCourse = {...courseData, ...courseDataForYear};

console.log(allCourse);