const Manager = require('../lib/Manager.js');

test ('this creates an Manager object', () => {
    const manager =  new Manager('John', 3456, 'employee@email.com', 23);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test ('test Manager class functions', () => {
    const manager =  new Manager('John', 3456, 'employee@email.com', 23);

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe('Manager');

});