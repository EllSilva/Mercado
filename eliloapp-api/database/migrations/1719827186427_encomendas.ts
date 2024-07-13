import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'encomendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cod_ref')
      table.string('telefone').nullable()
      table.string('gorjeta').nullable()
      table.string('tipo_pagamento').nullable()
      table.string('total').nullable() 
      table.string('municipio').nullable()
      table.string('bairro').nullable()
      table.string('rua').nullable() 
      table.string('estado').nullable()
      table.string('instrucoes').nullable() 
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
     
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
