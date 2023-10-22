"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitTopic = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      router.push("/");
    } catch (error) {
      console.log("Error adding topic: ", error);
    }
  };
  return (
    <form action="" className="flex flex-col">
      <input
        type="text"
        name=""
        className="border-slate-500 px-8 py-2 border my-2"
        placeholder="Topic Title"
        id=""
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name=""
        className="border-slate-500 px-8 py-2 border my-2"
        placeholder="Topic Description"
        id=""
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-green-500 px-6 py-3 w-fit text-white text-bold my-2"
        onClick={submitTopic}
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
