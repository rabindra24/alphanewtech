"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-white overflow-hidden">
      <MaskContainer
        revealText={
          <p className="px-48 mx-auto text-slate-800 text-center  text-4xl font-bold">
            Empowering Success through Innovative Solutions: Our development
            agency pioneers creativity, transforming visions into exceptional
            results. Elevate your brand with our professional touch and
            unparalleled expertise.
          </p>
        }
        className="h-[40rem]  rounded-md"
      >
        Crafting Tomorrow’s Solutions Today:{" "}
        <span className="text-red-500">Our development agency</span> .is your
        gateway to a future shaped by{" "}
        <span className="text-red-500">creativity</span> and{" "}
        <span className="text-red-500">professionalism</span>.
      </MaskContainer>
    </div>
  );
}
