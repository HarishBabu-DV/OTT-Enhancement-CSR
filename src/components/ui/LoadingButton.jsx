
const LoadingButton = ({loadingText}) => {
  return (
    <p className="flex items-center">{loadingText || 'Loading'} <span className='spinner'></span> </p>
  )
}

export default LoadingButton