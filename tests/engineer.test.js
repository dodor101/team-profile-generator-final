const { string } = require('yargs');
const Engineer = require('../lib/engineer');

describe('Engineer', function () {
  describe('Initialization', function () {
    it('Can create a github', () => {
      const testGithub = 'Dukenson Dodor';
      const employeeInstance = new Engineer('Duke', 2, 'Dodor@gmail.com', testGithub);
      expect(employeeInstance.github).toBe(testGithub);
    });

    // testing getGithub method will return office number.
    it('Testing getGithub method will return github account', () => {
      const testGithub = 'Dukenson Dodor';
      const employee = new Engineer('Duke', 2, 'Dodor@gmail.com', testGithub);
      expect(employee.getGithub()).toBe(testGithub);
    });

    // testing getRole method to return role
    it('Testing getRole method to return role', () => {
      const testRole = 'Engineer';
      const employeeInstance = new Engineer('Duke', 2, 'Dodor@gmail.com', 2);
      expect(employeeInstance.getRole()).toBe(testRole);
    });
  });
});
