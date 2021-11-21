import React from 'react'

export default SliceZone = ({ sliceZone }) => {
  return sliceZone.map((slice, index) => (
    <p key={index}>{slice.slice_type}</p>
  ))
}