document.getElementById('btn1').addEventListener('click', function(event) {
    const cardTitle = document.getElementById('title1').id;
    const id = event.target.id;    
    taskUpdate();
    buttonUpdate(id);
    DateAndTime()
    historyPanel(cardTitle)
})
document.getElementById('btn2').addEventListener('click', function(event) {
    const cardTitle = document.getElementById('title2').id;
    const id = event.target.id;    
    taskUpdate();
    buttonUpdate(id);
    DateAndTime()
    historyPanel(cardTitle)
})
document.getElementById('btn3').addEventListener('click', function(event) {
    const cardTitle = document.getElementById('title3').id;
    const id = event.target.id;    
    taskUpdate();
    buttonUpdate(id);
    DateAndTime()
    historyPanel(cardTitle)
})
document.getElementById('btn4').addEventListener('click', function(event) {
    const cardTitle = document.getElementById('title4').id;
    const id = event.target.id;    
    taskUpdate();
    buttonUpdate(id);
    DateAndTime()
    historyPanel(cardTitle)
})
document.getElementById('btn5').addEventListener('click', function(event) {
    const cardTitle = document.getElementById('title5').id;
    const id = event.target.id;    
    taskUpdate();
    buttonUpdate(id);
    DateAndTime()
    historyPanel(cardTitle)
})
document.getElementById('btn6').addEventListener('click', function(event) {
    const cardTitle = document.getElementById('title6').id;
    const id = event.target.id;    
    taskUpdate();
    buttonUpdate(id);
    DateAndTime()
    historyPanel(cardTitle)
})
document.getElementById('clear-btn').addEventListener('click', function(event) {
    historyClear()
})
document.getElementById('color').addEventListener('click', function(event) {
  colorChanger();
})


