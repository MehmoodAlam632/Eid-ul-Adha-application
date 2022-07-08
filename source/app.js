let day = 1;

function setDay(n) {
  day = n;
}

function calculateDay(dayType) {
  const parent = document.getElementById("parent");
  const today = new Date().getTime();
  const eidDay = new Date("10 july, 2022 06:00:00").getTime();
  const difference = eidDay - today;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  parent.innerHTML = `
  <div class="heading-div">
          <h1>${
            dayType === 1 ? "1st" : dayType === 2 ? "2nd" : "3rd"
          } Day of Eid Ul Adha</h1>
        </div>
        
          <div class="remainder-div">
            <div class="day-div">
              <div class="btn-div"><button>${
                dayType === 1 ? days : dayType === 2 ? days + 1 : days + 2
              }</button></div>
              <h4>Days</h4>
            </div>
            <div class="hours-div">
              <div class="btn-div"><button>${hours}</button></div>

              <h4>Hours </h4>
            </div>
            <div class="minute-div">
              <div class="btn-div"><button>${minutes}</button></div>

              <h4>Minutes</h4>
            </div>
            <div class="seconds-div">
              <div class="btn-div"><button>${seconds}</button></div>

              <h4>Seconds</h4>
            </div>
          </div>
        
  `;
}

setInterval(function () {
  calculateDay(day);
}, 1000);
