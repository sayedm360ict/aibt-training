/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, Form, Input, Row, Select } from "antd";
// import { setCommonModal } from '../../app/slice/modalSlice';
import { useDispatch } from "react-redux";
// import { LockOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { setCommonModal } from "../../../app/slice/modalSlice";
import { FormFileInput } from "../../../common/Input/FromInput";
import { DateInput } from "../../../components/FormItems/FormItems";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import {
  useGetSingleTrainingQuery,
  useUpdateTrainingMutation,
} from "../api/TrainingEndPoint";
import { convertToDayjs } from "../../../common/utils";
import { imageURL } from "../../../app/slice/baseQuery";
// import { useParams } from "react-router-dom";

const UpdateTraining = ({ id }: { id: number }) => {
  const [fileList, setFileList] = useState<any>([]);
  const [form] = Form.useForm();

  //   const { id } = useParams();
  const { data: singleTraining, refetch } = useGetSingleTrainingQuery(id);

  const [updateTraining, { isLoading, isSuccess }] =
    useUpdateTrainingMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (singleTraining?.data?.image) {
      setFileList([{ url: `${imageURL}${singleTraining?.data?.image}` }]);
    }
    form.setFieldValue("status", singleTraining?.data?.status);

    form.setFieldsValue({
      title: singleTraining?.data?.title || "",
      description: singleTraining?.data?.description || "",
      start_time: convertToDayjs(singleTraining?.data?.start_time),
      end_time: convertToDayjs(singleTraining?.data?.end_time),
    });
  }, []);

  const onFinish = async (values: any) => {
    console.log(values);
    const formData = new FormData();
    const getStartTime = dayjs(values.start_time).format("YYYY-MM-DD HH:mm");
    const getEndTime = dayjs(values.end_time).format("YYYY-MM-DD HH:mm");
    if (values.title !== values.title) {
      formData.append("title", values.title);
    }
    if (values.description !== values.description) {
      formData.append("description", values.description);
    }

    if (getStartTime !== values.start_time) {
      formData.append(
        "start_time",
        dayjs(values.start_time).format("YYYY-MM-DD HH:mm")
      );
    }
    if (getEndTime !== values.end_time) {
      formData.append("end_time", dayjs(values.end_time).format("YYYY-MM-DD"));
    }

    formData.append("image", values.image?.file);

    formData.append("status", values.status);

    console.table(Object.fromEntries(formData));

    await updateTraining({ id: singleTraining?.data?.id, data: formData });
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      dispatch(setCommonModal());
      refetch();
    }
  }, [isSuccess, form, dispatch]);

  return (
    <>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Card
          className="border"
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          <Row align={"middle"} gutter={[5, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    message: "Please Update Title",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Update Title" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    message: "Please Update Description",
                    whitespace: true,
                  },
                ]}
              >
                <TextArea placeholder="Update Description" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <DateInput
                label="Start Date"
                name="start_time"
                placeholder="Start Date"
                size={24}
              />
            </Col>
            <Col xs={24} sm={24} md={12}>
              <DateInput
                label="End Date"
                name="end_time"
                placeholder="End Date"
                size={24}
              />
            </Col>

            <Col xs={24} sm={24} md={12}>
              <FormFileInput
                setFileList={setFileList}
                fileList={fileList}
                size={24}
                name="image"
                label="Image"
                picture="picture"
                // accept=".jpeg,.png,.jpg,.webp"
              />
            </Col>
            <Col xs={24} sm={24} md={6}>
              <Form.Item label="Select status" name="status">
                <Select placeholder="Select status">
                  <Select.Option key={1} value="Upcoming">
                    {"Upcoming"}
                  </Select.Option>
                  <Select.Option key={2} value="Cancelled">
                    {"Cancelled"}
                  </Select.Option>
                  <Select.Option key={3} value="Ended">
                    {"Ended"}
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <SubmitButton loading={isLoading} />
      </Form>
    </>
  );
};

export default UpdateTraining;
