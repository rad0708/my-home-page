export default function VideoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">핵심 가치</h2>
        <div className="bg-card rounded-xl overflow-hidden shadow-2xl">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/g1xsW0SvHlU?rel=0"
              title="성공하고 싶다면, 인생이 바뀌고 싶다면 - 서정진 동기부여 연설"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-6">꾸준함과 성장의 가치를 담은 영감을 주는 영상입니다</p>
      </div>
    </section>
  )
}
