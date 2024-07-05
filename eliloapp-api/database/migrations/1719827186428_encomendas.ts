import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'encomendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('codref')
      table.string('usuario').nullable()
      table.string('email', 255).notNullable()  
      table.string('telefone1').nullable()
      table.string('telefone2').nullable()
      table.string('provincia').nullable()
      table.string('municipio').nullable()
      table.string('bairro').nullable()
      table.string('rua').nullable() 
      table.string('quantidade').nullable()
      table.string('total').nullable()
      table.string('estado').nullable()
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
