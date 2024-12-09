"use client";

import {
  InstagramOutlined,
  SpotifyOutlined,
  SendOutlined,
} from "@ant-design/icons";
import React from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  Button,
  theme,
  Typography,
  Divider,
  Space,
  Flex,
} from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const Landing = () => {
  const {
    token: {
      colorBgContainer,
      borderRadiusLG,
      screenLGMax,
      fontSizeLG,
      screenXXL,
    },
  } = theme.useToken();
  return (
    <div
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        maxWidth: screenXXL,
        margin: "auto",
        overflow: "hidden",
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://smthdifferent.com/wp-content/uploads/2024/04/Copy-of-SD-20KB-2.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "center",

        minHeight: 800,

        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <Title
        style={{
          color: "white",
          fontSize: 64,
          margin: 0,
        }}
      >
        SMTH di<i>ff</i>erent:{" "}
      </Title>
      <Title
        style={{
          color: "white",
          fontSize: 108,
          margin: 0,
        }}
      >
        Design Beyond Ordinary.
      </Title>
      <Title
        level={4}
        style={{
          color: "white",
          margin: 30,
        }}
      >
        Redefine expectations. Experience design that's truly something
        different.
      </Title>
      <Button
        size="large"
        shape="round"
        type="primary"
        style={{
          alignSelf: "center",
        }}
      >
        Contact us
      </Button>

      {/*
          <img srcset="https://smthdifferent.com/wp-content/uploads/2024/04/Copy-of-SD-20KB-2.jpg 1440w, https://smthdifferent.com/wp-content/uploads/2024/04/Copy-of-SD-20KB-2-300x200.jpg 300w, https://smthdifferent.com/wp-content/uploads/2024/04/Copy-of-SD-20KB-2-1024x683.jpg 1024w, https://smthdifferent.com/wp-content/uploads/2024/04/Copy-of-SD-20KB-2-768x512.jpg 768w, https://smthdifferent.com/wp-content/uploads/2024/04/Copy-of-SD-20KB-2-700x467.jpg 700w, https://smthdifferent.com/wp-content/uploads/2024/04/Copy-of-SD-20KB-2-1100x733.jpg 1100w" />
            */}
    </div>
  );
};
export default Landing;
