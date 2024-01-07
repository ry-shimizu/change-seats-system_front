import { useRouter } from "next/router";
import { IconType } from "react-icons";

const TopIconButton = ({
  IconItem,
  item,
  path,
}: {
  IconItem: IconType;
  item: String;
  path: string;
}) => {
  const router = useRouter();
  const hundleClick = () => {
    router.push(path);
  };

  return (
    <button
      className="border-2 border-blue-200 bg-blue-100 rounded-xl w-1/2 p-4 m-4 items-center shadow-xl
  flex items-centertransition-transform duration-300 ease-in-out transform  hover:scale-110"
      onClick={hundleClick}
    >
      <IconItem size="2rem" />
      <div className="ml-2">{item}</div>
    </button>
  );
};

export default TopIconButton;
