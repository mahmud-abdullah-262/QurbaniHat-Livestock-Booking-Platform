

export const getAnimals = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/animals`,);
  const res = await data.json();
  return res;
}
export  const getTopBreed = async () => {

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/breeds`);
  const res = await data.json()
  return res;
}