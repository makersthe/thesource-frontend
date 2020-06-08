import React from 'react'
import Movies from '../pages/Movies'
import Images from '../pages/Images'
import Musics from '../pages/Musics'
import Fonts from '../pages/Fonts'

export const routes = [
  {
    contentType: 'movie',
    url: 'movies',
    name: '영상',
    component: <Movies />,
  },
  {
    contentType: 'image',
    url: 'images',
    name: '이미지',
    component: <Images />,
  },
  {
    contentType: 'music',
    url: 'musics',
    name: '음원',
    component: <Musics />,
  },
  {
    contentType: 'font',
    url: 'fonts',
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
