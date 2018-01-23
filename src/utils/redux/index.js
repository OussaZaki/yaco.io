import get from 'utils/get'

export function handleSimpleAction (prop, defaultPayload) {
  return (state, { payload = defaultPayload } = {}) => ({
    ...state, [prop]: payload
  })
}

export const selectFromState = (path, defaultValue) => (state) => get(path, state, defaultValue)