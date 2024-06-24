import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number
 
  @column()
  declare nome: string

  @column()
  declare preco: string
 
  @column()
  declare descricao: string 

  @column()
  declare quantidade: string
 
  @column()
  declare categoria: string

  @column()
  declare img: string 
  
  @column()
  declare subcategoriaId: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
