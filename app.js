/*
  안내 자료는 이 파일 상단의 GUIDE_DATA만 수정해 추가합니다.
  image: 사진 경로, diagram: 냉장고/보관 위치 도식 경로를 넣으면 자동으로 표시됩니다.
*/
const GUIDE_DATA = {
  hall: {
    label: "홀",
    icon: "🪑",
    description: "손님 응대와 홀 운영에 필요한 내용을 확인하세요.",
    quickInfo: ["출근 09:00", "휴게시간 15:00–16:30", "퇴근 20:30"],
    categories: [
      {
        id: "reservation-waiting", title: "예약·웨이팅", icon: "📋", summary: "예약, 우선입장, 대기 안내", note: "예약과 웨이팅 문의는 아래 기준으로 친절하게 안내합니다.",
        blocks: [
          { title: "예약", items: ["네이버 예약은 평일 오후 5시 한 타임만 가능하며, 하루 4팀을 받습니다.", "그 외 시간은 현장 대기 또는 캐치테이블 앱 이용을 권장합니다.", "캐치테이블 앱에서는 원격 웨이팅 등록이 가능합니다."] },
          { title: "우선입장", items: ["평일 11시·12시·13시에 각 1팀씩 받습니다.", "해당 시간 웨이팅 첫 번째 순서로 입장한다고 안내합니다."] },
          { title: "대기 시간·노쇼", items: ["대기 시간을 물으면 다음 팀일 경우 테이블을 한 번 확인한 뒤 안내합니다.", "식사 시간이 상이하므로 정확한 시간 안내는 어렵다고 기본 안내합니다.", "호출 후 3분이 지나 노쇼 처리된 고객은 다시 오면 웨이팅 재등록을 안내합니다."] }
        ], media: []
      },
      {
        id: "parking", title: "주차 안내", icon: "🚗", summary: "주차장과 주차 유의사항", note: "무작정 불가하다고 하기보다, 가능한 선택지를 친절히 안내합니다.",
        blocks: [
          { title: "기본 안내", items: ["매장 관할 주차장은 없음을 안내합니다.", "공영주차장 이용을 우선 권장합니다.", "건물에 주차한 경우 차량 이동을 부탁드릴 수 있음을 양해 구합니다."] },
          { title: "이용 가능한 주차", items: ["제1 공영주차장: 유료이며 매장과 거리가 있습니다.", "제2 공영주차장: 매장 뒤편에 있으며 08:00–18:00 무료, 18시 이후에는 거주자 전용입니다.", "제3 공영주차장: 회차 시간은 1시간이며 이후 유료 결제가 필요합니다.", "짜투리 주차장을 이용할 수 있습니다."] },
          { title: "주의", items: ["거주자 주차장 또는 길목 주차는 단속될 수 있음을 안내합니다."] }
        ], media: [
          { src: "./assets/public-parking-locations.png", alt: "매장 위치와 제1 제2 제3 공영주차장 위치 지도", caption: "공영주차장 위치 · 제1·제2·제3 공영주차장과 매장 위치를 확인하세요." }
        ]
      },
      {
        id: "seating-setting", title: "착석·테이블 세팅", icon: "🪑", summary: "착석 안내와 세팅 기준", note: "안전한 이동 통로와 원활한 착석을 함께 고려합니다.",
        blocks: [
          { title: "착석", items: ["7인 이상 팀은 테이블을 붙입니다.", "상황상 함께 앉기 어려우면 따로 착석을 양해 구합니다.", "한 번에 앉기를 원하면 웨이팅을 안내합니다."] },
          { title: "유아용 의자", items: ["이동 통로를 제외한 안쪽에 배치합니다.", "손님과 부딪힐 위험이 있음을 항상 확인합니다."] },
          { title: "테이블 세팅", items: ["톡 게시판을 확인해 세팅 기준을 따릅니다."] }
        ], media: []
      },
      {
        id: "ordering-menu", title: "주문·메뉴 안내", icon: "🍝", summary: "주문 확인과 요청사항 응대", note: "주문 전후로 메뉴와 요청사항을 한 번 더 명확히 확인합니다.",
        blocks: [
          { title: "주문 확인", items: ["“주문하시겠어요?”라고 먼저 여쭙습니다.", "주문 메뉴는 반드시 한 번 더 확인합니다.", "파스타는 큰 포크, 파게리·리조또는 큰 스푼, 샐러드는 칼과 포크를 제공합니다."] },
          { title: "맵기·제공 가능 사항", items: ["토마토 해장 파스타·스파이시 토마토 리조또는 기본 신라면 정도의 맵기입니다. 맵기 조절은 가능하지만 안 맵게는 불가합니다.", "위 두 메뉴는 새우를 따로 제공할 수 있습니다.", "구운 알배추 샐러드는 고추기름을 따로 제공할 수 있습니다.", "팬포카치아는 손님이 요청하면 2–3개 제공할 수 있으며 상황에 맞춰 조절합니다."] },
          { title: "메뉴별 확인", items: ["게우크림 스파게티·리조또: 트러플 오일은 빼거나 따로 제공 가능합니다.", "게우크림 스파게티 계란소스에는 쯔유 1–2바퀴와 후추가 들어갑니다.", "전복비빔밥: 날치알·수비드 계란·아보카도를 따로 제공할 수 있습니다.", "간장전복화이트라구 마팔디네: 마팔디네는 꼬불꼬불하고 넓적한 면이며, 전복은 고기와 함께 다져 들어갑니다.", "고사리크림 파게리: 파게리는 짧고 넓적한 숏파스타입니다."] },
          { title: "추가 메뉴 확인", items: ["전복 추가 시 간장에 절인 전복장인지, 버터에 구운 버터구이 전복인지 확인합니다.", "수비드 계란 추가 시 아무것도 뿌리지 않은 계란인지, 쯔유가 들어간 계란인지 확인합니다."] }
        ], media: []
      },
      {
        id: "serving-lines", title: "음식 제공 멘트", icon: "🗣️", summary: "메뉴 전달 시 안내 문구", note: "음식을 놓은 뒤, 메뉴에 맞는 짧고 정확한 안내를 덧붙입니다.",
        blocks: [
          { title: "메뉴별 멘트", items: ["전복비빔밥: “드시는 방법은 메뉴판 하단을 확인해주시면 됩니다.”", "반찬: “더 필요하시면 말씀해주세요.”", "전복게우크림스파게티: 계란소스를 안내한 뒤 “소스를 풀어서 면을 찍어 드시면 됩니다.”", "간장전복화이트라구: “레몬 뿌려서 섞어드시면 됩니다.”", "알배추 샐러드: “끝부분을 잘라서 드시면 됩니다.”"] },
          { title: "고사리크림 파게리", items: ["음식 제공 시 별도 안내는 하지 않습니다.", "버터에 대해 물으면 “다시마 버터”라고 안내합니다."] }
        ], media: []
      },
      {
        id: "service-issues", title: "기본 응대·문제 상황", icon: "🤝", summary: "클레임과 이물질 대응", note: "불편 상황에서는 먼저 사과하고, 즉시 관리자에게 연결합니다.",
        blocks: [
          { title: "기본 응대", items: ["테이블에 용무가 있을 때는 “실례하겠습니다.”라고 말한 뒤 행동합니다.", "클레임이 있으면 “죄송합니다.”라고 말씀드린 후 관리자를 통해 해결합니다."] },
          { title: "음식 이물질", items: ["먼저 죄송하다는 말씀을 드립니다.", "관리자에게 바로 보고한 뒤 안내에 따라 조치합니다."] }
        ], media: []
      },
      {
        id: "opening-closing", title: "오픈·마감", icon: "☀️", summary: "런치·디너 업무 체크", note: "교대 전후로 청결·정리·영업 상태를 빠짐없이 확인합니다.",
        blocks: [
          { title: "런치 오픈", items: ["박스는 테이프를 모두 제거해 펴서 버립니다.", "스티로폼은 테이프를 모두 제거하고 한 번에 묶어 테이프로 붙여 버립니다.", "홀 청소기·주방 쓸기 후 전반적으로 물걸레질합니다.", "쓰레기통 봉투를 채우고, 테이블·의자를 닦아 세팅합니다.", "아이 의자·웨이팅 의자를 닦고, 피클 등 홀 반찬을 준비합니다.", "설거지와 주방은 항상 청결하게 유지합니다."] },
          { title: "런치 마감", items: ["주방 마감은 평일 14:00, 주말 14:15입니다.", "캐치테이블을 운영종료로 바꾸고 바깥 팻말을 돌립니다.", "피클·고추·잼·간장·쯔유를 냉장고에 넣고 작업대를 정리합니다.", "주방은 쓸고, 홀은 청소기와 전반적인 물걸레질을 합니다.", "주방에서 나온 설거지는 마친 뒤 주방으로 옮기고 테이블·의자를 닦습니다."] },
          { title: "디너 오픈·마감", items: ["디너 오픈은 런치 오픈 준비와 동일합니다.", "주방 마감은 19:30입니다.", "홀은 청소기 후 테이블·의자를 닦고, 주방은 쓸고 닦습니다.", "웨이팅 기기·멀티탭을 들여놓고 충전 상태를 확인합니다.", "남은 간장은 바트에 덜어 설거지하고, 쓰레기통 옆 벽면과 바닥을 닦습니다.", "개수대·선반을 알코올로 닦고, 음식물·일반·재활용 쓰레기를 버린 뒤 쓰레기통을 헹굽니다.", "화장실 쓰레기통을 확인하고, 식세기 거름망을 씻고 막대를 뺀 뒤 전원을 끕니다.", "얼음을 비우고 알코올로 세척하며, 음료 쇼케이스 불을 끕니다.", "삶은 행주를 널고 에어컨·선풍기를 확인합니다."] }
        ], media: []
      },
      {
        id: "packing-drinks", title: "포장·홀 관리", icon: "🥤", summary: "포장 용기와 음료 제조", note: "포장 용기와 음료 구성품을 빠짐없이 확인합니다.",
        blocks: [
          { title: "포장", items: ["김·빵은 종이봉투에 포장합니다.", "피클·간장·고추·잼은 플라스틱 원형통에 담습니다.", "전복장은 스티커를 붙여 검은 보냉백과 아이스팩 1개를 함께 제공합니다.", "사용한 아이스팩은 냉동실에 다시 채워놓습니다."] },
          { title: "음료", items: ["에이드는 원액 3펌프(60g), 얼음, 애플민트 2잎, 칠성사이다를 섞습니다.", "에이드는 인원수에 맞는 빨대를 제공합니다.", "탄산음료는 얼음컵·레몬·인원수에 맞는 빨대를 제공합니다."] }
        ], media: []
      },
      {
        id: "payment", title: "결제", icon: "💳", summary: "포인트·분할결제·영수증", note: "결제 방법과 최종 금액을 고객에게 명확히 설명합니다.",
        blocks: [
          { title: "포인트 사용", items: ["고객이 ‘사용/조회’ 버튼을 누르고 전화번호를 입력합니다.", "5,000포인트 이상부터 사용 가능하며 사용할 포인트를 입력합니다.", "문자로 온 인증번호를 확인합니다.", "포스기에서 ‘주문할인’ → 할인의 ‘현금’을 누르고 사용 포인트를 입력한 뒤 확인합니다.", "할인 후 금액을 설명하고 결제합니다."] },
          { title: "분할결제", items: ["카드 결제는 ‘받은 금액’에 원하는 금액을 입력한 후 나머지를 결제합니다.", "현금과 카드를 함께 사용하면 현금을 먼저 결제합니다.", "진행이 어려우면 복합결제를 이용합니다."] },
          { title: "간략영수증", items: ["계산 전에 상단의 ‘간략영수증’을 체크합니다.", "결제 후에는 체크를 풀어둡니다."] }
        ], media: []
      }
    ]
  },
  kitchen: {
    label: "주방",
    icon: "🍳",
    description: "조리와 재료 관리에 필요한 내용을 확인하세요.",
    categories: [
      {
        id: "pasta-risotto", title: "핫 파트(화구) 조리순서", icon: "🍝", summary: "7개 메뉴 조리 순서", note: "아래 레시피는 화구 조리 기준입니다. 계량과 농도는 매장 기준에 맞춰 최종 확인합니다.",
        recipes: [
          { title: "게우 크림 스파게티니(게우)", ingredients: ["게우소스 1 (3oz)", "크림 1 (6oz)", "파마산 1", "마카다미아 1", "올리브오일 1 (1/2oz)", "스파게티니"], steps: ["팬에 게우소스·크림·파마산·마카다미아·올리브오일을 모두 넣고 불에 올립니다.", "불에 올릴 때 와인 2바퀴와 후추 2번을 넣습니다.", "끓어오르면 육수 한 국자(4oz)와 스파게티니를 넣고 면이 잘 풀리도록 섞어줍니다.", "농도가 잡히면 면을 말아 플레이팅합니다."], finish: "불을 끈 뒤 트러플오일·들기름 혼합 오일을 둘러 만테합니다." },
          { title: "게우 크림 리조또(리조또)", ingredients: ["게우소스 1 (3oz)", "크림 1 (6oz)", "파마산 1", "마카다미아 1", "올리브오일 1 (1/2oz)", "밥"], steps: ["팬에 게우소스·크림·파마산·마카다미아·올리브오일을 모두 넣고 불에 올립니다.", "불에 올릴 때 와인 2바퀴와 후추 2번을 넣습니다.", "끓어오르면 육수 한 국자(4oz)와 밥을 넣고 밥이 잘 풀리도록 섞어줍니다.", "농도가 잡히면 접시 모양에 맞춰 플레이팅합니다."], finish: "불을 끈 뒤 트러플오일·들기름 혼합 오일을 둘러 만테합니다." },
          { title: "토마토 해장 파스타 (해장)", ingredients: ["토마토소스 1 (5oz)", "다데기 1 (15ml)", "파마산 1", "올리브오일 1 (1/2oz)", "스파게티니", "모짜렐라치즈 1스푼"], steps: ["팬에 토마토소스·다데기·파마산·올리브오일을 모두 넣고 불에 올립니다.", "불에 올릴 때 후추 2번을 넣습니다.", "끓어오르면 육수 한 국자 반과 스파게티니를 넣고 면이 잘 풀리도록 섞어줍니다.", "농도가 잡히면 모짜렐라치즈 한 스푼을 넣고 면으로 치즈를 덮습니다.", "면을 말아 플레이팅하고 가운데에 계란 위치를 잡습니다."], finish: "플레이팅 참고: 모짜렐라 → 계란 → 새우 4p → 루꼴라 → 그라나 → 엑스트라버진" },
          { title: "스파이시 토마토 리조또(스파이시)", ingredients: ["토마토소스 1 (5oz)", "다데기 1 (15ml)", "파마산 1", "올리브오일 1 (1/2oz)", "밥", "모짜렐라치즈 1스푼"], steps: ["팬에 토마토소스·다데기·파마산·올리브오일을 모두 넣고 불에 올립니다.", "불에 올릴 때 후추 2번을 넣습니다.", "끓어오르면 육수 한 국자 반과 밥을 넣고 밥이 잘 풀리도록 섞어줍니다.", "농도가 잡히면 모짜렐라치즈 한 스푼을 넣고 밥으로 치즈를 덮습니다.", "접시 모양에 맞춰 플레이팅하고 가운데에 계란 위치를 잡습니다."], finish: "플레이팅 참고: 모짜렐라 → 계란 → 새우 4p → 루꼴라 → 그라나 → 큐브버터 → 엑스트라버진" },
          { title: "참나물 알리오올리오(알리오)", ingredients: ["마늘오일 1 (1/2oz)", "페퍼론치노 3–4알", "파마산 1", "버터 1조각", "스파게티니", "버터전복 3조각", "마늘소스 1 (1/2oz)"], steps: ["팬에 마늘오일·페퍼론치노·파마산·버터를 모두 넣고 불에 올립니다.", "불에 올릴 때 와인 2바퀴와 후추 2번을 넣습니다.", "끓어오르면 육수 두 국자와 스파게티니를 넣고 면이 잘 풀리도록 섞어줍니다.", "농도가 잡히면 불을 끄고 버터전복 3조각과 마늘소스 1을 넣어 에멀젼합니다.", "접시 모양에 맞춰 플레이팅합니다."], finish: "플레이팅 참고: 참나물 → 그라나 → 엑스트라버진 → 레몬" },
          { title: "간장전복 화이트라구 마팔디네(라구)", ingredients: ["라구페이스트 (해동)", "크림 1 (6oz)", "마늘오일 1 (1/2oz)", "파마산 1", "마팔디네면"], steps: ["해동한 라구페이스트·크림·마늘오일·파마산을 팬에 모두 넣고 불에 올립니다.", "불에 올릴 때 와인 2바퀴와 후추 2번을 넣습니다.", "끓어오르면 육수 한 국자(4oz)와 마팔디네면을 넣고 면이 잘 풀리도록 섞어줍니다.", "농도가 잡히면 접시 모양에 맞춰 플레이팅합니다."], finish: "플레이팅 참고: 케일 → 엑스트라버진 → 그라나 → 레몬" },
          { title: "고사리크림 파케리(고사리)", ingredients: ["표고버섯 6–7조각", "크림 1 (6oz)", "파마산 1", "고사리페이스트 (해동)", "파케리면"], steps: ["고사리페이스트를 해동한 뒤 표고버섯·크림·파마산·고사리페이스트를 팬에 모두 넣고 불에 올립니다.", "불에 올릴 때 와인 2바퀴와 후추 2번을 넣고 표고버섯의 수분을 날립니다.", "끓어오르면 육수 한 국자(4oz)와 파케리면을 넣고 면이 잘 풀리도록 섞어줍니다.", "농도가 잡히면 접시 모양에 맞춰 플레이팅합니다."], finish: "플레이팅 참고: 케일 → 트러플오일 → 그라나 → 다시마버터" }
        ], media: [
          { src: "./assets/bat-fridge-setting.png", alt: "핫 파트 서비스용 바트 냉장고 세팅 위치", caption: "바트 냉장고 세팅 위치 · 이미지를 누르면 크게 볼 수 있습니다." }
        ]
      },
      {
        id: "opening", title: "오픈 준비", icon: "🔪", summary: "조리 전 준비와 점검", note: "오픈 전 필요한 재료와 기물을 시간 안에 준비하고, 전날 작업 상태를 함께 확인합니다.",
        blocks: [
          { title: "10시까지", items: ["발주를 정리합니다.", "전날 미리 체크한 오픈 작업을 진행합니다: 전복 세척·찌기, 면 삶기, 김 굽기, 야채 세척 등.", "쌀을 불리고 밥을 짓습니다.", "모짜렐라·파마산·마늘오일·크림·참깨드레싱 등을 포션합니다.", "비빔밥 재료를 세팅하고 바트 냉장고를 채웁니다.", "기물을 정리합니다."] },
          { title: "10시 40–50분 전까지", items: ["아보카도를 컷팅합니다.", "알배기를 굽고 밥 드레싱을 만듭니다.", "새우와 전복을 굽습니다.", "케일을 데치고 깻잎·참나물을 썹니다.", "화장실 상태를 확인합니다."] }
        ], media: []
      },
      { id: "storage", title: "냉장고·재료 위치", icon: "🧊", summary: "재료별 보관 위치", note: "냉장·냉동 재료와 바트의 보관 위치를 도안에서 확인하세요.", media: [
        {
          src: "./assets/refrigerator-layout.png",
          alt: "홀과 주방의 냉장고, 냉동고, 바트 보관 위치 도안",
          caption: "냉장고 위치 및 재료 보관 도안 · 이미지를 누르면 크게 볼 수 있습니다."
        }
      ] },
      {
        id: "equipment", title: "기물 위치", icon: "🍽️", summary: "도구와 용기 찾기", note: "주방 기물의 위치를 도안에서 확인하세요.",
        media: [
          { src: "./assets/kitchen-equipment-layout.png", alt: "주방 기물 위치와 작업 공간 도안", caption: "주방 기물 위치 도안 · 이미지를 누르면 크게 볼 수 있습니다." }
        ]
      },
      {
        id: "closing", title: "마감·청소", icon: "🧼", summary: "마감 순서와 위생", note: "추가 오더 여부를 확인한 뒤 기물·재료·작업 공간 순서로 정리하고, 퇴근 전 설비를 점검합니다.",
        blocks: [
          { title: "기본 마감", items: ["마감 후 추가 오더가 없으면 기물을 정리합니다.", "오븐을 끕니다.", "재료를 정리하고 냉장고와 작업대를 닦습니다."] },
          { title: "런치 주방 마감", items: ["모두 닦은 후 다음 작업을 시작합니다."] },
          { title: "디너 주방 마감", items: ["모두 닦은 후 냉장고 서리를 제거합니다.", "상황에 따라 홀 마감을 돕습니다.", "퇴근 전 가스·전등·에어컨을 끕니다.", "냉장고 온도와 문이 잘 닫혔는지 확인합니다."] }
        ], media: []
      }
    ]
  }
};

