import { DateTime } from 'luxon' 
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasMany } from '@adonisjs/lucid/orm'
import Produto from '#models/produto'

export default class Subcategoria extends BaseModel {
  @hasMany(() => Produto)
 declare produtos: HasMany<typeof Produto>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare ref: number 

  @column()
  declare nome: string
 
  @column()
  declare img: string 
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}