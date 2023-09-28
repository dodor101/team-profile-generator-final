const Employee = require('../lib/employee');

describe('Employee', function () {
  describe('Initialization', function () {
    it('creates a new employee.', () => {
      const employeeInstance = new Employee();
      expect(typeof (employeeInstance)).toBe('object');
    })

    // testing name
    it('Test name.', () => {
      const name = 'Duke';
      const employeeInstance = new Employee(name);
      expect(employeeInstance.name).toBe(name);
    })

    // testing id
    it('Testing ID', () => {
      const id = 2;
      const employeeInstance = new Employee('Duke',id);
      expect(employeeInstance.id).toBe(id);
    })
    // test email
    it('Testing email', () => {
      const email = 'dodor@gmail.com'
      const employeeInstance = new Employee('Duke', 2, email);
      expect(employeeInstance.email).toBe(email);
    })

    // testing getName method
    it('Gets name through getName method', () => {
      const testName = 'Duke';
      const employeeInstance = new Employee(testName);
      expect(employeeInstance.getName()).toBe(testName);
    })

    // testing getId method
    it('Can test Id through getId method', () => {
      const testId = 2;
      const employeeInstance = new Employee('Duke',testId);
      expect(employeeInstance.getId()).toBe(testId);
    })

    // testing getEmail method
    it('Can test email through getEmail method', () => {
      const testEmail = 'Dodor@gmail.com';
      const employeeInstance = new Employee('Duke', 2, testEmail);
      expect(employeeInstance.getEmail()).toBe(testEmail);
    })
  })
});