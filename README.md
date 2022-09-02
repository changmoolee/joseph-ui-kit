# joseph-ui-kit

## Storybook

배포 url: https://joseph-ui-kit.netlify.app
<br><br>

## 개요
#### `joseph-ui-kit`는 오픈 소스로써, React 기반으로 제작된 ui-kit 패키지입니다.<br>
#### 사전 제작된 다양한 ui 키트를 React 프로젝트에 활용해 보세요!
<br><br>


## 사용 방법

#### 1. npm install 명령어를 입력하여 패키지를 다운로드합니다.
<pre><code>npm install joseph-ui-kit</code></pre><br>
#### 2. 배포된 Storybook에서 필요한 기능과 사용 방법(How to use)을 확인합니다.

![image](https://user-images.githubusercontent.com/84559872/188084889-8c456694-0709-4023-82d6-d2fbc6815b2e.png)
<br><br>
#### 3. 원하는 기능을 컴포넌트에 import하여 사용하면 됩니다. 

#### 예시)
```
import { Accordion, Button } from "joseph-ui-kit";

return (
  <Accordion title="정렬">
    <Button />
  </Accordion>
);
```
<br><br>

## Tech Stack
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Emotion-d16bc2?style=flat-square&logo=Emotion&logoColor=white"/></a><br><br>


## 기능
#### 자세한  설명 및 상호작용은 배포된 storybook에서 확인해 주세요.
배포 url: https://joseph-ui-kit.netlify.app

### Accordion
Accordion은 헤더와 관련된 콘텐츠를 표시하거나, 숨기기 위해 클릭할 수 있는 수직으로 쌓인 헤더 목록입니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188091865-88042b19-8a3b-46a5-8774-2c55d1d5267e.png)

<br><br>
### Button
Button은 클릭 가능한 요소로 특정 작업을 트리거하는 데 사용됩니다. Button은 사용자가 다양한 방식으로 페이지와 상호 작용할 수 있도록 합니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188091324-c50b05e1-2de9-4c10-8539-11bdde78f29c.png)
<br><br>
### DropDown
DropDown은 사용자가 하나 또는 여러 옵션을 선택할 수 있는 옵션 목록을 제공합니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188091547-9b7ba183-d67e-42e2-8c27-b36d1e37474d.png)

<br><br>
### FileUploader
FileUploader를 사용하면 사용자가 이미지 파일을 특정 위치에 업로드할 수 있습니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188092197-00fab504-0f54-472a-bf32-3ecfa8b67588.png)

<br><br>
### FileUploaderDropContainer
FileUploaderDropContainer를 사용하면 사용자가 이미지 파일을 특정 위치에 업로드할 수 있습니다.<br>
사용자는 이미지 파일을 해당 ui에 드래그하여 업로드가 가능합니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188092373-e8b3c6b1-0f06-408d-a31b-3f6483503dd0.png)

<br><br>
### Loading
Loading은 사용자에게 데이터 fetching 등의 활동이 완료될 때까지 기다리라고 알려주는 역할을 합니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188087888-930c8e02-e834-4128-a726-d965a3efc38b.png)

<br><br>
### Modal
Modal은 애플리케이션의 기본 창 상단에 있는 큰 UI 요소입니다.<br>
Modal을 사용하면 맞춤형 콘텐츠 세트를 사용할 수 있습니다.'children' prop은 Modal의 body에 매핑됩니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188093124-2a12005d-0ba2-49f0-b2a4-04a55c1a191a.png)

<br><br>
### Search
Search는 웹사이트에 대한 검색 보기를 쉽고 유연하게 만드는 방법을 제공합니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188093473-48a8876b-2862-4d1c-9192-30aa11b9a8b9.png)

<br><br>
### SkeletonUI
SkeletonUI는 데이터가 로드되기 전에 콘텐츠 미리보기를 표시하여, 사용자가 로드를 기다리게 합니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188093652-2f815100-1c1b-4aec-9510-9d836e63931a.png)

<br><br>
### Tabs
Tabs는 사용자가 Tab 목록을 눌러 원하는 대상의 섹션으로 빠르게 이동할 수 있게 해줍니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188094030-a75dbadf-e28a-4c70-a0e5-1566586861d3.png)

<br><br>
### TextArea
TextArea는 사용자가 키보드를 통해 앱에 텍스트를 입력하기 위한 기본 구성 요소입니다. 사용자가 여러 줄의 텍스트를 입력할 수 있습니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188094199-fc2ba306-caf7-4a8b-89e8-cffbd030c2ba.png)

<br><br>
### TextInput
TextInput은 사용자가 키보드를 통해 앱에 텍스트를 입력하기 위한 기본 구성 요소입니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188094336-6790045f-3cbe-4ad1-b907-1badc85325e3.png)

<br><br>
### Toggle
Toggle은 ON 및 OFF와 같이 상호 배타적인 두 가지 상태가 있는 UI 컨트롤입니다.<br>
사용자는 두가지 상태에 따라 원하는 설정을 택할 수 있습니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188094446-662f0ab9-f00f-46f2-86dd-db1f341e1000.png)

<br><br>
### Typography
IBM Plex를 서체로 사용합니다.<br><br>

