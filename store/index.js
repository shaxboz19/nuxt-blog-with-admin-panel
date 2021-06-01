export const state = () =>({
    error : null
})

export const mutations = {
    setError(state, error) {
        state.error = error
    }
}

export const getters = {
    error : state => state.error 
}