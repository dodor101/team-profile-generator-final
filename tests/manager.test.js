const Manager = require('../lib/manager');

describe('Manager', function () {
  describe('Initialization', function () {
    it('Can create an office number', () => {
      const testOfficeNumber = 2
      const employeeInstance = new Manager("Duke", 2, "Dodor@gmail.com", testOfficeNumber);
      expect((employeeInstance.officeNumber)).toEqual(testOfficeNumber);
    })

    // testing officeNumber  method will return office number.
    it('Testing officeNumber method will return office number', () => {
      const testOfficeNumber = 2;
      const employeeInstance = new Manager('Duke', 2, 'Dodor@gmail.com', testOfficeNumber);
      expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
    })

    // testing getRole method to return role
    it('Testing getRole method to return role', () => {
      const testRole = 'Manager';
      const employeeInstance = new Manager("Duke", 2, "Dodor@gmail.com", 2);
      expect(employeeInstance.getRole()).toBe(testRole);
    })

  })
});