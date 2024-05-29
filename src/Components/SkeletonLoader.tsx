// components/SkeletonLoader.js
const SkeletonLoader = () => {
    return (
      <div className="bg-[grey] shadow-sm rounded-md flex flex-col gap-3 animate-pulse">
        <div className="w-[163px] h-[141px] lg:w-[235px] lg:h-[203px] bg-gray-300 rounded-md"></div>
        <div className="m-3 text-[20px] space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="bg-gray-300 h-10 w-[141px] rounded-full m-4"></div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  