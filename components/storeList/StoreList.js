import Image from "next/image";

function StoreList({ id, name, thumb, storeClick }) {
  return (
    <div className="hover:scale-105 hover:cursor-pointer ">
      <Image
        src={thumb}
        alt={name}
        height={400}
        width={400}
        className="rounded-xl"
        onClick={() => storeClick(id)}
        priority
      />
    </div>
  );
}

export default StoreList;
