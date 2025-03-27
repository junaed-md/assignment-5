function taskUpdate() {
    const task = parseFloat(document.getElementById('task').innerText);
    const totalTask = parseFloat(document.getElementById('total-task').innerText);
    const newTask = task - 1;
    const newTotalTask = totalTask + 1;
    alert('Board Updated Successfully');
    if(newTask ===0) {
        alert('Congrates!!! You have completed all the current task');
    }
    document.getElementById('task').innerText = newTask;
    document.getElementById('total-task').innerText = newTotalTask;

}

function buttonUpdate(id) {
    const element = document.getElementById(id);
    element.setAttribute('disabled', 'true');
    element.style.backgroundColor = 'gray';
    element.style.color = 'black';
    element.style.borderRadius = '8px';
    element.style.cursor = 'auto';
}

function DateAndTime() {

}

function historyPanel(id) {
    const historyDiv = document.getElementById('history-panel');
    const newDiv = document.createElement('div');
    const element = document.getElementById(id);

    const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });

  newDiv.innerHTML = `
    <div class="primary-bg m-4 rounded-lg mb-7">
      <p class="p-2">You have Completed The Task ${element.innerText} at ${timeString}</p>
    </div>
  `;

    historyDiv.appendChild(newDiv);
}
function historyClear() {
    const historyDiv = document.getElementById('history-panel');
  historyDiv.innerHTML = `
  `;

    historyDiv.appendChild(newDiv);
}





function colorChanger() {

  const randomColor = getRandomColor();
  const body = document.getElementById('body');
  body.style.backgroundColor = randomColor;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}
}









displayCurrentDate();
function displayCurrentDate() {
    const now = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();

    const currentDayElement = document.getElementById('currentDay');
    const currentDateElement = document.getElementById('currentDate');

    currentDayElement.innerText = dayOfWeek + ",";
    currentDateElement.innerText = month + " " + dayOfMonth + " " + year;
}

