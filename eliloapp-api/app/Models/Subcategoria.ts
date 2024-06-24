import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Subcategoria extends BaseModel {
  @hasMany(() => Produto)
  public produtos: HasMany<typeof Produto>
 
  @column({ isPrimary: true })
  public id: number

  @column()
  public ref: number 

  @column()
  public nome: string
 
  @column()
  public img: string 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
