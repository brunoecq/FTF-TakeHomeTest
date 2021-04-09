import { MutationTypes } from './mutation-types'
import { State } from '@/store/state'
import { MutationTree } from 'vuex'

export type Mutations<S = State> = {
  [MutationTypes.SET_DATA](state: S, payload: any): void,
  [MutationTypes.SET_INTERVAL](state: S, payload: number): void,
  [MutationTypes.SET_BASE_URL](state: S, payload: string): void
  [MutationTypes.SET_GIT_USERNAME](state: S, payload: string): void
  [MutationTypes.SET_GIT_PROJECT](state: S, payload: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DATA](state, payload: any) {
    state.all = payload
  },
  [MutationTypes.SET_INTERVAL](state, payload: number) {
    state.interval = payload
  },
  [MutationTypes.SET_BASE_URL](state, payload: string) {
    state.base_url = payload
  },
  [MutationTypes.SET_GIT_USERNAME](state, payload: string) {
    state.git_username = payload
  },
  [MutationTypes.SET_GIT_PROJECT](state, payload: string) {
    state.git_project = payload
  },
}