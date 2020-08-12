/* Import modules. */
import Nito from 'nitojs'
import superagent from 'superagent'

/**
 * Get Details
 */
const getDetails = async (state, getter, rootState, rootGetters) => {
    /* Set profile index. */
    const profileIndex = 0

    /* Set chain. */
    const chain = 0 // receiving account

    /* Set derivation path. */
    const path = rootGetters['wallet/getDerivationPath'](chain, profileIndex)

    /* Initialize HD node. */
    const hdNode = rootGetters['wallet/getHDNode']

    /* Initialize child node. */
    const childNode = hdNode.deriveChild(path)

    /* Set (profile) address. */
    const address = Nito.Address.toCashAddress(childNode)
    // console.log('GET DETAILS (address):', address)

    /* Retrieve API provider. */
    const API_PROVIDER = rootGetters.getApiProvider

    const results = await superagent.get(`${API_PROVIDER}/profiles/${address}`)
    // console.log('GET DETAILS (profile):', results)

    if (results && results.body) {
        return results.body[0] // FIXME: Should we ONLY send one result??
    } else {
        return results
    }
}

/* Export module. */
export default getDetails
