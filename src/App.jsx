import { useEffect, useState } from "react";
import axios from "axios";
// import './App.css'

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [upload, setUpload] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [result, setResult] = useState(null);

  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    setSelectedFiles(imageFiles);
    const previewUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previewUrls);
  };
  const headers = {
    Authorization: "Bearer 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",
    'Content-Type': 'application/octet-stream', // Indiquez le type de contenu de la requête
  };

  useEffect(() => {
    return () => {
      previewImages.forEach((previewUrl) => {
        URL.revokeObjectURL(previewUrl);
      });
    };
  }, [previewImages]);
  const data = "le monde ";
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      return;
    }
    const file = selectedFiles[0];
    try {
        const response = await axios.post(
      "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large",
      file,
      { headers }
    );
    const generatedText = response.data[0].generated_text;
    setResult(generatedText);

    } catch (error) {
      console.error("Une erreur s'est produite : ", error);
    }
  

    
  };

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <nav className="container mx-auto flex text-white text-center items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="mr-2 ml-2 cursor-pointer py-1.5 font-bold">
            The prophets of the 21st century
          </h1>
        </nav>
      </div>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://cdn.pixabay.com/photo/2016/11/23/15/23/cosmos-1853491_1280.jpg')] bg-cover bg-center" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="mb-6 text-white font-black text-6xl ">
              Welcome to the world of disaster prevention
              </h1>
              <p className="text-white opacity-80 text-2xl">
              Our current challenge is to develop highly accurate AI models for geospatial analysis, with a particular focus on deforestation detection. We strive to leverage existing models while refining them for use in crucial environmental preservation situations. Our ultimate goal is to preserve our precious forests and combat deforestation, a critical threat to our planet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="relative px-4 pt-10 pb-5 m-5 ">
        <h1 className="text-3xl text-center p-2 items-center">
        Image upload
        </h1>
        <div class="border border-dashed border-gray-500 relative mx-20">
          <input
            type="file"
            onChange={handleFileChange}
            class="cursor-pointer relative block opacity-0 w-full h-[10px] p-12 z-50"
          />
          <div className=" text-center p-2 absolute top-0 right-0 left-0 bottom-0 m-auto items-center  ">
            <button onClick={handleUpload} className="items-center mb-2">
              {selectedFiles?.length > 0
                ? "Choose Another File"
                : " Choose File"}
            </button>
            {selectedFiles.map((file, index) => (
              <div key={index}>
                <p>File name : {file.name}</p>
                <p>Taille du fichier : {file.size} bytes</p>
              </div>
            ))}
           
          </div>
        </div>

        {/* Boutton */}
        <div className="items-center text-center m-10">
          <button
            onClick={handleUpload}
            className="rounded-3xl bg-blue-800 p-4 shadow-lg shadow-slate-500 text-white"
          >
            Launch verification
          </button>
        </div>

        {/* Retour  */}
        {result && (
        <div>
          <h2>Result:</h2>
          <pre>{result}</pre>
        </div>
      )}

        <div className="border flex border-dashed border-gray-500 relative mt-20 mx-20 h-[500px] ">
          {upload ? (
            <div className=" flex-1 text-center p-2 justify-center m-auto items-center  ">
              Un instant --- .....
            </div>
          ) : (
            <div className="flex flex-row h-full w-full">
              <div className="basis-1/2  border-r border-dashed border-gray-500">
                <div className="items-center justify-center flex pt-2">
                   <h1 className="text-3xl">Before</h1>
                </div>
               
                  {previewImages.map((previewUrl, index) => (
              <div
                key={index}
                className="items-center justify-center flex h-full w-full "
              >
                <img
                  src={previewUrl}
                  alt={`Prévisualisation ${index}`}
                  className="h-full w-full object-cover pb-16 pt-6 px-9"
                />
              </div>
            ))} 
              </div>
              <div className="basis-1/2 ">
              <div className="items-center justify-center flex pt-2">
                   <h1 className="text-3xl">After</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
{/* 
      <section className="px-4 pt-20 pb-48">
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <h2 className="mb-3 font-bold text-3xl">About Us</h2>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
         <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
        //   <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
        //     <h2 className="m-3 font-bold text-3xl ">Image</h2>
        //     <p>
        //       Petite description Lorem ipsum dolor sit amet, consectetur
        //       adipiscing elit, sed do{" "}
        //     </p>
        //   </div>
        //   <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
        //     <h2 className="m-3 font-bold text-3xl ">Image</h2>
        //     <p>
        //       Petite description Lorem ipsum dolor sit amet, consectetur
        //       adipiscing elit, sed do{" "}
        //     </p>
        //   </div>
        //   <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
        //     <h2 className="m-3 font-bold text-3xl ">Image</h2>
        //     <p>
        //       Petite description Lorem ipsum dolor sit amet, consectetur
        //       adipiscing elit, sed do{" "}
        //     </p>
        //   </div>
        //   <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
        //     <h2 className="m-3 font-bold text-3xl ">Image</h2>
        //     <p>
        //       Petite description Lorem ipsum dolor sit amet, consectetur
        //       adipiscing elit, sed do{" "}
        //     </p>
        //   </div>
         </div> 
      </section> */}

      {/* Footer */}
      <div className="bg-blue-950 px-4 pt-20 ">
        <footer className="relative px-4 pt-2 py-12">
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <h2 className="mb-3 font-bold text-3xl text-white">About Us</h2>{" "}
          <p className="text-white">
          Science and technology can provide tangible solutions to the most pressing environmental problems. We are determined to make a difference by developing cutting-edge AI models that enable early detection and rapid intervention to protect our forest ecosystems.
          </p>
        </div>
        </footer>
      </div>
    </>
  );
}

export default App;
