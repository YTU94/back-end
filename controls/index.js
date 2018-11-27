let func = require('../sql/func');

module.exports = {
  getAll (req, res) {
    func.connPool('SELECT * FROM ??', '', rows => {
      res.json({code: 200, msg: 'ok', data: rows})      
    })  
  }
}
