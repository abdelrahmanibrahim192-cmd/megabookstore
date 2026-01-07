
let img= document.querySelector('.img');
function phon(ph){
  img.src = ph;
}

let btn = document.querySelector(".sub");
let textarea = document.querySelector(".text-box");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let message = textarea.value;

  if (message.trim() === "") {
    alert("اكتب رسالة الأول");
  } else {
    alert("تم إرسال الرسالة");
    textarea.value = "";
  }
});
