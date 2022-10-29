# 🗓 To Do 리스트

### 📍 To Do 리스트 소개
> 자신만의 카테고리를 커스텀하여 할일 목록을 저장할 수 있는 투두리스트 앱입니다.
>
> ### [Demo](https://talentforest.github.io/nomad-react-masterclass/)

### ✨ 프로젝트에 사용한 스택 ✨

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/recoil-007af4?style=for-the-badge&logo=recoil&logoColor=white">
</div>

<br/>

<img width="60%" alt="스크린샷 2022-10-29 오후 11 33 40" src="https://user-images.githubusercontent.com/91457443/198837803-d77272fd-cf7a-4416-9f01-5a838d364979.png">

### 📍 To Do 리스트 기능 소개
> <strong> 1. 카테고리를 직접 추가할 수 있습니다.</strong>

> <strong> 2. 추가한 할일 목록은 진행중인 일, 완료한 일로 변경하거나 삭제할 수 있습니다.</strong>
>
> * Recoil의 `selector` 기능을 활용하여 할일 목록과 진행중인 일, 완료한 일을 구분합니다.

> <strong> 3. 추가한 할일 목록은 로컬스토리지에 저장됩니다.</strong>
>
> * Recoil의 `effects` 기능을 통해 저장합니다.

### 📍 To Do 리스트 후기

To Do 리스트를 만들면서 Recoil이라는 React 상태 관리 라이브러리에 더욱 친숙해진 것 같습니다. 또한 Recoil이 제공하는 selector나 effects를 사용하면서 어떤식으로 Recoil을 활용해야할지 감을 잡게 되었습니다. 특히 하나의 상태로 여러가지 값을 창출해낼 수 있는 selector는 굉장히 유용한 기능이었습니다. 하지만 상태값 atom이 변경되면 그 상태에서 파생된 selector들 모두 다시 렌더링되니 이 부분은 주의해서 적절하게 사용해야될 것 같습니다. 만약 간단한 React 프로젝트에서 상태 관리가 필요하다면 Recoil은 좋은 선택이라고 느꼈습니다.
