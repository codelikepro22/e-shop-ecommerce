import { AppBar, Container, Tab, Tabs } from '@mui/material';
import { forwardRef, useState } from 'react';
import Link from '../../utils/mui/Link';

type LinkTabProps = {
  href: string;
  label: String;
};

const LinkTab = forwardRef<HTMLLIElement, LinkTabProps>(
  ({ href, ...rest }, ref) => (
    <Link href={href} color="inherit" sx={{ textDecoration: 'none' }}>
      <Tab {...rest} ref={ref} component="li" />
    </Link>
  )
);

const TabsNav = () => {
  const [pageTab, setPageTab] = useState(0);
  return (
    <AppBar position="sticky">
      <Container>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
          indicatorColor="secondary"
          value={pageTab}
          onChange={(e, newValue) => setPageTab(newValue)}
        >
          <LinkTab label="Home" href="/" />
          <LinkTab label="Products" href="/products" />
          <LinkTab label="Account" href="/account" />
          <LinkTab label="About" href="/about" />
        </Tabs>
      </Container>
    </AppBar>
  );
};

export default TabsNav;
