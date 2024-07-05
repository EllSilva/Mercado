import { DateTime } from 'luxon' 
import { column, beforeSave, BaseModel, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from 'App/Models/Produto'

export default class Encomenda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuario: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string
 
  @column()
  public telefone1: string

  @column()
  public telefone2: string

  @column()
  declare provincia: string 

  @column()
  declare municipio: string
 
  @column()
  declare bairro: string

  @column()
  declare rua: string
  
  @column()
  declare quantidade: string
 
  @column()
  declare total: string

  @column()
  declare estado: string 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime 
  
  @manyToMany(() => Produto)
  public produtos: ManyToMany<typeof Produto>
}
