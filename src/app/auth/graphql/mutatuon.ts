import { gql } from 'apollo-angular'

export const LOGIN = gql`
  mutation signIn($signInInput: SignInInput) {
    signIn(signInInput: $signInInput)
  }
`
