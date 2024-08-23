import { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hook/useMaterialDrop";

const Container = ({ id, name, styles, children }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterialDrop(["Button", "Container"], id);

  return (
    <div
      data-component-id={id}
      ref={drop}
      className="border-[1px] border-[#000] min-h-[100px] p-[20px]"
      style={styles}
    >
      {children}
    </div>
  );
};

export default Container;
