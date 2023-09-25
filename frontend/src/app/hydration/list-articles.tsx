"use client";

import { Article } from "../types";
import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";

async function getArticles() {
  const res = await fetch("http://localhost:1337/api/articles");
  const articles = (await res.json()) as Article[];
  return articles;
}

export default function ListArticles() {
//   const [count, setCount] = useState(0);

  const { data } = useQuery({
    queryKey: ["hydrate-articles"],
    queryFn: () => getArticles(),
  });

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      {/* <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div> */}

      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
        {/* { console.log(data['data'])} */}
          {/* {data[data]?.map((article) => (
            <div
              key={article.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <h3>{article.title}</h3>
            </div>
          ))} */}
        </div>
      }
    </main>
  );
}