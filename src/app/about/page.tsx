"use client";
import { Card, Divider, Flex, Space, theme } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";

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
  return (
    <Flex vertical>
      <Flex
        vertical
        style={{
          margin: "auto",
          maxWidth: screenXL,
          textAlign: "center",
          padding: 80,
          alignItems: "center",
        }}
      >
        <img
          src="https://smthdifferent.com/wp-content/uploads/2024/01/F_SMTH-DIfferent-Logo-01.png"
          alt=""
          width="50"
          height="38"
          style={{ margin: 30 }}
        />
        <Title>Something Different: Where Design Takes Shape</Title>
        <Paragraph>
          We're more than just a design firm – we're storytellers, architects of
          experiences, and passionate collaborators. At Something Different, we
          believe good design transcends aesthetics; it evokes emotion, sparks
          conversation, and pushes boundaries. We're driven by the belief that
          every project, big or small, deserves a unique touch, a dash of the
          unexpected.
        </Paragraph>
      </Flex>
      <img
        src="https://smthdifferent.com/wp-content/uploads/2024/01/33_MD_Smthdifferent_Finbarr_Fallon_2-thumbnail-for-gif.jpg"
        alt="hi"
        style={{
          height: 600,
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
        }}
      />
      <Flex
        style={{
          margin: "auto",
          width: screenXL,
          padding: 100,
        }}
        gap={100}
      >
        <img
          src="https://smthdifferent.com/wp-content/uploads/2024/04/Image_8.jpg"
          style={{ width: 400, objectFit: "cover", borderRadius: 50 }}
        />
        <Flex vertical>
          <Title type="secondary" level={3}>
            Our Philosophy
          </Title>
          <Title>The Something Different Difference: Design with Purpose</Title>
          <Paragraph
            style={{
              fontSize: 20,
            }}
          >
            We're committed to crafting design experiences that are both bold
            and purposeful. We believe in:
            <ul style={{paddingTop: 50}}>
              <li>
                <strong>Collaboration</strong>: Your vision is our compass. We work closely with
                clients, listening attentively to their needs and aspirations.
              </li>
              <li>
                <strong>Innovation</strong>: We embrace new technologies and trends, always
                seeking fresh perspectives and pushing creative boundaries.
              </li>
              <li>
                <strong>Storytelling</strong>: Every design tells a story. We strive to weave
                narratives that resonate with your audience, leaving a lasting
                impression.
              </li>
            </ul>
          </Paragraph>
        </Flex>
      </Flex>
      <Divider />
      <Flex
        vertical
        style={{
          margin: "auto",
          width: screenXL,

          padding: 100,
        }}
      >
        <Title>Behind the Lens: Sim Jun Hong & Louise Hong</Title>
        <Flex gap={100}>
          <Card
            hoverable
            style={{ width: 240, flex: 1 }}
            cover={
              <img
                style={{ height: 300, objectFit: "cover" }}
                alt="example"
                src="https://plus.unsplash.com/premium_photo-1661627681947-4431c8c97659?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D"
              />
            }
          >
            <Meta
              title="JunHong, Sim"
              description="Sim is an architect with a keen eye for detail and a knack for conceptualizing innovative solutions. His architectural background informs his design approach, bringing structure and function to every project."
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240, flex: 1 }}
            cover={
              <img
                alt="example"
                style={{
                  height: 300,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title="Louise, Hong"
              description="Louise is a creative powerhouse with a passion for user experience. She brings a human-centered perspective to the table, ensuring that our designs are not only visually appealing but also intuitive and engaging."
            />
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default X;
