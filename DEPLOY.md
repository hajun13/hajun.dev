# GitHub & Vercel 배포 가이드

## 1. GitHub 연결

### GitHub 저장소 생성 후 실행:

```bash
# GitHub 원격 저장소 추가 (YOUR_USERNAME을 본인 GitHub 아이디로 변경)
git remote add origin https://github.com/hajun13/portfolio.git

# 기본 브랜치를 main으로 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## 2. Vercel과 GitHub 연결

### 방법 A: Vercel 대시보드에서 (추천)

1. https://vercel.com 접속
2. 프로젝트 선택 (about)
3. Settings > Git 
4. "Connect Git Repository" 클릭
5. GitHub 저장소 선택

### 방법 B: 터미널에서

```bash
# 프로덕션 배포
npx vercel --prod

# GitHub 연결 후 자동 배포
git add .
git commit -m "Update"
git push
```

## 3. 자동 배포 확인

이제 `git push`할 때마다 자동으로 배포됩니다!

- **main 브랜치**: 프로덕션 배포
- **다른 브랜치**: 프리뷰 배포
- **Pull Request**: PR마다 프리뷰 URL 생성

## 커스텀 도메인 연결

Vercel 대시보드:
- Settings > Domains
- 도메인 추가



