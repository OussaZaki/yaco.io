import React from 'react'
import { createSelector } from 'reselect'

import sections from 'sections'
import { getOnlineStatus } from 'core/onBoard/selectors'


export const determineLayout = createSelector(
  getOnlineStatus,
  (isOnline) => {
    return isOnline ? ['survey'] : ['onBoard']
  }
)

export const getLayoutComponents = createSelector(
  determineLayout,
  (layoutArray) => {
    return layoutArray.map((sectionName) => {
      if (sections[sectionName]) return React.createElement(sections[sectionName], {key: `layout-${sectionName}`})
      return null
    })
  }
)
