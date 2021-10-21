import {
  Header,
  Nav,
  Group,
  GreyLine,
  AllLocations,
  AcmeLocations,
} from "./Header";

function LocationHeader() {
  return (
    <Header>
      <Nav>
        <Group>
          <AllLocations> All Locations </AllLocations>
          <AcmeLocations> Acme Locations </AcmeLocations>
        </Group>
      </Nav>
      <GreyLine />
    </Header>
  );
}

export default LocationHeader;
