import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from './Track.c.scss';
import Block from "./viewBlocks/Block";
import TopNav from './TopNav';
import TitleMod from './TitleMod';

const AllPartners = () =>
  <div>
    <Grid className={styles.hero} fluid>
      <TopNav />
      <Row className={styles.background_top} center="xs">
      <TitleMod />
      </Row>
    </Grid>
    <Block className={styles.block}>
    <Row center="xs">
      <Col xs={6} md={4}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/elisa.png"
          className="responsive"
        />
      </Col>
      <Col xs={6} md={4}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/veikkaus.png"
          className="responsive"
        />
      </Col>
      <Col xs={6} md={4}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/nordea.png"
          className="responsive"
        />
      </Col>
      <Col xs={6} md={4}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/planmeca.png"
          className="responsive"
        />
      </Col>
      <Col xs={6} md={4}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/smartly.png"
          className="responsive"
        />
      </Col>
      <Col xs={6} md={4}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/outotec.png"
          className="responsive"
        />
      </Col>
      <Col xs={6} md={4}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/stara.png"
          className="responsive"
        />
      </Col>
      <Col xs={12} md={12}>
        <hr className={styles.separator}></hr>
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suunto.png"
          className="responsive"
        />
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/09/sitra.png"
          className="responsive"
        />
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/helvar.png"
          className="responsive"
        />
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/procountor.png"
          className="responsive"
        />
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/finnid.png"
          className="responsive"
        />
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/aalto.png"
          className="responsive"
        />
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fleetboard.png"
          className="responsive"
        />
      </Col>
      <Col xs={4} md={3}>
        <img
          src="https://staging.hackjunction.com/wp-content/uploads/2017/09/qt.png"
          className="responsive"
        />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/kone.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/trimble.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/09/kamu.png"
            className="responsive"
          />
        </Col>
        <Col xs={4} md={3}>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2017/09/trueface.png"
              className="responsive"
            />
        </Col>
        <Col xs={4} md={3}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/suneffects.png"
            className="responsive"
          />
        </Col>
    </Row>
    </Block>

  </div>;

export default AllPartners;