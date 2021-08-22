const Engineer = require('../lib/Engineer.js');

test ('this creates an Engineer object', () => {
    const engineer =  new Engineer('John', 3456, 'employee@email.com', 'githubname');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test ('test engineer class functions', () => {
    const engineer =  new Engineer('John', 3456, 'employee@email.com', 'githubname');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');

});