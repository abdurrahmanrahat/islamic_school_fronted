import { Loader } from "@/components/shared/UI/Loader";

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto h-screen">
      {/* <Image
        src="https://i.stack.imgur.com/hzk6C.gif"
        width={500}
        height={500}
        alt="loading"
        className="w-96 mx-auto"
      /> */}
      <Loader text="Loading..." />
    </div>
  );
};

export default LoadingPage;
