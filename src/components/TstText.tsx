// 타입을 선언하여 사용할 수 있음
// type nameT = [string, number] ;
// type personT = {
//   name:string;
//   age:number
// } ;

interface personT {
  name:string;
  age:number
} ;

export default function TxtText() {

   // 타입이 지정되어 있기 때문에 다른 형식은 넣을 수 없음
  let name: string = "PNU";
  let age: number = 10;
  let height: number = 180;
  let ages:Array<number> = [10, 20, 30]
  let fruits: string[] = ["apple", "strawberry", "banana"];
  let cars:string[] = ["아반떼", "소나타", "그랜저", "제네시스"]

  // let nameTuple1:[string, number] = ["kim", 10] ;
  // let nameTuple2:[string, number]  = ["Lee", 20] ;
  // let nameTuple1:nameT = ["kim", 10] ;
  // let nameTuple2:nameT = ["Lee", 20] ;
  
  // 객체 타입 선언
  // let person1 : {name:string , age:number} = {name : 'Kim', age : 10}
  // let person2 : {name:string , age:number} = {name : 'Lee', age : 20}
  let person1 : personT = {name : 'Kim', age : 10} ;
  let person2 : personT = {name : 'Lee', age : 20} ;

  // 함수 타입 선언1: 인수가 없고 리턴이 없는 경우
  // void인 경우에는 생략 가능
  const handleOk1 = ():void => {
    alert("안녕하세요!")
  }

  // 함수 타입 선언2 : 인수가 있고 리턴이 없는 경우
  // 인수에 타입 선언
  const handleOk2 = (name:string):void => {
    alert(`${name}님 안녕하세요!`)
  }

  // 함수 타입 선언3 : 인수가 있고 리턴이 있는 경우
  // 인수에 타입 선언하고 리턴 값의 타입도 선언
  const helloStr = (name:string):string => {
    return `${name}님 안녕하세요!`
  }

  const handleOk3 = (name:string):void => {
    const s:string = helloStr(name) ;
    alert(s) ;
  }

  
  return (
    <div>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>키 : {height}</li>
        <li>정수배열 : {ages.map((item:number, idx:number) => <span key={`item${idx}`}> {item} </span>)}
        </li>
        <li>문자열배열 : {fruits.map((item:String, idx:number) => <span key={`item${idx}`}> {item} </span>)}
        </li>
        <li>
          {cars.map((item:String, idx:number) => <span key={`item${idx}`}> {item} </span>)}
        </li>
        <li>
          이름 : {person1.name}, 나이 : {person1.age}
        </li>
        <li>
          이름 : {person2.name}, 나이 : {person2.age}
        </li>   
      </ul>
      <div className="grid grid-cols-3">
        <button className="p-1 m-1 bg-amber-100 font-bold rounded-md hover:cursor-pointer hover:text-gray-600"
        onClick={handleOk1}> 함수예제1 </button>
        <button className="p-1 m-1 bg-amber-100 font-bold rounded-md hover:cursor-pointer hover:text-gray-600"
        // 매개변수가 있으면 콜백함수 형태로 써야 한다.
        onClick={()=>handleOk2("Kim")}> 함수예제2 </button>
        <button className="p-1 m-1 bg-amber-100 font-bold rounded-md hover:cursor-pointer hover:text-gray-600"
        onClick={()=>handleOk3("Lee")}> 함수예제3 </button>
      </div>
    </div>
  );
}
