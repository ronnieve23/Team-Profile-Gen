const Employee = require ('../lib/Employee');

test ('this creates an Employee object', () => {
    const employee =  new Employee('John', 3456, 'employee@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test ('test employee class functions', () => {
    const employee =  new Employee('John', 3456, 'employee@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee');

});