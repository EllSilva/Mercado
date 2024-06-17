import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').nullable()
      table.string('preco').nullable()
      table.string('descricao').nullable()
      table.string('quantidade').nullable()
      table.string('categoria').nullable()
      table.string('img').nullable()
      table.integer('subcategoria_id').unsigned().references('subcategorias.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}