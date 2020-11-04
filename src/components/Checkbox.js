import React from 'react'
import { CheckBox, Body, Text } from "native-base";

const Checkbox = props => {
  return (
    <>
      <CheckBox
        disabled={false}
        checked={props.isChecked}
        onPress={
          () => props.handleCheckChieldElement({checked: !props.isChecked, value: props.value})
        }
      />
      <Body>
        <Text>{props.isChecked.toString()}</Text>
      </Body>
    </>
  )
}

export default Checkbox
