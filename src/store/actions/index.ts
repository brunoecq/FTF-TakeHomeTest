import { ActionTypes } from './action-types'
import { ActionContext } from 'vuex'
import { MutationTypes } from '@/store/mutations/mutation-types'
import { Mutations } from '@/store/mutations'
import { Service } from '@/service'
import { State } from '@/store/state'


type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_DATA](
    { commit }: AugmentedActionContext
  ): Promise<any>,
  [ActionTypes.GET_DATA_WITH_PARAMS](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<any>
}

export const actions = {
  [ActionTypes.GET_DATA]({commit} : AugmentedActionContext) {
    return new Promise((resolve) => {
      Service.getCommitsHistoryAsync((data: any) => { 
        commit(MutationTypes.SET_DATA, data)
        resolve(data);
      });
    })
  },
  async [ActionTypes.GET_DATA_WITH_PARAMS]({commit} : AugmentedActionContext, payload: any) {
    const data = await Service.getCommitsHistoryAsyncByUrl(payload);
    commit(MutationTypes.SET_DATA, data)
  },
}