"use client";
import {
  InstagramOutlined,
  SendOutlined,
  SpotifyOutlined,
} from "@ant-design/icons";
import { Button, Divider, Flex, Layout, Menu, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../public/antd.min.css";
import "./globals.css";

const navItems = [
  {
    label: "About us",
    key: "/about",
  },
  {
    key: "work",
    label: "Our works",
  },
];
const Container = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  return (
    <Layout
      style={{ display: "flex", minHeight: "100vh", alignItems: "stretch" }}
    >
      <Header
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "space-between",
          width: 1200,
        }}
      >
        <Link href="/">
          <img src="https://smthdifferent.com/wp-content/uploads/2024/04/logo-black-small.png" />
        </Link>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navItems}
          onClick={({ key }) => router.push(key)}
          style={{
            minWidth: 0,
            flex: 1,
            fontSize: 18,
            lineHeight: 4,
            display: "flex",
            justifyContent: "flex-end",
          }}
        />
      </Header>
      <Content style={{}}>{children}</Content>
      <Divider />
      <Footer style={{ textAlign: "center", maxWidth: 1200, margin: "auto" }}>
        <Flex vertical gap={30} align="center">
          <Space>
            <Button size="large" icon={<InstagramOutlined />} />
            <Button size="large" icon={<SpotifyOutlined />} />
            <Button size="large" icon={<SendOutlined />} />
          </Space>
          <Paragraph>
            All creatives and photos on this website are copyrighted and are the
            property of SMTH Different and/or the photographer. These photos may
            not be used for commercial purposes without the express written
            permission of the copyright owner. Please contact us at
            hmu@smthdifferent.com to request permission to use any of the photos
            on this website.
          </Paragraph>
          <Paragraph>All rights reserved.</Paragraph>
        </Flex>
      </Footer>
    </Layout>
  );
};
export default Container;
