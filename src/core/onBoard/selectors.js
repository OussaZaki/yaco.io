import { selectFromState } from 'utils/redux'

export const getLoading = selectFromState('onBoardFunctionality.loading')
export const getOnlineStatus = selectFromState('onBoardFunctionality.online')