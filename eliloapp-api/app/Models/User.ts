import { DateTime } from 'luxon' 
import { BaseModel, HasMany, column, hasMany, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Encomenda from './Encomenda'

export default class User extends BaseModel {
  @hasMany(() => Encomenda)
  public encomendas: HasMany<typeof Encomenda>

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
  public remember_me_token: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
