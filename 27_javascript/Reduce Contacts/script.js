const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." }
];

function mapContactsToCompanies(contacts) {
  return contacts.reduce((result, contact) => {
    const { name, company } = contact;

    
    if (!result[company]) {
      result[company] = [];
    }

   
    result[company].push(name);

    return result;
  }, {});
}

const output = mapContactsToCompanies(contacts);

for (const company in output) {
  console.log(`${company}:`);
  output[company].forEach(contact => {
    console.log(`"${contact}"`);
  });
}
