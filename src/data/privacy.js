import React from 'react'
import Policy from '../pages/Policy'
import Privacy from '../pages/Privacy'
import Copyright from '../pages/Copyright'

export const privacy = [
  {
    contentType: 'policy',
    url: 'policy',
    name: '이용약관',
    component: <Policy />,
  },
  {
    contentType: 'privacy',
    url: 'privacy',
    name: '개인정보 보호정책',
    component: <Privacy />,
  },
  {
    contentType: 'copyright',
    url: 'copyright',
    name: '저작권',
    component: <Copyright />,
  },
]

const contentTypes = privacy.map((item) => {
  return item.contentType
})

export const contentTypesApi = contentTypes.map((item) => ({
  [item]: `https://api.thesource.co.kr/${item}`,
}))

export default privacy
