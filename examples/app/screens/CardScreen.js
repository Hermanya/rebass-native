
import React from 'react';
import RebassNative from 'rebass-native'

export const CardScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Card</RebassNative.Heading>
  <RebassNative.Card width={256}>
  <Image
    style={{width: '100%', height: '100px'}}
    source={{uri: photo}}
  />
  <Subhead p={2}>
    Hello
  </RebassNative.Subhead>
</Card>

  <RebassNative.Code>{`<Card width={256}>
  <Image
    style={{width: '100%', height: '100px'}}
    source={{uri: photo}}
  />
  <Subhead p={2}>
    Hello
  </Subhead>
</Card>
`}</RebassNative.Code>
  <RebassNative.Text>{``}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx |  | space | responsive
my |  | space | responsive
p | 2 | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px |  | space | responsive
py |  | space | responsive
color |  | colors | responsive
bg | white | colors | responsive
borderRadius | 2 | radii | responsive
boxShadow | 2 | shadows | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    