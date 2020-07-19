/* Import core modules. */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* Welcome */
import Welcome from '../views/Welcome.vue'

/* Account */
import AccountBacking from '../views/Account/Backing.vue'
import AccountCampaigns from '../views/Account/Campaigns.vue'
import AccountDashboard from '../views/Account/Dashboard.vue'
import AccountPayments from '../views/Account/Payments.vue'
import AccountProfile from '../views/Account/Profile.vue'
import AccountReceived from '../views/Account/Received.vue'
import AccountRewards from '../views/Account/Rewards.vue'
import AccountWallet from '../views/Account/Wallet.vue'

/* Campaigns */
import CampaignCreate from '../views/Campaign/Create.vue'
import CampaignDetails from '../views/Campaign/Details.vue'
import CampaignManage from '../views/Campaign/Manage.vue'

/* Contact. */
import Contact from '../views/Contact.vue'

/* Discover */
import Discover from '../views/Discover.vue'

/* FAQ */
import FAQ from '../views/FAQ.vue'

/* Initialize vue router. */
Vue.use(VueRouter)

/* Initialize (navigation) routes. */
const routes = [{
    path: '/',
    component: Welcome
}, {

    /* Account. */
    path: '/@*/backing',
    component: AccountBacking
}, {
    path: '/@*/campaigns',
    component: AccountCampaigns
}, {
    path: '/@*/dashboard',
    component: AccountDashboard
}, {
    path: '/@*/payments',
    component: AccountPayments
}, {
    path: '/@*/received',
    component: AccountReceived
}, {
    path: '/@*/rewards',
    component: AccountRewards
}, {
    path: '/@*/wallet',
    component: AccountWallet
}, {

    /* Campaigns */
    path: '/@*/create',
    component: CampaignCreate
}, {
    // eg. https://causes.cash/@BCHPlease/nito-cash/manage
    // NOTE: Avoid other wildcard conflicts.
    path: '/@*/:slug/manage',
    component: CampaignManage
}, {
    // eg. https://causes.cash/@BCHPlease/nito-cash-8680bb0e
    // NOTE: Avoid other wildcard conflicts.
    path: '/@*/:extSlug',
    component: CampaignDetails
}, {

    /* Contact */
    path: '/contact',
    component: Contact
}, {

    /* Discover */
    path: '/discover',
    component: Discover
}, {

    /* FAQ */
    path: '/faq',
    component: FAQ
}, {

    /* (Wildcard) Account Profile */
    // NOTE: Avoid other wildcard conflicts.
    path: '/@*',
    component: AccountProfile
}, {

    /* 404 Error */
    path: '*',
    component: Welcome
}]

/* Initialize (page navigation) router. */
const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: process.env.BASE_URL === '/' ? 'history': 'hash',
    // mode: 'hash',
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

/* Export module. */
export default router
