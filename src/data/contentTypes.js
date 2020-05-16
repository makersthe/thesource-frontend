export const contentNames = {
  video: '영상',
  image: '이미지',
  audio: '음원',
  font: '폰트',
}

const contentTypes = Object.keys(contentNames)

export const contentTypesApi = contentTypes.map((item) => ({
  [item]: `https://api.thesource.co.kr/${item}`,
}))

export default contentTypes
