import Image from "next/image"

export default function EditorialStrip() {
  return (
    <div className="w-full h-[38vh] relative overflow-hidden">
      <Image
        src="/images/editorial-strip.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  )
}
