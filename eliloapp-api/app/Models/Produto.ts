import { DateTime } from 'luxon' 
import { column, BaseModel, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from 'App/Models/Cliente'

export default class Produto extends BaseModel {
  @manyToMany(() => Cliente)
  public cliente: ManyToMany<typeof Cliente>

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
  declare estoque_minimo: number
  
  @column()
  declare estoque_maximo: number
  
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
