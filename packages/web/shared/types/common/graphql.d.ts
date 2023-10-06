import { DocumentNode } from 'graphql/language';
export interface ApolloOperation {
    gql: DocumentNode;
    method: string;
}
