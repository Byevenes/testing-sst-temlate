import { getModelForClass, prop } from '@typegoose/typegoose'
import { EmailAddressResolver } from 'graphql-scalars'
import { ObjectId } from 'mongodb'
import { Field } from 'type-graphql'

import { Roles } from 'src/utils/schemas/Roles'

export class Supplier {
  @Field()
  _id: ObjectId

  @prop({ required: true, unique: true })
  sub: string

  @Field(() => EmailAddressResolver)
  @prop({ required: true, unique: true })
  email: string

  @Field(() => [String])
  @prop({
    required: true,
    enum: Roles,
    type: [String],
    default: [Roles.SUPPLIER],
  })
  roles: Roles[]

  @Field(() => String)
  @prop({ required: true, unique: true })
  name: string
}

export const SupplierModel = getModelForClass<typeof Supplier>(Supplier)
