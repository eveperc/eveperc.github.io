import { Header, Menu, Group, Center, Burger, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function MyHeader({ links }: HeaderSearchProps) {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span>{link.label}</span>
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header className="header w-full" height={56} mb={120}>
      <Container className="w-full">
        <div className="flex justify-between">
          <MantineLogo size={28} inverted />
          <Group spacing={5} className="flex">
            {items}
          </Group>
        </div>
      </Container>
    </Header>
  );
}
