import FormLogin from "@/components/FormLogin";
import FormRegister from "@/components/FormRegister";

function Singup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <FormLogin />
      <FormRegister />
    </div>
  );
}

export default Singup;
