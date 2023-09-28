const Intern = require('../lib/intern');

describe('Engineer', function () {
  describe('Initialization', function () {
    it('Can create a school', () => {
      const testSchool = 'School name'
      const employeeInstance = new Intern("Duke", 2, "Dodor@gmail.com", testSchool);
      expect((employeeInstance.school)).toBe(testSchool);
    })

    // testing getSchool method will return school info.
    it('Testing getSchool method will return school info ', () => {
      const testSchool = 'School name';
      const employeeInstance = new Intern("Duke", 2, "Dodor@gmail.com", testSchool);
      expect(employeeInstance.getSchool()).toBe(testSchool);
    })

    // testing getRole method to return role
    it('Testing getRole method to return role', () => {
      const testRole = 'Intern';
      const employeeInstance = new Intern("Duke", 2, "Dodor@gmail.com", 2);
      expect(employeeInstance.getRole()).toBe(testRole);
    })

  })
});