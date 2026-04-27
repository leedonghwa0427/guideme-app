// 달력 날짜 렌더링
const caltoday = new Date(2024, 8, 10); // 9월 10일 기준
const year = caltoday.getFullYear();
const month = caltoday.getMonth();

const days = ["일", "월", "화", "수", "목", "금", "토"];
const weekDay = days[caltoday.getDay()];

document.getElementById("cal-title").textContent =
  `${month + 1}월 ${caltoday.getDate()}일 ${weekDay}요일`;

function renderCalendar() {
  const container = document.getElementById("cal-days");
  container.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay(); // 0=일
  // 월요일 시작이므로 offset 계산
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();

  // 이전 달 날짜
  for (let i = startOffset - 1; i >= 0; i--) {
    const el = document.createElement("div");
    el.className = "cal-day other-month";
    el.textContent = prevDays - i;
    container.appendChild(el);
  }

  // 이번 달 날짜
  for (let d = 1; d <= daysInMonth; d++) {
    const el = document.createElement("div");
    el.className = "cal-day";
    if (d === caltoday.getDate()) el.classList.add("today");
    el.textContent = d;
    el.addEventListener("click", (e) => selectDay(e));
    container.appendChild(el);
  }

  // 다음 달 날짜
  const total = startOffset + daysInMonth;
  const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= remaining; d++) {
    const el = document.createElement("div");
    el.className = "cal-day other-month";
    el.textContent = d;
    container.appendChild(el);
  }
}

// selectDay 함수
function selectDay(e) {
  document.querySelectorAll(".cal-day").forEach((el) => {
    el.classList.remove("today");
  });
  e.target.classList.add("today"); // e.target으로 받기
}

renderCalendar();

// 체크 토글
function toggleCheck(item) {
  const btn = item.querySelector(".check");
  const path = item.querySelector("path");
  const isChecked = btn.classList.contains("checked");

  if (isChecked) {
    btn.classList.remove("checked");
    path.setAttribute("stroke", "#5f33ff");
    path.setAttribute("stroke-dasharray", "4 2");
  } else {
    btn.classList.add("checked");
    path.setAttribute("stroke", "white");
    path.removeAttribute("stroke-dasharray");
  }
}
