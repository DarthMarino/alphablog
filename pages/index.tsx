import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <button
        className="font-sans text-2xl inline-block rounded-md py-3 px-4 bg-gray-900 text-white"
        onClick={() => toast.success("hello toast!")}
      >
        Toasters toast toasts!
      </button>
    </div>
  );
}
