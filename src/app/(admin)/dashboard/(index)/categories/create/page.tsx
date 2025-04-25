import FormCategory from "../_components/form-category"

export default function Create(){
    return (
        <div className="container mx-auto py-10">
      <div className="max-w-md ms-20">
        <h1 className="text-2xl font-bold mb-6">Create New Category</h1>
        <FormCategory />
      </div>
    </div>
    )
}