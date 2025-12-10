'use client'
import React from "react";
import { notFound, useParams } from "next/navigation";

export default function BlogPage({ params }) {
    // const { id } = params;
    const { id } = useParams();
    if (id === "3") {
        notFound();
    }
  
    return <div className="mt-6">Blog Page ID: {id}</div>;
}