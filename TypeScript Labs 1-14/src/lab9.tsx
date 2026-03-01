function Move(direction:"up"|"down"|"left"|"right"){
return(
    <div>Moving:{direction}</div>
)
}
function FormatValue({ value }: { value: string | number }) {
  return(
    <>
    {typeof(value)==="string"?value.toUpperCase():Math.round(value)}
    </>
  )
}
export default Move
export {FormatValue}
