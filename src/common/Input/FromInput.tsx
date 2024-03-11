/* eslint-disable @typescript-eslint/no-explicit-any */
import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, InputNumber, Select, Upload } from "antd";
import { NamePath } from "antd/es/form/interface";
import { UploadFile, UploadListType } from "antd/es/upload/interface";
import { Dispatch, SetStateAction } from "react";

type Props = {
  name: NamePath | (string | number)[];
  label: string;
  required?: boolean;
  size?: number;
  numberType?: boolean;
  disabled?: boolean;
  rules?: any;
  data?: any;
  placeholder?: string;
  handleQuantity?: ((value?: any) => void) | undefined;
  handleAttribute?: (value?: any) => void;
  quantity?: number;
  value?: any;
  onChange?: any;
  loading?: boolean;
  accept?: string;
  picture?: UploadListType;
  fileList?: UploadFile[];
  setFileList?: Dispatch<SetStateAction<UploadFile[]>>;
  style?: React.CSSProperties;
};

const FormInput = ({
  name,
  label,
  size,
  numberType,
  rules,
  disabled,
  placeholder,
  required,
  onChange,
}: Props) => {
  return (
    <Col xs={24} sm={24} md={12} lg={size || 12}>
      <Form.Item required={required} label={label} name={name} rules={rules}>
        {numberType ? (
          <Input
            type="number"
            placeholder={placeholder}
            style={{ width: "100%" }}
            disabled={disabled || false}
            onChange={onChange}
          />
        ) : (
          <Input
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled || false}
          />
        )}
      </Form.Item>
    </Col>
  );
};
export default FormInput;
export const FormFileInput = ({
  name,
  label,
  size,
  rules,
  required,
  accept,
  picture,
  fileList,
  setFileList,
}: Props) => {
  return (
    <Col xs={24} sm={24} md={12} lg={size || 12}>
      <Form.Item required={required} label={label} name={name} rules={rules}>
        <Upload
          fileList={fileList}
          onChange={({ fileList: newFileList }) =>
            setFileList && setFileList(newFileList)
          }
          listType={picture}
          accept={accept}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
    </Col>
  );
};
export const FormNumberInput = ({
  name,
  label,
  size,
  rules,
  disabled,
  placeholder,
  required,
  onChange,
  value,
}: Props) => {
  return (
    <Col xs={24} sm={24} md={12} lg={size || 12}>
      <Form.Item required={required} label={label} name={name} rules={rules}>
        <InputNumber
          type="number"
          name={name}
          placeholder={placeholder}
          disabled={disabled || false}
          style={{ width: "100%" }}
          onChange={onChange}
          defaultValue={value}
          value={value}
        />
      </Form.Item>
    </Col>
  );
};

export const FormTextArea = ({
  name,
  label,
  size,
  rules,
  disabled,
  placeholder,
  required,
}: Props) => {
  return (
    <Col xs={24} sm={24} md={12} lg={size || 12}>
      <Form.Item required={required} label={label} name={name} rules={rules}>
        <Input.TextArea
          showCount
          maxLength={100}
          placeholder={placeholder}
          disabled={disabled || false}
        />
      </Form.Item>
    </Col>
  );
};

const { Option } = Select;
export const FormSelectInput = ({
  name,
  label,
  size,
  disabled,
  placeholder,
  data,
  loading,
  style,
  required,
}: Props) => {
  return (
    <Col xs={24} sm={24} md={12} lg={size || 12}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          { required: required ?? false, message: `Please select ${label}!` },
        ]}
        style={style}
      >
        <Select
          loading={loading}
          disabled={disabled || false}
          placeholder={placeholder}
        >
          {data &&
            data.map((item: any, index: number) => (
              <Option key={item.name + index} value={item.value}>
                {item.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
    </Col>
  );
};

export const FormCommonInput = ({
  name,
  label,
  size,
  rules,
  disabled,
  placeholder,
}: Props) => {
  return (
    <Col xs={24} sm={24} md={12} lg={size || 12}>
      <Form.Item label={label} name={name} rules={rules}>
        <Input placeholder={placeholder} disabled={disabled || false} />
      </Form.Item>
    </Col>
  );
};
