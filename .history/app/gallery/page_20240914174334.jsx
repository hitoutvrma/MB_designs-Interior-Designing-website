
const page = () => {
  return (
    <div className="container py-10 grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/badroom.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"   src="/image/gallery2.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default page
