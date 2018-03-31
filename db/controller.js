const db = {};

const insert = (user, attempt) => {
  if (!db[user]) db[user] = [];
  db[user].push(attempt);
  return attempt;
};

const retrieve = (user) => {
  return db[user];
};

module.exports = { insert, retrieve };
