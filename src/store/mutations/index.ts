import { MutationTypes } from './mutation-types'
import { State } from '@/store/state'
import { MutationTree } from 'vuex'

export type Mutations<S = State> = {
  [MutationTypes.SET_DATA](state: S, payload: any): void,
  [MutationTypes.SET_INTERVAL](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DATA](state, payload: any) {
    state.all = payload
  },
  [MutationTypes.SET_INTERVAL](state, payload: number) {
    state.interval = payload
  },
}