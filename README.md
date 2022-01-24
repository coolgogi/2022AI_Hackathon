# 2022AI_Hackathon

## 사용자 얼굴 인식 데이터 및 설문 정보를 통한 맞춤형 자생식물 씨앗 판매 키오스크

### 제안 배경

<아이디어 제안 동기> <br>

‘동물 닮은꼴 찾기’, ‘연예인 닮은꼴 찾기’ 등 이와 비슷한 서비스를 이용해본 적이 있는가? 스마트폰 카메라로 자신의 얼굴을 직접 촬영한 뒤 10여 초를 기다리면 자신과 가장 비슷한 이미지를 찾아주는 단순한 서비스가 큰 회자가 되었던 적이 있다.
이는 사람들의 이목을 집중시킬 수 있으며, 간단하게 직접 체험해볼 수 있는 활동을 제시함으로써 가장 효율적인 광고효과를 만들 수 있다. 동시에 생소하게 느껴지는 자생식물과 자생식물기반 파생사장이 대중성을 확보할 수 있는 기회가 될 것이라고 판단한다.
제주도는 전 연령대의 국민에게 가장 사랑받는 관광지 중 하나이다. 특히, 학생시절 제주도를 방문할 기회가 많은데, 대부분 관광명소 탐방, 박물관 관람 등 현장체험학습에 목적이 있다.
따라서 초등학교 수학여행부터 고등학교 졸업여행에 이르는 학생 관광객은 제주도의 꾸준한 고객이었음을 알 수 있다. 천지연폭포, 성산일출봉, 백록담 등 자연명소를 비롯하여 여러 박물관, 식물원은 학생 단체 코스의 빠질 수 없는 관광지이다.
팀원 3명이 모두 비슷한 여행의 경험을 가지고 있었고, 인터뷰를 통해 들어본 지인들의 답변도 비슷했다.
본 팀은 생소하게 느껴지는 자생식물의 이미지에 대중성을 가져옴과 동시에 수익을 낼 수 있는 비즈니스 모델이 무엇이 있을지에 대해 고민하게 되었다.
그 결과 ‘사용자 얼굴 인식 데이터 및 설문 정보를 통한 맞춤형 자생식물 씨앗 판매 키오스크’라는 모델을 구상할 수 있었다.

### 아이디어 핵심내용

<아이디어 사업화 전략> <br>

구체적인 아이디어 구현 시뮬레이션은 다음과 같다.

1. 키오스크 설치를 위해 관광지 별 연령층 방문자 데이터를 수집하여 학생 고객, 아이 동반 고객이 많은 관광지 10~20곳을 선정한다.
2. 공항, 박물관, 식물원의 경우 출구 근처, 관광 명소의 경우 안내소 근처에 키오스크를 설치하여 운영한다.
3. 기기 에러나 문제가 있을 경우 원격처리 또는 관계자의 호출을 받아 기기 관리를 진행한다.
4. 씨앗 부족의 경우 관계자가 충전할 수 있도록 한다. 본 사업은 자생식물에 대한 관심을 높이고 실제 자신과 일정부분 연관성이 있는 식물의 씨앗을 공급함으로써 사용자에게 특별한 체험이자 추억이 될 수 있을 것으로 예상한다. <br>

<아이디어 구현 전략> <br>

키오스크 결제 후 키오스크에 달린 카메라로 사용자 사진을 찍는다. 자세한 방식은 ‘인생네컷’서비스와 비슷하게 진행된다(타이머 촬영).
그리고 이어서 키오스크 디스플레이에 보이는 객관식 설문 문항 5가지에 대한 답변을 작성한다.
그 사이 촬영했던 사진 데이터를 서버로 보내 미리 학습시킨 알고리즘을 통해 분석한다.
가장 유사한 얼굴 형태(face label)에 대해 1차로 예측하고 5가지 설문 답변에 대한 정보 데이터에 가중치를 더해 2차 최종으로 결정한다.
결정된 값에 맞는 자생식물의 씨앗이 키오스크로 공급한다. <br>

