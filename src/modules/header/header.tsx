import { Button, Container, Grid, Icon, Segment } from "semantic-ui-react";
import "./header.less";

const Header = () => (
  <Segment vertical>
    <Container>
      <Grid>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Button primary>Logo</Button>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button icon secondary>
              <Icon name="bell outline" />
            </Button>
            <Button icon primary>
              <Icon name="log out" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
export default Header;
