module.exports = {
  queryAll: 'SELECT * FROM ??',
  queryById: 'SELECT * FROM ?? WHERE id=?',
  queryByKey: 'SELECT * FROM ?? WHERE ??=?',
  queryByPage: 'SELECT * FROM ?? LIMIT ?, ?',
  queryByPage_Key: 'SELECT * FROM ?? WHERE ??=? LIMIT ?, ?',
  del: 'DELETE FROM ?? WHERE id=?',
};