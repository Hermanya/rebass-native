import sys from 'native-system-components'

export const Link = sys({
  is: 'a',
  color: 'blue'
}, 'space')

Link.displayName = 'Link'

export default Link
