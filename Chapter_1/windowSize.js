
const tag = document.querySelector('.tag');
//querySelector 사용 class 가 tag 인 돔 요소가 할당된다.
function updateTag() {
    tag.innerHTML = `
    windowScreen : ${window.screen.width} , ${window.screen.height} <br/>
    windowOuter : ${window.outerWidth} , ${window.outerHeight} <br/>
    windowInner : ${window.innerWidth} , ${window.innerHeight} <br/>
    documentElementClient : ${document.documentElement.clientWidth} , ${document.documentElement.clientHeight}
    `;
}; //할당된 돔요소의 innerHTML을 변환 시켜주는 함수 (첫로딩시 , resize시 중복 사용되므로 함수로 빼준다.)

/*
    window.addEventListener 윈도우에 event를 추가 
*/
window.addEventListener('resize', () => { // 윈도우 창이 resize 될 때 마다 callback 함수 호출
    updateTag() // resize시 updateTag 함수를 호출
});
updateTag(); // script 실행 시 함수 호출