const app = document.querySelector("#app");
const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogCaption = document.querySelector("#dialog-caption");
let currentView = { screen: "home" };

const mediaMarkup = (media = []) => {
  if (!media.length) {
    return `<div class="media-placeholder"><span>＋</span><strong>사진·도식 추가 예정</strong><small>GUIDE_DATA의 media에 경로를 넣어주세요.</small></div>`;
  }
  return media.map(item => `
    <figure class="media-figure">
      <button type="button" data-open-image="${item.src}" data-caption="${item.caption || ""}">
        <img src="${item.src}" alt="${item.alt || item.caption || "안내 이미지"}" />
      </button>
      ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
    </figure>`).join("");
};

const recipeMarkup = (recipes = []) => recipes.map(recipe => `
  <details class="recipe-card">
    <summary><span>🍳</span><strong>${recipe.title}</strong><span class="recipe-open">보기</span></summary>
    <div class="recipe-content">
      <section><h2>재료</h2><ul class="ingredient-list">${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul></section>
      <section><h2>조리 순서</h2><ol class="cooking-steps">${recipe.steps.map(item => `<li>${item}</li>`).join("")}</ol></section>
      ${recipe.finish ? `<p class="recipe-finish"><strong>마무리</strong>${recipe.finish}</p>` : ""}
    </div>
  </details>`).join("");

