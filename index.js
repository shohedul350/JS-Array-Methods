const companies= [
    {name: "Nerddevs", category: "Finance", start: 1981, end: 2004},
    {name: "Brain Station 23", category: "Retail", start: 1992, end: 2008},
    {name: "Dream71 Bangladesh Ltd", category: "Auto", start: 1999, end: 2007},
    {name: "Kaz Software", category: "Retail", start: 1989, end: 2010},
    {name: "TigerIT Bangladesh Ltd.", category: "Technology", start: 2009, end: 2014},
    {name: "Nano IT World", category: "Finance", start: 1987, end: 2010},
    {name: "The Databiz Software Ltd.", category: "Auto", start: 1986, end: 1996},
    {name: "Cefalo Bangladesh Ltd.", category: "Technology", start: 2011, end: 2016},
    {name: "HRsoft BD", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [32, 15, 19, 14, 4, 65, 75, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  

  
  // forEach function
//   companies.forEach(function(company) {
//     console.log(company.name);
//   });
  

  // filter Get 21 and older
  
//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//       canDrink.push(ages[i]);
//     }
//   }
//   console.log(canDrink);

//   const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//       return true;
//     }
//   });
//   console.log(canDrink);
  
//   const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);


  
  // Filter retail companies
  
//   const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//       return true;
//     }
//   });
//   console.log(retailCompanies);
//   const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);



  // Get 80s companies
  
//   const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
//   console.log(eightiesCompanies);

  // Get companies that lasted 10 years or more
  
//   const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  
  // map
  
  // Create array of company names
  // const companyNames = companies.map(function(company) {
  //   return company.name;
  // });
  
  // const testMap = companies.map(function(company) {
  //   return `${company.name} [${company.start} - ${company.end}]`;
  // });
  
  // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  
  // const ageMap = ages
  //   .map(age => Math.sqrt(age))
  //   .map(age => age * 2);
  
  
  
  // sort
  
  // Sort companies by start year
  
  // const sortedCompanies  = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  
  // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  
  // Sort ages
  // const sortAges = ages.sort((a, b) => a - b);
  
  // console.log(sortAges);
  
  
  // reduce
  
  // let ageSum = 0;
  // for(let i = 0; i < ages.length; i++) {
  //   ageSum += ages[i];
  // }
  
  // const ageSum = ages.reduce(function(total, age) {
  //   return total + age;
  // }, 0);
  
  // const ageSum = ages.reduce((total, age) => total + age, 0);
  
  // Get total years for all companies
  
  // const totalYears = companies.reduce(function(total, company) {
  //   return total + (company.end - company.start);
  // }, 0);
  
//   const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  
//   // Combine Methods
  
//   const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
  
//   console.log(combined);
  