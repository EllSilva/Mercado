 import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
 
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
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}