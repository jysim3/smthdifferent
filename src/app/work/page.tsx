"use client";
import { Card, Divider, Flex, Space, theme } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import { useRouter } from "next/navigation";

const X = () => {
  const {
    token: {
      colorBgContainer,
      borderRadiusLG,
      screenLGMax,
      fontSizeLG,
      screenXL,
    },
  } = theme.useToken();
  const router = useRouter();
  return (
    <Flex vertical>
      <Flex
        vertical
        style={{
          margin: "auto",
          maxWidth: screenXL,
          padding: 80,
        }}
        gap={10}
      >
        <Title>Our works</Title>
        <Space >
          <Card
            hoverable
            cover={
              <img src="https://smthdifferent.com/wp-content/uploads/2024/04/7ACA.jpg" />
            }
            onClick={() => router.push("/work/test")}
          >
            <Meta title="7A Commonwealth Avenue" />
          </Card>
          <Card
            hoverable
            cover={
              <img src="https://smthdifferent.com/wp-content/uploads/2024/04/2HV.jpg" />
            }
            onClick={() => router.push("/work/test")}
          >
            <Meta title="2 Hillview Rise" />
          </Card>
        </Space>
        <Space>
          <Card
            hoverable
            cover={
              <img src="https://smthdifferent.com/wp-content/uploads/2024/04/33MD.jpg" />
            }
            onClick={() => router.push("/work/test")}
          >
            <Meta title="33 Margaret Drive" />
          </Card>
          <Card
            hoverable
            cover={
              <img src="https://smthdifferent.com/wp-content/uploads/2024/04/37A.jpg" />
            }
            onClick={() => router.push("/work/test")}
          >
            <Meta title="37A Eunos Road" />
          </Card>
          <Card
            hoverable
            cover={
              <img src="https://smthdifferent.com/wp-content/uploads/2024/04/20BK.jpg" />
            }
            onClick={() => router.push("/work/test")}
          >
            <Meta title="20B Kallang Breeze" />
          </Card>
        </Space>
      </Flex>
    </Flex>
  );
};
export default X;
