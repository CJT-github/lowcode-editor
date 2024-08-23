import { useState } from "react";
import { useComponentsStore } from "../../stores/components";
import { Segmented } from "antd";
import { ComponentAttr } from "./ComponentAttr";
import { ComponentStyle } from "./ComponentStyle";
import { ComponentEvent } from "./ComponentEvent";

export function Setting() {
  const { components, curComponentId } = useComponentsStore();

  const [key, setKey] = useState<string>("属性");
  if (!curComponentId) return;

  return (
    <div>
      <Segmented
        value={key}
        onChange={setKey}
        block
        options={["属性", "样式", "事件"]}
      />
      <div className="pt-[20px]">
        <div>{key === "属性" && <ComponentAttr />}</div>
        <div>{key === "样式" && <ComponentStyle />}</div>
        <div>{key === "事件" && <ComponentEvent />}</div>
      </div>
    </div>
  );
}
