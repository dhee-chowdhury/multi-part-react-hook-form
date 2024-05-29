import { useForm, useController } from "react-hook-form";
import { Form, Select, Input, Button } from "antd";

const { Option } = Select;

function CustomInput({ control, name }) {
  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" },
  });

  return (
    <Form.Item
      validateStatus={invalid ? "error" : ""}
      help={errors[name]?.message}
    >
      <Input
        {...field}
        placeholder="First Name"
        style={{ borderColor: invalid ? "red" : undefined }}
      />
    </Form.Item>
  );
}

function CustomSelect({ name, control }) {
  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name,
    control,
    rules: { required: "This selection is required" },
  });
  return (
    <Form.Item
      validateStatus={invalid ? "error" : ""}
      help={errors[name]?.message}
    >
      <Select
        {...field}
        placeholder="Select an option"
        style={{ borderColor: invalid ? "red" : undefined }}
      >
        <Option value="chocolate">Chocolate</Option>
        <Option value="strawberry">Strawberry</Option>
        <Option value="vanilla">Vanilla</Option>
      </Select>
    </Form.Item>
  );
}

const FormWithAntDesign = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <CustomInput name="firstName" control={control} />
      <CustomSelect name="select" control={control} />

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormWithAntDesign;
