/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Card, Col, Input, Row } from "antd";
import { useEffect } from "react";

import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import { setCommonModal } from "../../../app/slice/modalSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { DateInput } from "../../../components/FormItems/FormItems";
import { useCreateTrainingMutation } from "../api/TrainingEndPoint";
import { FormFileInput } from "../../../common/Input/FromInput";
// import { ICreateTraining } from "../types/TrainingType";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";

const CreateTraining = () => {
  const [form] = Form.useForm();
  const [createTraining, { isLoading, isSuccess }] =
    useCreateTrainingMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      dispatch(setCommonModal());
      Swal.fire({
        title: "Successfully Created",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isSuccess]);

  const onFinish = async (values: any) => {
    console.log(values);
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append(
      "start_time",
      dayjs(values.start_time).format("YYYY-MM-DD HH:mm")
    );
    formData.append(
      "end_time",
      dayjs(values.end_time).format("YYYY-MM-DD HH:mm")
    );
    formData.append("image", values.image.file);

    try {
      await createTraining(formData);
    } catch (error) {
      console.error("Error creating training:", error);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ maxWidth: "auto" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Form onFinish={onFinish} layout="vertical" form={form}>
          <Card
            className="border"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            {" "}
            <Row align={"middle"} gutter={[5, 16]}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Title",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="Please Enter Title" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <DateInput
                  label="Start Date"
                  name="start_time"
                  placeholder="Start Date"
                  size={24}
                  value={0}
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <DateInput
                  label="End Date"
                  name="end_time"
                  placeholder="End Date"
                  size={24}
                  value={0}
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <FormFileInput
                  size={24}
                  name="image"
                  label="image"
                  placeholder="image"
                />
              </Col>
              <Col xs={24} sm={24} md={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Description",
                      whitespace: true,
                    },
                  ]}
                >
                  <TextArea rows={3} placeholder="Please Enter Description" />
                </Form.Item>
              </Col>
            </Row>
          </Card>

          <SubmitButton label="Create" loading={isLoading} />
        </Form>
      </Col>
    </Row>
  );
};

export default CreateTraining;
