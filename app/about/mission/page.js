import Button from "@/app/components/Button";
import React from "react";
import Image from "next/image";
import thumb from "@/public/images/thumb.jpg";

export default function Mission() {
  return (
    <main className="mt-10">
        <div>Mission page</div>
        <Button />
        <div className="w-[400px]">
          <Image placeholder="blur" src={thumb} alt="Thumbnail" quality={100}/>
        </div>
    </main>
  );
}