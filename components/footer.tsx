export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">포트폴리오</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#interests" className="hover:text-primary transition-colors">
                  관심분야
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  연락처
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">소셜</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">정보</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">핵심가치</h4>
            <p className="text-primary text-lg font-bold">꾸준함</p>
            <p className="text-muted-foreground text-sm mt-2">매일의 작은 노력이 큰 성과를 만듭니다</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} 정진원. 모든 권리 보유.</p>
          <p className="text-sm mt-2">Designed with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
