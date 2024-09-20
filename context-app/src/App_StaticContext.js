import StaticColorBox from "./components/StaticColorBox";
import StaticColorContext from "./context/staticcolor";


function App() {
  return (
    <>
      {/**2. context의 Provider를 통해서 값을 변경한다.
       *     context의 상태 변수를 사용할 컴포넌트들을 
       *     context Provider의 하위 컴포넌트로 선언한다.
       *     Provider를 사용하면 value props를 지정하지 않으면 에러가 발생한다.
       */}
       <StaticColorContext.Provider value={{color: 'yellow'}}>
          <StaticColorBox/>
       </StaticColorContext.Provider>
    </>
  );
}

export default App;
