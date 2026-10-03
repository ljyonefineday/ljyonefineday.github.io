// 이메일 "주소 복사" 버튼
document.getElementById('copy').addEventListener('click', function(){
  var btn=this, text=document.getElementById('email').textContent;
  function done(){btn.textContent='복사됨';setTimeout(function(){btn.textContent='주소 복사'},1600)}
  function fallback(){var r=document.createRange();r.selectNodeContents(document.getElementById('email'));var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='선택됨, ⌘C로 복사'}
  try{navigator.clipboard.writeText(text).then(done,fallback)}catch(e){fallback()}
});
