import { useFormContext, useController } from "react-hook-form";

interface IFormInput {
	type?: string;
	id: string;
	label: string;
}

export default function FormInput({ type, id, label }: IFormInput) {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	const { field } = useController({
		control,
		name: id,
	});

	return (
		<div className="mb-4">
			<label htmlFor={id} className="block mb-1 text-sm font-bold text-secondary">
				{label}
			</label>
			<input
				type={type || "text"}
				id={id}
				className="bg-neutral-50 border border-neutral-300 font-bold text-secondary text-sm rounded-lg focus:outline-primary block w-full p-2.5"
				value={field.value}
				onChange={field.onChange}
			/>
			<label className="text-red-600 text-xs font-semibold">{errors[id]?.message?.toString()}</label>
		</div>
	);
}
