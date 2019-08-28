import React from "react"
import "./colorbox.css"

const ColorBox = ({ id, children }) => (
  <div className="trigger" id={`trigger-${id}`}>
    <div className="box" id={`box-${id}`}>{children}</div>
  </div>
)

export {
  ColorBox
}