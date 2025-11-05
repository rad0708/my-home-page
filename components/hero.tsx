export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%82%AC%EC%A7%84-Ex9LXTcvGCpJuT5R3q8EGeStXH0Tng.jpg"
          alt="정진원 프로필"
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-primary shadow-2xl"
        />
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">정진원</h1>
        <p className="text-2xl sm:text-3xl text-primary mb-4 font-semibold">꾸준함이 결국 모든 것을 이긴다</p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">경민IT고등학교 3학년</p>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          매사에 집중하고 지속적으로 성장하는 학생입니다.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-600 transition-colors">
            자세히 보기
          </button>
        </div>
      </div>
    </section>
  )
}
