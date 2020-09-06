import lazy from './libs/lazy'

const Dashboard = lazy(() => import('./pages/Dashboard'))

export const routeList = [
  // {
  //   name: 'Layout',
  //   path: '/layout',
  //   children: [
  //     {
  //       name: 'Dashboard',
  //       path: '/',
  //       exact: true,
  //       component: Dashboard,
  //     },
  //     {
  //       name: 'RoleManagement',
  //       path: '/role-management',
  //       exact: false,
  //       component: RoleManagement,
  //     },
  //     {
  //       name: 'UserManagement',
  //       path: '/user-management',
  //       exact: false,
  //       component: UserManagement,
  //     },
  //     {
  //       name: 'Application',
  //       path: '/approval-center/application',
  //       exact: false,
  //       component: Application,
  //     },
  //     {
  //       name: 'RiskConfig',
  //       path: '/approval-center/config',
  //       exact: false,
  //       component: lazy(() => import('@/views/ApprovalCenter/Config')),
  //     },
  //     {
  //       name: 'ApplicationDetail',
  //       path: '/approval-center/application-detail/:applicationRiskId',
  //       exact: false,
  //       component: ApplicationDetail,
  //     },
  //     {
  //       name: 'Bill List',
  //       path: '/financial-center/bill-list',
  //       exact: false,
  //       component: BillList,
  //     },
  //     {
  //       name: 'Bank Record',
  //       path: '/financial-center/bank-record',
  //       exact: false,
  //       component: BankRecord,
  //     },
  //     {
  //       name: 'Repay Application',
  //       path: '/financial-center/repay-application',
  //       exact: false,
  //       component: OfflineApprove,
  //     },
  //     {
  //       name: 'Coupon List',
  //       path: '/coupon-management/coupon-list',
  //       exact: false,
  //       component: lazy(() => import('@/views/Coupon')),
  //     },
  //     {
  //       name: 'Banner & Icon',
  //       path: '/operation-tools/banner-icon',
  //       exact: false,
  //       component: lazy(() => import('@/views/OperationTools')),
  //     },
  //   ],
  // },
  // {
  //   name: 'SSO',
  //   path: '/sso',
  //   exact: false,
  //   component: SSO,
  //   children: [],
  // },
  {
    name: 'NotFound',
    path: '/layout',
    exact: false,
    component: Dashboard,
    children: [],
  },
]
