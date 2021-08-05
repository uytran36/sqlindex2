import { Image, Row, Col, Button, InputNumber, Card, Avatar } from "antd";
import Icon from "@ant-design/icons";

const StarSvg = () => (
  <svg height="15px" viewBox="0 -10 511.98685 511" width="15px">
    <path
      d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
      fill="#ffc107"
    />
  </svg>
);

const StarIcon = (props) => <Icon component={StarSvg} {...props} />;

const description = (
  <div>
    4.2/5 <StarIcon />
  </div>
);

export default function ProductDetail() {
  const { Meta } = Card;
  function onChange(value) {
    console.log("changed", value);
  }
  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Row>
            <Col flex="300px">
              <Image
                width={200}
                src="https://salt.tikicdn.com/cache/w200/ts/product/25/fd/0b/b3c2299af08efca753341bafb7d7b627.jpg"
              />
            </Col>
            <Col flex="auto">
              <Row>
                <Col flex="auto">
                  <div className="product-content">
                    <p style={{fontSize: 30, fontWeight: 900}}>Chuột Logitech B100</p>
                    <b>2.000.000</b>
                    <div>Số lượng</div>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={onChange}
                    />
                    <Button type="primary" danger>
                      Chọn mua
                    </Button>
                  </div>
                </Col>
                <Col flex="auto">
                  <div className="product-owner">
                    <Card style={{ width: 300, marginTop: 16 }}>
                      <Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Store 1"
                        description={description}
                      />
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
