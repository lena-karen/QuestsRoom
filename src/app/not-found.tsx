import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div id='notFound' className='h-screen w-screen flex justify-center items-center flex-col gap-3'>
      <h2 className='text-_E6E6E6'>This page is not found</h2>

      <Link className='text-_E6E6E6 border-b-2' href="/">Return Home</Link>
    </div>
  )
}