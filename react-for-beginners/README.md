1. package.json 에 "homepage": "https://jeonkongg.github.io/react-for-beginners" 추가하기
2. scripts 에 아래 스크립트 추가
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
3. 터미널에서 npm run deploy 실행