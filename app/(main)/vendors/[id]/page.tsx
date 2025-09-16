import VendorForm from "@/components/forms/VendorForm";

const VendorPage = async ({ params }) => {
  // console.log("🚀 ~ VendorPage ~ params:", params.id);
  const { id } = await params;
  console.log(id, "rest");

  return (
    <section>
      <VendorForm />
    </section>
  );
};

export default VendorPage;
