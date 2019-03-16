import { ResolverMap } from './types/schema-utils';

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || 'World'}`,
    },
  Mutation: {
    register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
    }
}