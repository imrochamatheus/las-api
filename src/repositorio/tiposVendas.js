const query = require("../infraestrutura/database/queries");

class TiposVendas {
  listar() {
    const sql = "SELECT * FROM TiposVendas";
    return query(sql);
  }

  adicionar(tipoVenda) {
    const sql = "INSERT INTO TiposVendas SET ?";
    return query(sql, tipoVenda);
  }

  buscaPorId(id) {
    const sql = "SELECT * FROM TiposVendas WHERE id = ?";
    return query(sql, id);
  }

  alterar(id, tipoVendaAtualizada) {
    const sql = "UPDATE TiposVendas SET ? WHERE id = ?";
    return query(sql, [tipoVendaAtualizada, id]);
  }

  excluir(id) {
    const sql = "DELETE FROM TiposVendas WHERE id = ?";
    return query(sql, id);
  }
}

module.exports = new TiposVendas();
