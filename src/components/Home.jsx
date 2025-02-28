function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to VCH
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your trusted healthcare partner. Find doctors, book appointments, and consult online.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-x-4 space-y-4 sm:space-y-0">
            <a
              href="/find-doctors"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-practo-blue hover:bg-blue-500"
            >
              Find Doctors
            </a>
            <a
              href="/video-consult"
              className="inline-flex items-center px-6 py-3 border border-practo-blue text-base font-medium rounded-md text-practo-blue bg-white hover:bg-gray-50"
            >
              Video Consult
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



// function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-6 sm:px-8 flex items-center justify-center">
//       <div className="max-w-3xl w-full text-center">
//         <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
//           Welcome to VCH
//         </h1>
//         <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl">
//           Your trusted healthcare partner. Find doctors, book appointments, and consult online.
//         </p>
//         <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
//           <a
//             href="/find-doctors"
//             className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-500 w-full sm:w-auto"
//           >
//             Find Doctors
//           </a>
//           <a
//             href="/video-consult"
//             className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 w-full sm:w-auto"
//           >
//             Video Consult
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

