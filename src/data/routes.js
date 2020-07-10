import React from 'react'
import Videos from '../pages/Videos'
import Images from '../pages/Images'
import Audios from '../pages/Audios'
import Fonts from '../pages/Fonts'
import Primiere from '../pages/Primiere'
import AfterEffect from '../pages/AfterEffect'

export const routes = [
  {
    contentType: 'videos',
    url: '/videos',
    name: '영상',
    component: <Videos />,
  },
  {
    contentType: 'image',
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
    contentType: 'font',
    url: '/fonts',
    name: '폰트',
    component: <Fonts />,
  },
  {
    contentType: 'Primiere',
    url: '/Pres',
    name: '프리미어',
    component: <Primiere />,
  },
  {
    contentType: 'AfterEffect',
    url: '/Affect',
    name: '에프터이펙트',
    component: <AfterEffect />,
  },
]

const contentTypes = routes.map((item) => {
  return item.contentType
})

export const contentTypesApi = contentTypes.map((item) => ({
  [item]: `https://api.thesource.co.kr/${item}`,
}))

export default routes
