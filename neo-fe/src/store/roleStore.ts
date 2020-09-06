import { action, observable, computed, toJS, runInAction } from 'mobx'
// import { IRoles, IConfig, ICurrentAuth } from '@/interface/auth'
// import { getListRoles, getConfigList, getCurrentAdmin } from '@/api/auth'
// import localStorage from '@/lib/local-storage'

class Role {
  // @observable loading = true
  // @observable roleList: Array<IRoles> = []
  // @observable configList: Array<IConfig> = []
  // @observable currentRole!: ICurrentAuth
  // @action
  // fetchRoleList = async () => {
  //   try {
  //     this.loading = true
  //     const { data } = await getListRoles()
  //     runInAction(() => {
  //       this.roleList = data.filter((item) => item.status === 'ENABLED')
  //       this.loading = false
  //     })
  //   } catch (e) {
  //     runInAction(() => {
  //       this.loading = false
  //     })
  //     console.error(e)
  //   }
  // }
  // @action
  // fetchConfigList = async () => {
  //   try {
  //     this.loading = true
  //     const { data } = await getConfigList()
  //     runInAction(() => {
  //       this.configList = data.filter((it) => it.status === 'ENABLED')
  //       this.loading = false
  //     })
  //   } catch (e) {
  //     runInAction(() => {
  //       this.loading = false
  //     })
  //     console.error(e)
  //   }
  // }
  // @action
  // fetchCurrentRole = async () => {
  //   try {
  //     const { data } = await getCurrentAdmin()
  //     runInAction(() => {
  //       this.currentRole = data
  //       localStorage.setItem(
  //         'authList',
  //         data.configurations.map((item: { code: string }) => item.code),
  //       )
  //       localStorage.setItem('email', data.email)
  //     })
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
  // @computed
  // get fetchUserCode() {
  //   return toJS(this.currentRole?.configurations.map((item: { code: string }) => item.code))
  // }
}
export const RoleStore = new Role()