1. 당신이 가장 좋아하는 색깔은? : 초록(0) - 하양(1) - 노랑(2) - 빨강(3) - 보라(4)
2. 당신이 가장 좋아하는 계절은? : 봄(0) - 여름(1) - 가을(2) - 겨울(3)
3. 당신이 가장 좋아하는 단어는? : 시원(0) - 수수(1) - 포근(2) - 화려(3)
4. 당신의 MBTI 앞자리 두 개는? : 없음(0) - ES(1) - EN(2) - IS(3) - IN(4)
5. 당신의 MBTI 뒷자리 두 개는? : 없음(0) - TJ(1) - TP(2) - FJ(3) - FP(4) <br>

사진 데이터 및 설문 정보 데이터 기반의 식물 분류기능이라고 이해할 수 있다.
개인에게 잘 어울리는 맞춤형 자생식물을 파악하기 위해서는 다음과 같은 과정이 필요하다. 먼저, 설문조사를 통해 나온 정보를 처리하는 방식과 유사하게 사람의 얼굴 이미지를 5~10가지로 나누어 범주화한다.
이미지와 설문을 같이 X값에 넣으면 이미지가 너무 커서 설문의 영향력이 상대적으로 줄어들기 때문이다.
얼굴 이미지도 마치 설문처럼 분류하여 비슷한 정도의 영향만 전달될 수있도록 유도한다.

### 독창성 및 차별성

<독창성> <br>

자생식물 씨앗 키오스크는 주요 고객층을 확보하고 있다.
바로 10대 학생들, 10대미만 아동과 동반한 3~40대 부모들이다.
직접 체험할 수 있는 교육의 기회를 제공하고, 제주도에 대한 긍정적인 추억으로 남길 수 있으며, 가장 오래갈 수 있는 기념품의 기능도 할 수 있다.
호기심을 자극하고, 학습효과도 줄 수 있다는 점에서 차별성을 가진다. <br>

<사업경쟁력>

키오스크의 장점은 노동력과 인건비를 최소화할 수 있다는 점이다.
시간과 장소의 제약을 최소화할 수 있다는 점도 중요한 장점 중 하나이다.
이는 안정적이면서 고정적인 수익을 내는데 가장 중요한 점이라고 할 수 있다.
키오스크가 상용화되면서 기기 활용 속도가 빨라지고, 순환률을 높이는 효과로 이어졌기 때문에 수익성 모델로서 경쟁력을 갖는다.
또한, 제주도라는 특별한 관광지, 그 중에서도 자생식물 키오스크와 연관이 있는 명소들 위주로 기기를 설치한다면 소비자의 의사결정에 진입장벽을 낮출 수 있을 것으로 예상한다.

### 기대효과

1. 관광명소를 방문객은 기념품을 구매하거나 명소에서 사진을 찍는 방식으로 추억을 남긴다. 너무 전형적인 방법이지만 대부분의 관광지가 그렇듯, 사람이 많고 정신이 없기 때문에 그냥 하나의 코스처럼 정형화되어있다. 우리 팀의 씨앗 키오스크는 고객이 관광지에서의 추억을 더 오래 간직할 수 있도록 서비스를 제공한다.

2. 안정적인 수익 창출이 가능하다. 1회 2,000원 요금을 받고 씨앗 10개(3g기준)을 공급한다. 현재 식물 도매 플랫폼에서 거래되는 자생식물 싸앗의 가격은 1kg당 15,000~50,000원이다. 1kg 충전 후 333회 씨앗을 공급할 수 있고, 최소 1,500원\*333회 = 499,500원이다(씨앗 한 종류 기준). 냉장기능이 탑재된 키오스크의 거래가격은 2,500,000원이다. 따라서, 고정적인 수익 창출이 충분히 가능할 것으로 예상된다.

3. 자생식물에 대한 직접적, 간접적 홍보효과가 있을 것으로 예상된다. 일차원적인 학습을 통한 정보 제공이 아니기 때문에 10대 청소년층에게 접근성 높게 다가갈 수 있고, 제주도 관광명소 곳곳에 설치함으로써 자생식물 및 자생식물을 기반으로 파생되는 시장에 대한 대중적 호감도도 높아질 것으로 기대한다.