function render() {
  const { screen, sectionId, categoryId } = currentView;
  if (screen === "home") {
    app.innerHTML = `
      <div class="brand"><span class="brand-mark">✦</span><span>우리 매장 안내</span></div>
      <section class="welcome" aria-labelledby="main-title">
        <p class="eyebrow">STAFF HANDOVER</p>
        <h1 id="main-title">오늘 필요한 일을<br>바로 찾아보세요.</h1>
        <p class="intro">근무 공간을 선택하면 업무별 안내를 확인할 수 있어요. 사진과 위치 도식은 각 항목 안에 추가됩니다.</p>
        <div class="space-picker">
          ${Object.entries(GUIDE_DATA).map(([id, section]) => `
            <button class="space-card ${id}" type="button" data-section="${id}">
              <span class="space-card-inner"><span class="space-icon">${section.icon}</span><h2>${section.label}</h2><p>${section.description}</p><span class="arrow">→</span></span>
            </button>`).join("")}
        </div>
      </section>`;
  } else if (screen === "section") {
    const section = GUIDE_DATA[sectionId];
    app.innerHTML = `
      <div class="brand"><span class="brand-mark">✦</span><span>우리 매장 안내</span></div>
      <section aria-labelledby="section-title">
        <header class="section-header">
          <button class="back-button" type="button" data-go-home aria-label="처음으로 돌아가기">←</button>
          <div class="section-header-content"><p class="eyebrow">${section.label.toUpperCase()} GUIDE</p><h1 id="section-title">${section.label} 안내</h1><p class="section-description">${section.description}</p></div>
        </header>
        ${section.quickInfo ? `<aside class="quick-info" aria-label="근무 시간"><strong>근무 시간</strong>${section.quickInfo.map(item => `<span>${item}</span>`).join("")}</aside>` : ""}
        <div class="category-list">
          ${section.categories.map(category => `<button class="category-card" type="button" data-category="${category.id}"><span class="category-icon">${category.icon}</span><h2>${category.title}</h2><p>${category.summary}</p></button>`).join("")}
        </div>
        <button class="home-link" type="button" data-go-home>처음으로</button>
      </section>`;
  } else {
    const section = GUIDE_DATA[sectionId];
    const category = section.categories.find(item => item.id === categoryId);
    app.innerHTML = `
      <div class="brand"><span class="brand-mark">✦</span><span>우리 매장 안내</span></div>
      <section aria-labelledby="detail-title">
        <header class="detail-header"><button class="back-button" type="button" data-back-section aria-label="${section.label} 목록으로 돌아가기">←</button><div><p class="breadcrumb">${section.label} · ${category.title}</p><h1 id="detail-title">${category.icon} ${category.title}</h1></div></header>
        <div class="content-grid">
          <article class="info-card notice"><h2>안내</h2><p>${category.note}</p></article>
          ${(category.blocks || []).map(block => `<article class="info-card guide-block"><h2>${block.title}</h2><ul>${block.items.map(item => `<li>${item}</li>`).join("")}</ul></article>`).join("")}
          ${category.recipes?.length ? `<section class="recipe-list" aria-label="메뉴별 조리 레시피">${recipeMarkup(category.recipes)}</section>` : ""}
          <article class="info-card"><h2>사진·위치 도식</h2><div class="media-grid">${mediaMarkup(category.media)}</div></article>
        </div>
        <button class="home-link" type="button" data-go-home>처음으로</button>
      </section>`;
  }
  app.focus();
}

app.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.section) currentView = { screen: "section", sectionId: target.dataset.section };
  if (target.dataset.category) currentView = { screen: "detail", sectionId: currentView.sectionId, categoryId: target.dataset.category };
  if (target.hasAttribute("data-go-home")) currentView = { screen: "home" };
  if (target.hasAttribute("data-back-section")) currentView = { screen: "section", sectionId: currentView.sectionId };
  if (target.dataset.openImage) {
    dialogImage.src = target.dataset.openImage;
    dialogImage.alt = target.querySelector("img")?.alt || "안내 이미지";
    dialogCaption.textContent = target.dataset.caption;
    dialog.showModal();
    return;
  }
  render();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog || event.target.closest("[data-close-dialog]")) dialog.close();
});

render();
