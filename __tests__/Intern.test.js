const Intern = require('../lib/Intern.js');

test ('this creates an Engineer object', () => {
    const intern =  new Intern('John', 3456, 'employee@email.com', 'school');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test ('test engineer class functions', () => {
    const intern =  new Intern('John', 3456, 'employee@email.com', 'school');

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');

});