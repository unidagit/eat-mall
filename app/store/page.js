"use client";
import StoreList from "@/components/storeList/StoreList";
import { getStores, getStoresInfo } from "@/lib/api";
import { useEffect, useState } from "react";
import Modal from "@/components/modal/Modal";

function StorePage() {
  const [store, setStore] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectId, setSelectId] = useState("");
  const [selectInfo, setSelectInfo] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getStores();
      setStore(res);
    })();
  }, []);

  useEffect(() => {
    async function clickInfo() {
      const res = await getStoresInfo(selectId);
      setSelectInfo(res);
    }
    clickInfo();
  }, [selectId]);

  const storeClick = (target) => {
    setSelectId(target);
    setModalOpen(true);
  };

  return (
    <div className=" mx-auto my-7 min-h-[100vh] sm:max-w-sm md:max-w-md  lg:max-w-[70rem] flex items-start justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-auto mt-12 md:mt-[10rem] sm:mt-[8rem]">
        {store?.map((it) => (
          <StoreList key={it.id} {...it} storeClick={storeClick} />
        ))}
      </div>

      {modalOpen && (
        <div className="fixed h-full w-full mt-[8rem]">
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 "></div>
          <div className="fixed h-[40rem]">
            <Modal selectInfo={selectInfo} setModalOpen={setModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
}

export default StorePage;
