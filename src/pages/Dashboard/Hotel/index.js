import ShowHotels from '../../../components/RenderHotelsAndRooms/ShowHotels';
export default function Hotel() {
  const getHotels = [1, 2, 3];
  return (
    <>
      {getHotels.length === 0? 'Hotel: Em breve!' :  <ShowHotels/>
      }
    </>
  );
}
