//함수보다 쌩으로 만들고나서 함수를 이용하자

//1번 액션 이름 생성
const INCREMENT = 'INCREMENT';

//2번 리듀서 (액션이 많을때 걸러주는 역할)
//리듀서(state,action)

//윗 버튼은 state를 날릴 필요 없음, 밑에 숫자를 바꿀것이라서
//만약 자신의 state가 변경될거면 같이 날린다.
//윗버튼이 store에 자신의 액션을 날리면 된다.

const initState = {
  number: 0,
};
//state값을 안받으면 오류가 나서 초기값이 필요함!
//action은 오브젝트인데 규칙이 있다.
//action = { type : "INCREMENT"} type이라는 속성을 가지고 있어야함.
//(이렇게 안해도 되긴하지만 확장성을 생각해서 오브젝트로 전송)

// 추가적으로 값이 생기면 모든 상태값을 스토어가 들고 있으면 된다 (initState)
const reducer = (state = initState, action) => {
  if (action.type === INCREMENT) {
    console.log('INCREMENT 호출됨');
    return { number: state.number + 1 };
  } else {
    return state;
  }
};

export default reducer;
