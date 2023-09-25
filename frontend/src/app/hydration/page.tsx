import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import ListArticles from "./list-articles";
import { Article } from "../types";

async function getArticles() {
  const res = await fetch("http://localhost:1337/api/articles");
  const articles = (await res.json()) as Article[];
  return articles;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-users"], getArticles);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListArticles />
    </Hydrate>
  );
}
