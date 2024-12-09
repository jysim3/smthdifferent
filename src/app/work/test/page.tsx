"use client";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Space, theme } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useState } from "react";

const X = () => {
  const {
    token: { screenXL },
  } = theme.useToken();
  const [visible, setVisible] = useState(false);
  return (
    <Flex vertical>
      <Image.PreviewGroup
        preview={{
          onVisibleChange: (value) => {
            setVisible(value);
          },
          toolbarRender: () => null,
          visible,
        }}
        items={new Array(20)
          .fill(null)
          .map(
            (_, index) =>
              `https://smthdifferent.com/wp-content/uploads/2024/01/2319_7ACA_Chan-${index + 2}.jpg`,
          )}
      ></Image.PreviewGroup>
      <Flex
        vertical
        style={{
          padding: 80,
          backgroundImage:
            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://smthdifferent.com/wp-content/uploads/2024/04/7ACA.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 800,
          // borderRadius: borderRadiusLG,
          // width: screenXL,
          // margin: "auto",
          width: "100%",

          justifyContent: "flex-end",
        }}
        gap={10}
      >
        <div
          style={{
            width: screenXL,
            margin: "0 auto",
            padding: 80,
          }}
        >
          <Space direction="vertical" size={20}>
            <Title
              style={{
                color: "white",
                fontSize: 48,
                margin: 0,
              }}
            >
              7A Commonwealth Avenue
            </Title>
            <Title
              style={{
                color: "#aaa",
                fontSize: 30,
                margin: 0,
              }}
            >
              The Tropical Home
            </Title>
            <Button
              type="primary"
              icon={<EyeOutlined />}
              size="large"
              onClick={() => setVisible(true)}
            >
              View More
            </Button>
          </Space>
        </div>
      </Flex>
      <Flex
        vertical
        style={{
          margin: "auto",
          maxWidth: screenXL,
          padding: 80,
        }}
        gap={10}
      >
        <Paragraph>
          In this series, we went down the wormhole of colour and texture
          exploration. Natural light, being the emphasis in this corridor unit,
          the intentional T shape main circulation spine draws light into the
          unit and allows the opportunity to create pockets of break out spaces
          within.
        </Paragraph>
        <Paragraph>
          The layout is clean and simple, demarcating the private and communal
          spaces. Each micro space varies and is celebrated with careful use of
          pop colours and textures. As we reconfigure the internal circulation,
          it creates a threshold between the living and the bedrooms. The
          transitional space provides a moment of pause and a brief respite
          before entering the rooms.
        </Paragraph>
      </Flex>
    </Flex>
  );
};
export default X;
