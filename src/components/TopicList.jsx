'use client'
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const topics = await getTopics();

  

  return (
    <>
      {Array.isArray(topics) &&
        topics.map((t) => (
          <div
            key={t._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">
              <span  onClick={async()=>{
                  try {
                      const confirmed = confirm("Are you sure you want to delete this topic?")
                      if(confirmed ){

                         await fetch(`http://localhost:3000/api/topics?id=${t._id}`,{
                             method:"DELETE",
                             headers:{"Content-Type":"application/json"},
                         }).then(()=>{
                             window.location.reload();
                         })
                         
                        }
                    }catch (error) {
                        console.log("Error deleting topic: ", error);
                    }
                }}>
                <RemoveBtn />
              </span>
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
