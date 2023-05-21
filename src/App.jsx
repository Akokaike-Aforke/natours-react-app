import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";

function App() {
  const useFetchTasks = () => {
    const result = useQuery({
      queryKey: ["tasks"],
      queryFn: async () => {
        const { data } = await customFetch("/");
        return data;
      },
    });
    return result;
  };
  const { data, isLoading } = useFetchTasks();
  console.log(data);
  const data1 = { ...data };
  console.log(data1.status);
  console.log(data1.data);
  const data2 = { ...data1.data };
  console.log(data2.tours);

  // const {isLoading, data} = useQuery({
  //   queryKey: ["tours"],
  //     queryFn: async ()=>{
  //       const { data } = await customFetch("/");
  //       return data;
  //     }
  //   })
  //   console.log(data.rating)
  // console.log(isLoading)
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>headings and tours...</h1>
      {data2.tours.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </>
  );
}

export default App;
