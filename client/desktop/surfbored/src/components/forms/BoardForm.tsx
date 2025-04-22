import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateBoardInput, CreateBoardSchema } from "@/schemas/boardSchema";

export default function CreateBoardForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateBoardInput>({
    resolver: zodResolver(CreateBoardSchema),
  });

  const onSubmit = (data: CreateBoardInput) => {
    console.log("Form data:", data);
    // Here you would typically send the data to your backend to create the board
  };

  return (
    <form className="card w-128 ring-2 ring-surface" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="description">Description (optional):</label>
        <textarea id="description" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="photo_url">Photo URL (optional):</label>
        <input type="text" id="photo_url" {...register("photo_url")} />
        {errors.photo_url && <p>{errors.photo_url.message}</p>}
      </div>

      <button className="w-full" type="submit">Create Board</button>
    </form>
  );
}
