/* Import modules. */
import superagent from 'superagent'

/**
 * Add Assurance
 */
const addAssurance = async ({ rootGetters }, _assurance) => {
    console.log('ADD ASSURANCE:', _assurance)

    /* Retrieve API provider. */
    const API_PROVIDER = rootGetters.getApiProvider

    let target = null

    /* Set api target. */
    if (_assurance.flipstarter) {
        target = `${API_PROVIDER}/assurances/flipstarter`
    } else {
        target = `${API_PROVIDER}/assurances`
    }

    const result = await superagent
        .post(target)
        .send(_assurance)
    // console.log('RESULT', result)

    /* Return result. */
    return result
}

/* Export module. */
export default addAssurance
