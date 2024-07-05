import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'encomenda_produto'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('encomenda_id').unsigned().references('encomendas.id').onDelete('CASCADE')
      table.integer('produto_id').unsigned().references('produtos.id').onDelete('CASCADE')
      table.unique(['encomenda_id', 'produto_id'])
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
