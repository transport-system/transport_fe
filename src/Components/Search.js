import React from 'react';
import { Button,Form, Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Search = () => (
  <Form wrap        layout="inline" className=' justify-content-center'
  >          <Form.Item>

    <Select
      defaultValue="Sài Gòn"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'Sài Gòn', label: 'Sài Gòn' },
        { value: 'Đà Lạt', label: 'Đà Lạt' },
        { value: 'Đồng Tháp', label: 'Đồng Tháp' },
        { value: 'Vũng Tàu', label: 'Vũng Tàu' },
      ]}
    />       </Form.Item>
    <Form.Item>

      <Select
      defaultValue="Đà Lạt"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'Sài Gòn', label: 'Sài Gòn' },
        { value: 'Đà Lạt', label: 'Đà Lạt' },
        { value: 'Đồng Tháp', label: 'Đồng Tháp' },
        { value: 'Vũng Tàu', label: 'Vũng Tàu' },
      ]}
    />      </Form.Item>

          <Form.Item>
        <Button type="primary">Search</Button>
      </Form.Item>
  </Form>
);

export default Search;