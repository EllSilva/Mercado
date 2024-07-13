import { DateTime } from 'luxon' 
import { column, BaseModel, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from 'App/Models/Produto'

export default class Encomenda extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public cod_ref: number
  
  @column()
  public telefone: string
  
  @column()
  public gorjeta: string

  @column()
  public tipo_pagamento: string

  @column()
  public total: string
 
  @column()
  public municipio: string

  @column()
  declare bairro: string 

  @column()
  declare rua: string
 
  @column()
  declare estado: string

  @column()
  declare instrucoes: string 

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime 
  
  @manyToMany(() => Produto)
  public produtos: ManyToMany<typeof Produto>
}
