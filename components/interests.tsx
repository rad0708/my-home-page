export default function Interests() {
  const interests = [
    {
      title: "주식 투자",
      description:
        "재정 리터러시를 높이고, 시장을 분석하며 현명한 투자 결정을 내리는 것에 관심이 있습니다. 워렌 버핏의 투자 철학을 학습하고 있습니다.",
      icon: "📈",
    },
    {
      title: "운동",
      description:
        "건강한 신체와 정신을 유지하기 위해 규칙적인 운동을 하며, 체계적인 피트니스 계획을 세워 꾸준히 실천합니다.",
      icon: "💪",
    },
    {
      title: "독서",
      description:
        "다양한 분야의 책을 읽으며 지식을 넓히고, 새로운 관점을 배우며 사고의 폭을 확대합니다. 인문학부터 경제서까지 다양한 책을 즐겨 읽습니다.",
      icon: "📚",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">관심분야</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary transition-colors"
            >
              <div className="text-5xl mb-4">{interest.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{interest.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
