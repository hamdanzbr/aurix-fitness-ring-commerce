const Error = ({error}:{error:string}) => {
  return (
    <p className="mt-1 text-xs text-red-500">
      {error}
    </p>
  )
}

export default Error