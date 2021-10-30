/** 類似實作rxjs DebounceTime */
/** debounce 是在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行。 */
function debounce(func, delay = 1000) {
    let timer;
    return (...args) => {
        // console.log(...args);
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, ...args), delay);
    };
}
// type Procedure = (...args: any[]) => any;
function ShowScrollY(x = 'data: ') {
    console.log(x + window.scrollY);
}
/** test */
// 有用debounce
// window.addEventListener('scroll', debounce(ShowScrollY, 500));
window.addEventListener('scroll', debounce((data = 'data: ') => ShowScrollY(data), 500));
// 沒有用debounce
window.addEventListener('scroll', () => console.log(window.scrollY));
