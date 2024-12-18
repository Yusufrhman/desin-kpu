import Login from "../../components/Auth/Login";

export default function LoginPage() {
  return (
    <main className='h-[93dvh] flex items-center justify-center'>
      <div className='h-fit w-2/5 bg-white rounded-2xl shadow-2xl px-10 py-10 items-center justify-around gap-24 overflow-clip relative '>
        <Login />
      </div>
    </main>
  );
}
