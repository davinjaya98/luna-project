import { Grid, Container, Segment } from "semantic-ui-react";
import "./footer.less";

const Footer = () => (
  <footer>
    <Segment vertical inverted color="blue">
      <Container>
        <Grid verticalAlign="middle">
          <Grid.Row columns="equal" className="footer__row">
            <Grid.Column className="footer__column-left">
              <p className="footer__column-left__company-name font-base-sm">
                PT. Luna Global Travelindo
              </p>
              <p className="footer__column-left__copyright-text font-base-xs">
                All Rights Reserved
              </p>
            </Grid.Column>
            <Grid.Column textAlign="right" className="footer__column-right">
              <span className="font-base-xs">
                Become an Agent? <a href="#">Click Here</a>
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </footer>
);

export default Footer;
