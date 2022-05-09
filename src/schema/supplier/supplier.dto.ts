import { EmailAddressResolver } from 'graphql-scalars'
import { Field, InputType } from 'type-graphql'

export class CreateSupplierInput {
  email: string
  sub: string
}

@InputType()
export class UpdateUserInput {
  @Field(() => EmailAddressResolver)
  email: string

  @Field({ nullable: true })
  name?: string
}
