const LoadingProducts = () => {
  return (
          <div className="w-full p-3 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[460px] rounded-3xl border border-[#151517] bg-[#070709] animate-pulse"
                />
              ))}
            </div>
          </div>
  )
}

export default LoadingProducts