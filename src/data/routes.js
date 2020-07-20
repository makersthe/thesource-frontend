import React from 'react'
import Videos from '../pages/Videos'
import Images from '../pages/Images'
import Audios from '../pages/Audios'
import Fonts from '../pages/Fonts'

export const routes = [
  {
    contentType: 'videos',
    url: '/videos',
    name: '영상',
    component: <Videos />,
  },
  {
    contentType: 'images',
    url: '/images',
    name: '이미지',
    component: <Images />,
  },
  {
    contentType: 'audios',
    url: '/audios',
    name: '음원',
    component: <Audios />,
  },
  {
    contentType: 'fonts',
    url: '/fonts',
    name: '폰트',
    component: <Fonts />,
  },
]

const contentTypes = routes.map((item) => {
  return item.contentType
})

export const contentTypesApi = contentTypes.map((item) => ({
  [item]: `https://api.thesource.co.kr/${item}`,
}))

export default routes
