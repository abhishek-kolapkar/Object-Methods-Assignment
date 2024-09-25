function ageFilter(names, ages) {
  // write code here
  let userData = [];
  let userNames = '';

  for(let i = 0; i < names.length; i++) {
    let user = names[i];

    userData.push({
      name: user, 
      age: ages[i]
    });
  }

  userData.filter(({name, age}) => {
    if(age > 30) {
      userNames += `${name} `
    }
  })

  return userNames;
}

let names = ['Nrupul', 'Prateek', 'Albert', 'Aman', 'Yogesh'];
let ages = [32, 30, 26, 28, 44];

const userAgeFilter = ageFilter(names, ages);
console.log(userAgeFilter);