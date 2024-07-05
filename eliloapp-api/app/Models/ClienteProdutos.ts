import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ClienteProduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  declare quantidade: string
 
  @column()
  declare total: string

  @column()
  declare estado: string 

  @column()
  declare clienteId: number

  @column()
  declare produtoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
