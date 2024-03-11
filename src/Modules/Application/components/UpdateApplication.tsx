/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Row, Card, Col, Select } from "antd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCommonModal } from "../../../app/slice/modalSlice";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";

import {
  useGetSingleApplicationQuery,
  useUpdateApplicationMutation,
} from "../api/ApplicationEndpoint";

const UpdateApplication = ({ id }: { id: number }) => {
  const [form] = Form.useForm();
  const { data: singleApplication, refetch } = useGetSingleApplicationQuery(id);
  const [updateApplicationStatus, { isLoading, isSuccess }] =
    useUpdateApplicationMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    form.setFieldValue("status", singleApplication?.data?.status);
    console.log(singleApplication?.data?.status);
  }, []);

  const onFinish = async (values: any) => {
    await updateApplicationStatus({
      id: singleApplication?.data?.id,
      data: values,
    });
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
            <Col xs={24} sm={24} md={6}>
              <Form.Item label="Select status" name="status">
                <Select placeholder="Select status">
                  <Select.Option key={1} value="Approved">
                    {"Approved"}
                  </Select.Option>
                  <Select.Option key={2} value="Pending">
                    {"Pending"}
                  </Select.Option>
                  <Select.Option key={3} value="Rejected">
                    {"Rejected"}
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

export default UpdateApplication;
