/* Import modules (getters). */
import getDiscover from './discover/getters/getDiscover'

/* Import modules (actions). */
// import updateCampaign from './events/actions/updateCampaign'

/* Import modules (mutations). */
// import setAsset from './events/mutations/setAsset'

/* Initialize state. */
const state = {
    /**
     * Assets
     *
     * These assets are stored for quick access.
     *
     * NOTE: They are regularly updated, based on timestamps.
     */
    assets: null,
}

/* Getters. */
const getters = {
    getDiscover,
}

/* Actions. */
const actions = {
    // updateCampaign,
}

/* Mutations. */
const mutations = {
    // setAsset,
}

/* Export. */
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
