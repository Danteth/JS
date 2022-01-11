const languages = ['JavaScript', 'C++', "Python", 'Java'];
const dsl = ['SQL', 'HTML', 'CSS', 'NoSQL'];

const allLanguages = [...languages, ...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const courseDataForYear = {
    start: '2021', 
    end: '2022'
};

const allCourse = {...courseData, ...courseDataForYear};

console.log(allCourse);