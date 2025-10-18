import React from "react";
import Container from "../container";
import Card from "../card";

const getCars = async () => {
  try {
    //TODO 3000 değişebilir
    const res = await fetch(`http://localhost:3000/api/vehicles`);
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Araç verileri alınırken bir sorun oluştu");
  }
};

const List = async () => {
  const data = await getCars();

  console.log(data);

  return (
    <Container>
      <h1>Bütün araçları keşfedin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {data?.vehicles?.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </Container>
  );
};

export default List;
