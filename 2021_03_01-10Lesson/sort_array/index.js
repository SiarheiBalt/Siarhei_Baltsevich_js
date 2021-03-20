let people = [
    { firstname: 'Timothy', lastname: 'Cook', age: 57, company: 'Apple' },
    { firstname: 'Lary', lastname: 'Page', age: 45, company: 'Google' },
    { firstname: 'Mark', lastname: 'Zuckerberg', age: 34, company: 'Facebook' },
    { firstname: 'Bill', lastname: 'Gates', age: 62, company: 'Microsoft' },
];
let divFirstName = document.querySelector('.firstname');
let divLastName = document.querySelector('.lastname');
let divAge = document.querySelector('.age');
let divCompany = document.querySelector('.company')

function clearDiv() {
    while (divFirstName.childNodes.length != 1) {
        divFirstName.lastChild.remove('div');
        }
    while (divLastName.childNodes.length != 1) {
        divLastName.lastChild.remove('div');
        }
    while (divAge.childNodes.length != 1) {
        divAge.lastChild.remove('div');
        }
    while (divCompany.childNodes.length != 1) {
        divCompany.lastChild.remove('div');
        }
}

function addPeople(arr) {
    arr.forEach(el => {
        let firstName = document.createElement('div');
        firstName.innerHTML = el.firstname;
        divFirstName.append(firstName);

        let lastName = document.createElement('div');
        lastName.innerHTML = el.lastname;
        divLastName.append(lastName);

        let age = document.createElement('div');
        age.innerHTML = el.age;
        divAge.append(age);

        let company = document.createElement('div');
        company.innerHTML = el.company;
        divCompany.append(company);
    });
}
addPeople(people);

function sortPeopleOfAgeAscending(arr) {
   arr.sort(function (a, b) {
       return a.age - b.age
   })
   return arr;
   
}
function sortPeopleOfAgeDescending(arr) {
   arr.sort(function (b, a) {
       return a.age - b.age
   })
   return arr;
   
}
function sortPeopleOfFirstnameAscending(arr) {
    arr.sort(function (a, b) {
        let nameA = a.firstname.toLowerCase();
        let nameB = b.firstname.toLowerCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } 
        return 0;
    })
}
function sortPeopleOfFirstnameDescending(arr) {
    arr.sort(function (a, b) {
        let nameA = a.firstname.toLowerCase();
        let nameB = b.firstname.toLowerCase();
        if (nameA > nameB) {
            return -1;
        } else if (nameA < nameB) {
            return 1;
        } 
        return 0;
    })
}
function sortPeopleOfLastnameAscending(arr) {
    arr.sort(function (a, b) {
        let nameA = a.lastname.toLowerCase();
        let nameB = b.lastname.toLowerCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
}
function sortPeopleOflastnameDescending(arr) {
    arr.sort(function (a, b) {
        let nameA = a.lastname.toLowerCase();
        let nameB = b.lastname.toLowerCase();
        if (nameA > nameB) {
            return -1;
        } else if (nameA < nameB) {
            return 1;
        }
        return 0;
    })
}
function sortPeopleOfCompanyAscending(arr) {
    arr.sort(function (a, b) {
        let nameA = a.company.toLowerCase();
        let nameB = b.company.toLowerCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
}
function sortPeopleOfCompanyDescending(arr) {
    arr.sort(function (a, b) {
        let nameA = a.company.toLowerCase();
        let nameB = b.company.toLowerCase();
        if (nameA > nameB) {
            return -1;
        } else if (nameA < nameB) {
            return 1;
        }
        return 0;
    })
}

function buttonSortAge() {
    conditionSort(sortPeopleOfAgeAscending, sortPeopleOfAgeDescending)
}

let countSort;
function conditionSort(funA, funB) {
    if (countSort === false || countSort === undefined) {
        funA(people);
        clearDiv();
        addPeople(people);
        return countSort = true;
    } else if (countSort === true) {
        funB(people);
        clearDiv();
        addPeople(people);
        return countSort = false;
    }
}

function buttonSortFirstname() {
    conditionSort(sortPeopleOfFirstnameAscending, sortPeopleOfFirstnameDescending)
}
function buttonSortLastName() {
    conditionSort(sortPeopleOfLastnameAscending, sortPeopleOflastnameDescending)
}
function buttonSortCompany() {
    conditionSort(sortPeopleOfCompanyAscending, sortPeopleOfCompanyDescending)
}