import React, { useRef } from "react";
import $ from "jquery";
import { Responsive, WidthProvider } from "react-grid-layout";
import RGLSplitter from "./RGLSplitter";
const ResponsiveGridLayout = WidthProvider(Responsive);
interface RGlProps {
  content: any[];
  layouts: any;
  [key: string]: any;
}

const RGL: React.FC<RGlProps> = ({ content, layouts, ...props }) => {
  const refLayout = React.useRef(null);
  const [mounted, setMounted] = React.useState(false);
  const [layout, setLayouts] = React.useState(layouts);
  const containerRef = useRef(null);
  const splitterRefs = useRef<(HTMLDivElement | null)[]>([]);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const onLayoutChange = (layout: any, layouts: any) => {
    setLayouts({ ...layouts });
  };
  return (
    <div
      ref={containerRef}
      onMouseDown={() => {
        $("body").css("user-select", "none");
      }}
      onMouseUp={() => {
        $("body").css("user-select", "text");
      }}
    >
      <ResponsiveGridLayout
        ref={refLayout}
        className="layout"
        measureBeforeMount={mounted}
        rowHeight={20}
        autoSize={true}
        layouts={layout}
        useCSSTransforms={mounted}
        draggableCancel=".cancelDrag"
        onLayoutChange={onLayoutChange}
        isDraggable
        isResizable
        margin={[24, 36]}
        resizeHandles={["e", "s", "se"]}
        draggableHandle=".grid-item__title"
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {content.map((data, index) => (
          <RGLSplitter
            key={data.id}
            ref={(el: any) => (splitterRefs.current[index] = el)}
            {...props}
            {...data}
          />
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default React.memo(RGL);
