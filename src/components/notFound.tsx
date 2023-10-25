import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";
interface IRouteError {
  statusText: string;
  data: string;
}
const NotFound = () => {
  const navigate = useNavigate();
  const error = useRouteError() as IRouteError;
  return (
    <Container>
      <Row>
        <Col>
          <div className="error-page text-center mt-5">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText}</p>
            <p>{error.data}</p>
            <Button
              variant="link"
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
