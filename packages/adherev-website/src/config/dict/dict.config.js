import { Dict } from '@baifendian/adherev'

export default () => {
  const requireComponent = require.context('./dict', false, /.*\.(js)$/)

  const dictArr = []

  requireComponent.keys().forEach((path) => {
    const dict = requireComponent(path).default
    dictArr.push(dict)
  })

  Dict.init(dictArr, { isFunMemo: false })
}
