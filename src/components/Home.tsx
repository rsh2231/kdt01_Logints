
import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";
import Login from "./Login";


export default function Home() {
  const [login] = useAtom(isLogin);

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-[url('/back.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 w-full h-full">
        {
          login ? (
            <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
              <h1 className="flex justify-center items-center w-150 h-30 rounded-2xl text-2xl font-bold bg-gray-100 shadow-2xl">
                <span className=" text-blue-700">
                  {`${localStorage.getItem('email')}`}
                </span>
                님 로그인이 되었습니다.
              </h1>
            </div>
          ) : <Login />
        }
      </div>
    </div>
  );
}
