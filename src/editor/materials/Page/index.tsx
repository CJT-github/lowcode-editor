import { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hook/useMaterialDrop";

function Page({ id, name, styles, children }: CommonComponentProps) {
  const { canDrop, drop } = useMaterialDrop(["Button", "Container"], id);
  return (
    <div
      ref={drop}
      className="p-[20px] h-[100%] box-border"
      style={{ ...styles, border: canDrop ? "2px solid blue" : "none" }}
    >
      {children}
    </div>
  );
}

export default Page;
