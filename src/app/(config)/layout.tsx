import ActionBar from "./ActionBar"

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {/* <AuthRedirect redirectIfNoAuth='/login' /> */}
      <div className='flex flex-col'>
        <div className='flex w-full bg-indigo-700 px-20 mb-5 text-white font-medium fixed z-20 '>
          <ActionBar />
        </div>
        <div className='flex justify-center pt-20'>{children}</div>
      </div>
    </>
  )
}
