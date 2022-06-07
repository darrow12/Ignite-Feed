// props: { author: "", content: "" }

export function Post(props) {
  // console.log(props)

  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  )
}

/*
  ? Default Exports VS Named Exports

  * Default Exports: export default functionName
  * Named Exports: export function functionName() {}
*/