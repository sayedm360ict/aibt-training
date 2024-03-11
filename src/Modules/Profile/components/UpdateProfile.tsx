/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Row, Card, Col, Input } from "antd";
// import { setCommonModal } from '../../app/slice/modalSlice';
import { useDispatch } from "react-redux";
// import { LockOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "../../../app/api/userApi/userApi";

import { imageURL } from "../../../app/slice/baseQuery";
import { setCommonModal } from "../../../app/slice/modalSlice";
import { FormFileInput } from "../../../common/Input/FromInput";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";

const UpdateProfile = () => {
  const [form] = Form.useForm();
  const { data: profile, refetch } = useGetMeQuery();
  // console.log(profile);
  const [updateProfile, { isLoading, isSuccess }] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  //   console.log(profile?.data);
  //   const dispatch = useDispatch();
  useEffect(() => {
    if (profile?.data) {
      form.setFieldsValue({
        photo: [
          {
            name: profile?.data?.photo?.split("/")[1],
            status: "done",
            url: imageURL + profile?.data?.photo,
          },
        ],
      });
    }
    form.setFieldsValue({
      name: profile?.data?.name || "",
    });
  }, []);

  const initialFormValues = {
    name: "",
  };

  const onFinish = async (values: any) => {
    const { name, photo } = values;
    // console.log({ photo });

    const formData = new FormData();
    if (!photo[0]?.url) {
      formData.append("photo", photo.file);
    }

    if (name !== initialFormValues.name) {
      formData.append("name", name);
    }

    console.table(Object.fromEntries(formData));

    await updateProfile({ data: formData });
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
      <Form hideRequiredMark form={form} onFinish={onFinish} layout="vertical">
        <Card
          className="border"
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          <Row align={"middle"} gutter={[5, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    message: "Please Input your Name",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <FormFileInput
                size={24}
                name="photo"
                label="Photo"
                picture="picture"
              />
            </Col>
          </Row>
        </Card>
        <SubmitButton loading={isLoading} />
      </Form>
    </>
  );
};

export default UpdateProfile;
