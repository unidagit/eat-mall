import Link from "next/link";

function page() {
  return (
    <div className="flex-1 min-h-[100vh] mt-[8rem]">
      <div className="py-[10rem] bg-cover bg-no-repeat  bg-center bg-black aboutImg"></div>
      <div className="container m-auto text-center px-6 py-9 opacity-100">
        <h2 className="text-4xl font-bold mb-4 text-black">맛있는 약속</h2>
        <h3 className="text-xl mb-8 text-black">
          오늘도 맛있는 정성을 전하기 위해 <br />
          어머니의 마음으로 한 끼를 만듭니다.
        </h3>
        <button className="bg-black font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent text-white hover:bg-emerald-700 transition-all">
          <Link href={"/store"}>Food 스토어 바로가기</Link>
        </button>
      </div>
    </div>
  );
}

export default page;
