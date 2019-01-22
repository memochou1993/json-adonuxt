'use strict';

const Database = use('Database');

class UserController {
  async index() {
    const users = await Database.table('users');
    return users;
  }
}

module.exports = UserController;
