//1. 그래픽 영역 부모 안 a(변수1)를 클릭 시 (href#처리 > 최상단 이동 막기)
    // addEventListener // a.img.src  /객체.객체.객체.popup
//2. 클릭한 a안에 이미지 경로를 인식(저장)
//3. 숨긴 팝업(2)을 보이게 하면서
    // style.display='block';
//4. 팝업 안에 이미지 경로에 클릭한 a의 이미지 경로를 대입
//5. 팝업 영역 또는 팝업 안 x버튼(3) 클릭시 addEventListener
//6. 팝업 숨기기
    //style.display='none';

const graphic_project_a = document.querySelectorAll('.graphic_container a');
const graphic_popup = document.querySelector('.graphic_popup_bg');
const graphic_popup_close = graphic_popup.querySelector('#close_btn');
console.log(graphic_project_a, graphic_popup, graphic_popup_close);


console.log(graphic_project_a[0].children[0].src);
console.log(graphic_popup.children[0].children[1].src);
console.log(graphic_popup_close.parentNode.parentNode.parentNode);

graphic_popup_close.addEventListener('click', function(){ //5.
    graphic_popup_close.parentNode.parentNode.parentNode.style.display='none';
    //팝업 닫힐시 전체 스크롤 다시 실행 (auto, visible)
    document.body.style.overflow = 'visible';
});



function graphic_function (event, index, w=50, h=80){
    event.preventDefault();
    let aSrc = graphic_project_a[index].children[0].src;
    graphic_popup.style.display='block'
    graphic_popup.children[0].children[1].src = aSrc;
    graphic_popup.children[0].style.width= w + '%';
    graphic_popup.children[0].style.height= h + 'vh';
    document.body.style.overflow = 'hidden';
};

/* graphic_project_a[0].addEventListener('click', function(e){
    e.preventDefault(); //a태그의 href기본기능 막기 함수
    let aSrc = graphic_project_a[0].children[0].src; //2.
    graphic_popup.style.display='block'
    graphic_popup.children[0].children[1].src = aSrc; //4.
    //실행 그래픽 이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width='60%';
    graphic_popup.children[0].style.height='80vh';
    // 팝업 실행시 뒤쪽 body의 전체 스크롤 막는 기능
    document.body.style.overflow = 'hidden';
}); */

/* graphic_project_a[1].addEventListener('click', function(e){
    e.preventDefault();
    let aSrc = graphic_project_a[1].children[0].src;
    graphic_popup.style.display='block'
    graphic_popup.children[0].children[1].src = aSrc;
    graphic_popup.children[0].style.width='60%';
    graphic_popup.children[0].style.height='80vh';
    document.body.style.overflow = 'hidden';
}); */

graphic_project_a[0].addEventListener('click', function(e){graphic_function(e, 0, 44)});
graphic_project_a[1].addEventListener('click', function(e){graphic_function(e, 1, 47)});
graphic_project_a[2].addEventListener('click', function(e){graphic_function(e, 2, 50)});
graphic_project_a[3].addEventListener('click', function(e){graphic_function(e, 3)});
graphic_project_a[4].addEventListener('click', function(e){graphic_function(e, 4)});
graphic_project_a[5].addEventListener('click', function(e){graphic_function(e, 5)});



