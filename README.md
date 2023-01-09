# Sveltekit Blog

<img width="1487" alt="image" src="https://user-images.githubusercontent.com/65934968/211406809-b2e8569b-6224-4255-8a63-d1808b75d439.png">

## 1. 소개

`Sveltekit`을 사용하여 제작한 블로그입니다!

### 1-1. 주요 기술

```json
{
  "Language": [
    "javascript",
    "typescript"
  ],
  "Web Framework": [
    "Svelte",
    "Sveltekit"
  ],
  "Design": "tailwindcss",
  "Markdown": "MDsveX"
}
```


## 2. 시작하기

### 2-1. 패키지 의존성 설치

```bash
$ yarn install
```

### 2-2. Sveltkit 실행

```bash
$ yarn dev
```

► `localhost:5173`로 접속하면 실행 모습을 확인할 수 있습니다.

## 3. 게시글 작성하기

### 3-1. 페이지 생성

`Sveltekit`의 [Routing Concept](https://kit.svelte.dev/docs/routing)에 따라 `filesystem-based router`를 사용합니다.

- `src/routes` : /
- `src/routes/about` : /about

`+page.svx` 파일을 생성하여 새로운 페이지를 생성할 수 있습니다.

- `src/route/+page.svx` : /
- `src/route/about/+page.svx` : /about

► 생성한 페이지는 자동으로 사이드바의 메뉴로 등록이 됩니다.

### 3-2. MDsveX 작성하기

`MdsveX`는 `Svelte component`를 위한 마크다운 전처리기입니다.

마크다운 문서를 작성하며 `Svelte component`를 같이 사용할 수 있습니다.

► 마크다운 태그의 디자인은 `src/lib/markdown/markdown.svelte`와 `src/lib/markdown/markdown.css`를 통해 수정할 수 있습니다.

► 작성한 마크다운의 **TOC(Table Of Content)**는 `h2`와 `h3` 태그를 자동으로 식별하여 우측에 생성됩니다.

### 3-3. MDsveX 제목 추가하기

MDsveX 상단에 **Frontmatter**를 추가하여 제목을 자동으로 추가할 수 있습니다.

```markdown
---
title: Sveltekit Blog
---
```
