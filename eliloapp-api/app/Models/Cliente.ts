import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from 'App/Models/Produto'
//import Clienteprodutos from './ClienteProduto'
 

export default class Cliente extends BaseModel {
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
  declare complemento: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Produto)
  public produtos: ManyToMany<typeof Produto>

  @beforeSave()
  public static async hashPassword (cliente: Cliente) {
    if (cliente.$dirty.password) {
      cliente.password = await Hash.make(cliente.password)
    }
  }
}
