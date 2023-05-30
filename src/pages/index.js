import SpecForm from "@/components/SpecForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-row max-w-5xl mx-auto items-center">
        <img src="/epygi_wave.png" className="max-w-[100px] md:max-w-[150px]"></img> 
        <h1 className="text-3xl ml-5">What epygi product do I need?</h1>
        
      </div>
      <SpecForm></SpecForm>
    </>
  );
}
