module.exports = {
  queryAll: 'SELECT * FROM ??',
  queryById: 'SELECT * FROM ?? WHERE id=?',
  queryByPage: 'SELECT * FROM ?? LIMIT ?, ?',
  del: 'DELETE FROM ?? WHERE id=?',
};