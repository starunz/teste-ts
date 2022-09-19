import { useRef } from 'react'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'

export default function Example() {
  const sheetRef = useRef<BottomSheetRef>()
	console.log(sheetRef)
  return (
    <BottomSheet open ref={sheetRef}>
      <button
        onClick={() => {
          // Full typing for the arguments available in snapTo, yay!!
          sheetRef.current.snapTo(({ maxHeight }) => maxHeight)
        }}
      >
        Expand to full height
      </button>
    </BottomSheet>
  )
}