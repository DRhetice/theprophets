import { useEffect, useState } from "react";
// import './App.css'

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [upload, setUpload] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    setSelectedFiles(imageFiles);
    const previewUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previewUrls);
  };

  useEffect(() => {
    return () => {
      previewImages.forEach((previewUrl) => {
        URL.revokeObjectURL(previewUrl);
      });
    };
  }, [previewImages]);

  const handleUpload = async () => {
    setUpload(true);
    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });
    console.log(formData);

    // try {
    //   const response = await axios.post('/votre-endpoint-de-serveur', formData);
    //   setUploadStatus('Upload réussi');
    //   console.log('Images téléchargées avec succès', response.data);
    //   // Vous pouvez mettre à jour l'état de votre composant avec les images téléchargées ici
    // } catch (error) {
    //   setUploadStatus('Erreur lors de l\'upload');
    //   console.error('Erreur lors du téléchargement des images', error);
    // }
  };

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <nav className="container mx-auto flex text-white">
          <h1 className="mr-2 ml-2 cursor-pointer py-1.5 font-bold">
            The prophets of the 21st century
          </h1>
        </nav>
      </div>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://cdn.pixabay.com/photo/2016/11/23/15/23/cosmos-1853491_1280.jpg')] bg-cover bg-center" />
        {/* <div className="absolute top-0 h-full w-full bg-white/75 bg-cover bg-center" /> */}
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="mb-6 text-white font-black text-6xl ">
                Message de Bienvenue
              </h1>
              <p className="text-white opacity-80 text-2xl">
                ici nous mettons la description du project et si possible les
                fonctionnalités
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="relative px-4 pt-20 pb-10 m-5 ">
        <h1 className="text-3xl text-center p-6 items-center">
          Upload d'images
        </h1>
        <div class="border border-dashed border-gray-500 relative mx-20">
          <input
            type="file"
            onChange={handleFileChange}
            class="cursor-pointer relative block opacity-0 w-full h-[10px] p-14 z-50"
          />
          <div className=" text-center p-2 absolute top-0 right-0 left-0 bottom-0 m-auto items-center  ">
            <button onClick={handleUpload} className="items-center mb-2">
              {selectedFiles?.length > 0
                ? "Choose Another File"
                : " Choose File"}
            </button>
            {selectedFiles.map((file, index) => (
              <div key={index}>
                <p>Nom du fichier : {file.name}</p>
                <p>Taille du fichier : {file.size} bytes</p>
              </div>
            ))}
            {/* {previewImages.map((previewUrl, index) => (
              <div
                key={index}
                className="items-center justify-center flex h-full w-full "
              >
                <img
                  src={previewUrl}
                  alt={`Prévisualisation ${index}`}
                  className="h-[100px] w-[100px] "
                />
              </div>
            ))} */}
          </div>
        </div>

        {/* Boutton */}
        <div className="items-center text-center m-20">
          <button onClick={handleUpload} className="rounded-3xl bg-blue-800 p-4 shadow-lg shadow-slate-500">
            Lancer la verification
          </button>
        </div>

        {/* Retour  */}

        <div className="border flex border-dashed border-gray-500 relative mt-20 mx-20 h-[500px] ">
          {upload ? (
            <div className=" flex-1 text-center p-2 justify-center m-auto items-center  ">
              Un instant --- ..... 
            </div>
          ) : (<div className="flex flex-row h-full w-full">
            <div className="basis-1/2 bg-blue-600 "></div>
            <div className="basis-1/2 bg-blue-900 "></div>
          </div>)}
          
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <h2 className="mb-3 font-bold text-3xl">Avout Us</h2>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
            <h2 className="m-3 font-bold text-3xl ">Image</h2>
            <p>
              Petite description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do{" "}
            </p>
          </div>
          <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
            <h2 className="m-3 font-bold text-3xl ">Image</h2>
            <p>
              Petite description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do{" "}
            </p>
          </div>
          <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
            <h2 className="m-3 font-bold text-3xl ">Image</h2>
            <p>
              Petite description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do{" "}
            </p>
          </div>
          <div className="mx-auto w-full px-4 text-center lg:w-6/12 bg-slate-600 shadow-2xl shadow-slate-500">
            <h2 className="m-3 font-bold text-3xl ">Image</h2>
            <p>
              Petite description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-blue-950">
        <footer className="relative px-4 pt-2 pb-2">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center">
              <h4 className="font-normal text-blue-400">just something</h4>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
