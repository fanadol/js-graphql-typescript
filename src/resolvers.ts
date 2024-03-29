import * as bcrypt from 'bcryptjs'
import { ResolverMap } from './types/schema-utils';
import { User } from './entity/User';

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || 'World'}`,
    },
  Mutation: {
    register: async (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        email: email,
        password: hashedPassword
      })

      await user.save()
      return true
    }
  }
}